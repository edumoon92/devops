*** Settings ***
Library  SeleniumLibrary

*** Variables ***
${LOGIN PAGE}    http://192.168.7.3:3000/
${BROWSER}     chrome

*** Test Cases ***
Login with valid credentials
    Open Browser  ${LOGIN PAGE}  ${BROWSER}
    Input Text  user-name  standard_user
    Input Text  password  secret_sauce
    Click Button  login-button
    Page Should Contain Element  inventory_container

    Close Browser