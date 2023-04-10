*** Settings ***
Documentation     A resource file with reusable keywords and variables.
...
...               The system specific keywords created here form our own
...               domain specific language. They utilize keywords provided
...               by the imported SeleniumLibrary.
Library           SeleniumLibrary

*** Variables ***
${SERVER}         localhost:7272
${BROWSER}        Firefox
${DELAY}          0
${VALID USER}     demo
${VALID PASSWORD}    mode
${LOGIN URL}      http://${SERVER}/
${WELCOME URL}    http://${SERVER}/welcome.html
${ERROR URL}      http://${SERVER}/error.html


${USER1}        demo
${PASS1}        mode
${USER2}        demo1
${PASS2}        mode1
${USER3}        demo2
${PASS3}        mode2

@{USERS}       [demo, user1, user2, user3, user4, user5, user6, user7, user8, user9]
@{PASSWORDS}   [mode, mode1, mode2, mode3, mode4, mode5, mode6, mode7, mode8, mode9]

*** Keywords ***



Input Login Data with Two Args And Then Click
    [Arguments]     ${user}     ${pass}

    Input Text    username_field    ${user}
    Input Text    password_field    ${pass}
    Click Button    login_button



Open Browser To Login Page
    Open Browser    ${LOGIN URL}    ${BROWSER}
    Maximize Browser Window
    Set Selenium Speed    ${DELAY}
    Login Page Should Be Open

Login Page Should Be Open
    Title Should Be    Login Page

Go To Login Page
    Go To    ${LOGIN URL}
    Login Page Should Be Open

Input Username
    [Arguments]    ${username}
    Input Text    username_field    ${username}

Input Password
    [Arguments]    ${password}
    Input Text    password_field    ${password}

Submit Credentials
    Click Button    login_button

Welcome Page Should Be Open
    Location Should Be    ${WELCOME URL}
    Title Should Be    Welcome Page
