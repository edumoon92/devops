*** Settings ***
Library   SeleniumLibrary

*** Test cases ***
TC 104
  Open Browser      https://www.naver.com/    chrome
  Log To Console    Open Complete
  Close Browser

TC 105
  Open Browser      https://www.naver.com/    chrome
  Log To Console    Open Complete
  Close Browser

*** Keywords ***