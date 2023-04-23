*** Settings ***
Library         SeleniumLibrary

*** Variable ***
${URL}            https://www.cgv.co.kr
${QUERY}          모가디슈
@{QUERYLIST}      모가디슈          인질
&{QUERYDICT}      key1=모가디슈    key2=인질

*** Test Cases ***
TC1.1 - CGV Test - firefox
    Open Browser    ${URL}    firefox
    Click Element   //*[@id="header_keyword"]
    Log To Console  Cgv Click    

TC1.1.1 - CGV Test -headless
    Open Browser    ${URL}    headlessfirefox
    Click Element   //*[@id="header_keyword"]
    Log To Console  Cgv Click    

TC1.2 Input Query 
    Input Text      //*[@id="header_keyword"]       멀티버스
    Press Keys      //*[@id="header_keyword"]       ENTER
