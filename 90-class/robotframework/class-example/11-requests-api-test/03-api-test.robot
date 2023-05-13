*** Settings ***
Documentation    Example of testing an API with Robot Framework
Library          RequestsLibrary

*** Variables ***
${BASE_URL}      https://jsonplaceholder.typicode.com

*** Test Cases ***
Test Get Posts
    [Documentation]  Test GET request to retrieve posts
    [Tags]           api
    ${response}=     Get Request      ${BASE_URL}/posts
    Should Be Equal  ${response.status_code}  200
    Should Be True   ${response.content} contains  "title"
    Should Be True   ${response.content} contains  "body"

Test Post New Post
    [Documentation]  Test POST request to create a new post
    [Tags]           api
    ${headers}=      Create Dictionary  Content-Type=application/json
    ${payload}=      Create Dictionary  title=Test post  body=This is a test post
    ${response}=     Post Request      ${BASE_URL}/posts   json=${payload}   headers=${headers}
    Should Be Equal  ${response.status_code}  201
    Should Be True   ${response.content} contains  "id"
    Should Be Equal  ${response.json()['title']}  ${payload['title']}
    Should Be Equal  ${response.json()['body']}  ${payload['body']}