*** Settings ***
Documentation     A test suite with a single test for valid login.
Resource          resource.robot

Suite Setup       Open Browser To Login Page
Suite Teardown    Go To     http://localhost:7272/
Test Teardown     Teardown Action

*** Test Cases ***
Valid Login With Tags
    [Tags]   login-valid-1      login
    [Template]  Template Input Login Data And Click
    ${USER1}    ${PASS1}
    ${USER2}    ${PASS2}


*** Keywords ***
Teardown Action
    Go To     http://localhost:7272/
    Log To Console      ${TEST NAME} ${TEST STATUS}

Template Input Login Data And Click
    [Arguments]     ${user}      ${pass}

    Go To     http://localhost:7272/

    Input Login Data with Two Args And Then Click      ${user}      ${pass}
  
    Location Should Be    http://localhost:7272/welcome.html
    Title Should Be    Welcome Page
