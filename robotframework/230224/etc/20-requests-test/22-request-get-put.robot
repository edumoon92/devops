*** Settings ***
Library  Collections
Library  String
Library  RequestsLibrary
Resource  res_setup.robot

Suite Setup     Setup Flask Http Server
Suite Teardown  Teardown Flask Http Server And Sessions

*** Test Cases ***
Get Request
    [Tags]  get
    ${resp}=            GET  ${HTTP_LOCAL_SERVER}/anything
    Status Should Be    OK  ${resp}

Get Request With Url Params As Dictionary
    [Tags]  get
    ${params}=          Create Dictionary   param1=1  param2=2
    ${resp}=            GET  ${HTTP_LOCAL_SERVER}/anything  ${params}
    Status Should Be    OK  ${resp}
    Dictionaries Should Be Equal  ${params}  ${resp.json()}[args]

Post Request
    [Tags]  post
    ${resp}=            POST  ${HTTP_LOCAL_SERVER}/anything
    Status Should Be    OK  ${resp}

Post Request With Data
    [Tags]  post
    ${resp}=            POST  ${HTTP_LOCAL_SERVER}/anything  string
    Status Should Be    OK  ${resp}
    Should Be Equal As Strings  ${resp.json()}[data]  string

Put Request
    [Tags]  put
    ${resp}=            PUT  ${HTTP_LOCAL_SERVER}/anything
    Status Should Be    OK  ${resp}

Put Request With Data
    [Tags]  put
    ${resp}=            PUT  ${HTTP_LOCAL_SERVER}/anything  string
    Status Should Be    OK  ${resp}
    Should Be Equal As Strings  ${resp.json()}[data]  string