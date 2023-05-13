*** Settings ***
Library         SeleniumLibrary
Library         OperatingSystem

*** Variable ***
${URL}            https://www.cgv.co.kr
${QUERY}          모가디슈
@{QUERYLIST}      모가디슈          인질
&{QUERYDICT}      key1=모가디슈    key2=인질

*** Test Cases ***
TC - CGV 검색 - List Variable
    Open Browser    ${URL}    chrome
    Input Text    xpath://*[@id="header_keyword"]    ${QUERYLIST}[1]
    Press Keys    xpath://*[@id="header_keyword"]    ENTER
    Page Should Contain    ${QUERYLIST}[1]
    Close Browser

TC - CGV 검색 - Dict Variable
    Open Browser    ${URL}    chrome
    Input Text    xpath://*[@id="header_keyword"]    ${QUERYDICT.key1}
    Press Keys    xpath://*[@id="header_keyword"]    ENTER
    Page Should Contain    ${QUERYDICT.key1}
    Close Browser

TC - CGV 검색 - Builtin Variable
    Open Browser    ${URL}    chrome
    Input Text    xpath://*[@id="header_keyword"]    ${QUERYDICT.key1}
    Press Keys    xpath://*[@id="header_keyword"]    ENTER
    Page Should Contain    ${QUERYDICT.key1}
    Close Browser

    [Teardown]      TC - Teardown


*** Keywords ***

TC - Teardown
    Append To File      ${CURDIR}${/}output.txt      ${TEST NAME} - ${QUERYLIST}[1] - ${TEST STATUS} ${\n}
    Log                 ${QUERYLIST}[1]
    Log To Console      ${QUERYLIST}[1]
