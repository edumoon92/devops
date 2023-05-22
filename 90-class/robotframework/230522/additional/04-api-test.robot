*** Settings ***
Documentation  API Testing in Robot Framework
Library  SeleniumLibrary
Library  RequestsLibrary
Library  JSONLibrary
Library  Collections

*** Variables ***

*** Test Cases ***
Do a GET Request and validate the response code and response body
    [documentation]  This test case verifies that the response code of the GET Request should be 200,
    ...  the response body contains the 'postId' key with value as '1',
    ...  and the response body contains the key 'email'.
    [tags]  Smoke
    Create Session  mysession  https://jsonplaceholder.typicode.com  verify=true
    ${response}=  GET On Session  mysession  /comments  params=postId=1
    Status Should Be  200  ${response}  #Check Status as 200

    #Check Email as Eliseo@gardner.biz from Response Body
    ${title}=  Get Value From Json  ${response.json()}[0]  email
    ${titleFromList}=  Get From List   ${title}  0
    Should be equal  ${titleFromList}  Eliseo@gardner.biz

    #Check name is present in the repsonse body
    ${body}=  Convert To String  ${response.content}
    Should Contain  ${body}  name

Do a POST Request and validate the response code, response body, and response headers
    [documentation]  This test case verifies that the response code of the POST Request should be 201,
    ...  the response body contains the 'id' key with value '101',
    ...  and the response header 'Content-Type' has the value 'application/json; charset=utf-8'.
    [tags]  Regression
    Create Session  mysession  https://jsonplaceholder.typicode.com  verify=true
    &{body}=  Create Dictionary  title=foo  body=bar  userId=9000
    &{header}=  Create Dictionary  Cache-Control=no-cache
    ${response}=  POST On Session  mysession  /posts  data=${body}  headers=${header}
    Status Should Be  201  ${response}  #Check Status as 201

    #Check id as 101 from Response Body
    ${id}=  Get Value From Json  ${response.json()}  id
    ${idFromList}=  Get From List   ${id}  0
    ${idFromListAsString}=  Convert To String  ${idFromList}
    Should be equal As Strings  ${idFromListAsString}  101

    #Check the value of the header Content-Type
    ${getHeaderValue}=  Get From Dictionary  ${response.headers}  Content-Type
    Should be equal  ${getHeaderValue}  application/json; charset=utf-8

*** Keywords ***