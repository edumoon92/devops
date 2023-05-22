*** Settings ***
Library           SeleniumLibrary

*** Test Cases ***
TC1.1
    Open Browser    https://www.naver.com    chrome
    Close Browser

TC1.2
    Open Browser    https://www.naver.com    ff
    Close Browser

TC1.3
    Open Browser    https://www.naver.com    chrome
    Go To    https://news.naver.com
    Go To    https://stock.naver.com
    Go To    https://sports.naver.com
    Go To    https://car.naver.com
