*** Settings ***
Library    SeleniumLibrary

*** Test Cases ***
Open Website
    Open Browser    https://www.naver.com    chrome
    Title Should Be    NAVER
    Close Browser