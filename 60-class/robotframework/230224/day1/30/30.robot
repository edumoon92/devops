*** Settings ***
Library           SeleniumLibrary
*** Test Cases ***
TC1.1 Open Browser with chrome
    Open Browser    https://www.naver.com    chrome
    Close Browser
