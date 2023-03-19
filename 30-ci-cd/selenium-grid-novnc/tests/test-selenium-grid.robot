*** Settings ***
Library           SeleniumLibrary

*** Variables ***
${BROWSER}        firefox
${REMOTE_URL}     http://192.168.56.101:4444/wd/hub
${URL}            https://www.google.com

*** Test Cases ***
Remote Selenium Test
    Open Browser    ${URL}    ${BROWSER}    remote_url=${REMOTE_URL}
    Input Text      name=q    Robot Framework
    Submit Form
    Title Should Be    Google
    Close Browser
