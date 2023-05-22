*** Settings ***
Library         SeleniumLibrary

*** Variable ***
${URL}            https://www.lge.co.kr
${QUERY}          모가디슈
@{QUERYLIST}      모가디슈          인질
&{QUERYDICT}      key1=모가디슈    key2=인질

*** Test Cases ***
TC1.1 - LGE 홈페이지 클릭
    Open Browser    ${URL}    chrome
    Click Element   //*[@id="main-init-popup"]/div/button
    Log             /html/body/div[1]/header/div[2]/div[2]/div[2]/div[1]/ul/li[1]/a
