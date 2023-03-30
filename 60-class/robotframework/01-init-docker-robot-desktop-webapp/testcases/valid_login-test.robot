*** Settings ***
Documentation     A test suite with a single test for valid login.
Resource          resource.robot

Suite Setup       Open Browser To Login Page
Suite Teardown    Go To     http://localhost:7272/
Test Teardown     Teardown Action

*** Test Cases ***
Valid Login

    Input Login Data with Two Args And Then Click      ${USER1}      ${PASS1}

    Location Should Be    http://localhost:7272/welcome.html
    Title Should Be    Welcome Page

Valid Login 1

    Input Login Data with Two Args And Then Click      ${USER1}      ${PASS1}

    Location Should Be    http://localhost:7272/welcome.html
    Title Should Be    Welcome Page


*** Keywords ***
Teardown Action
    Go To     http://localhost:7272/
    Log To Console      ${TEST NAME} ${TEST STATUS}