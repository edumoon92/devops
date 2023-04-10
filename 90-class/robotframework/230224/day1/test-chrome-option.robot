*** Settings ***
Library           SeleniumLibrary
*** Test Cases ***
Browser Test
    Open Browser    url=https://www.naver.com    browser=chrome    options=add_argument("--no-sandbox")
    Close Browser

