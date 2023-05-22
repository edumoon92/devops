*** Settings ***
Library           SeleniumLibrary

*** Test Cases ***
TC1
    Open Browser    http://robotframework.org/    chrome
    Close Browser

TC2
    Open Browser    http://robotframework.org/    chrome
    Close Browser
    Log To Console    Complete Successfully - ie

TC3
    Open Browser    http://robotframework.org/    ff
    Close Browser
    Log To Console    Complete Successfully - ie

TC4
    Open Browser    http://robotframework.org/    ff
    Close Browser
    Log To Console    Complete Successfully - ie
