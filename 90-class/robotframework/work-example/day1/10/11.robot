*** Settings ***
Library           SeleniumLibrary

*** Test Cases ***
TC1 - 브라우저 열기 (#1)
    Open Browser    https://www.naver.com
    Close Browser

TC2 - 브라우저 열기 (chrome)
    Open Browser    https://www.daum.net    chrome
    Close Browser

TC3 - 브라우저 열기 (chrome) - Go To
    Open Browser    https://www.daum.net    chrome
    Go To    https://www.naver.com
    Go Back
    Close Browser

TC4 - 브라우저 열기 (chrome) - Multi
    Open Browser    https://www.daum.net    chrome
    Go To    https://www.naver.com
    Go Back
    Go To    https://dict.naver.com/
    Go To    https://news.naver.com/
    Close Browser

TC5 - 브라우저 열기 (chrome, ff)
    Open Browser    https://www.daum.net    chrome
    Go To    https://www.naver.com
    Go Back
    Go To    https://dict.naver.com/
    Go To    https://news.naver.com/
    Open Browser    https://news.naver.com/    ff
    Go To    https://www.naver.com
    Go Back
    Go To    https://dict.naver.com/
    Go To    https://news.naver.com/
    Close All Browsers
