*** Settings ***
Documentation     A test suite with a single test for valid login.
Resource          resource.robot

Suite Setup       Open Browser To Login Page
Suite Teardown    Go To     http://localhost:7272/
Test Setup        Go To     http://localhost:7272/

*** Test Cases ***
TC 1.1 Valide
    FOR   ${index}   IN RANGE   3
        Invalid Login Action
    END


*** Keywords ***
Valid Login Action
    [Arguments]     ${user}      ${pass}
    Input Login Data with Two Args And Then Click      ${user}     ${pass}
    Go To     http://localhost:7272/

    #Location Should Be    http://localhost:7272/welcome.html
    #Title Should Be    Welcome Page

Invalid Login Action

    Input Login Data with Two Args And Then Click      ${USER1}      ${PASS1}

    Location Should Be    http://localhost:7272/welcome.html
    Title Should Be    Welcome Page

    Go To     http://localhost:7272/


Teardown Action
    Go To     http://localhost:7272/
    Log To Console      ${TEST NAME} ${TEST STATUS}