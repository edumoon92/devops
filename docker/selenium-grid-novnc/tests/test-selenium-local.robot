*** Settings ***
Library           SeleniumLibrary

*** Variables ***
${BROWSER}        firefox
${URL}            https://www.google.com

*** Test Cases ***
Remote Selenium Test
    Open Browser    ${URL}    ${BROWSER}
    Input Text      name=q    Robot Framework
    Submit Form
    Title Should Be    Google
    Close Browser
