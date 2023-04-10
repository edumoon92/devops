*** Settings ***
Library           SeleniumLibrary

*** Variable ***
${URL}            https://www.cgv.co.kr
${QUERY}          모가디슈

*** Test Cases ***
TC1 - CGV 검색 - Variable
    Open Browser    ${URL}    chrome
    Input Text    xpath://*[@id="header_keyword"]    ${QUERY}
    Press Keys    xpath://*[@id="header_keyword"]    ENTER
    Page Should Contain    ${QUERY}
    Close Browser
