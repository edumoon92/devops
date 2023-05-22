*** Settings ***
Library           SeleniumLibrary
Library           DataDriver    TestData/TestData.csv
Test Template     Keywoard - CGV 검색 - Data Driven

*** Variable ***
${URL}            https://www.cgv.co.kr

*** Test Cases ***
CGV 검색 - Data Driven ${querydata1}       ${querydata2}

*** Keywords ***
Keywoard - CGV 검색 - Data Driven
    [Arguments]    ${querydata2}
    Open Browser    ${URL}    chrome
    Input Text    xpath://*[@id="header_keyword"]    ${querydata2}
    Press Keys    xpath://*[@id="header_keyword"]    ENTER
    Page Should Contain    ${querydata2}
    Close Browser
