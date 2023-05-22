*** Settings ***
Documentation       Naver 사전 테스트
Library             SeleniumLibrary
#Test Teardown       Close Browser

*** Variables ***
${URL}   https://ko.dict.naver.com/

*** Test Cases ***
TC1 - 네이버 사전 검색 - 크롬 브라우저 - 검색
    크롬 브라우저로 주소 열기        ${URL}
    검색어 입력                     검색
    검색 버튼 클릭
    Wait Until Element Is Visible   xpath://div[@id='searchPage_entry']
    Page Should Contain Element     xpath://div[@id='searchPage_entry']   검색

TC2 - 네이버 사전 검색 - 크롬 브라우저 - NAVER
    크롬 브라우저로 주소 열기        ${URL}
    검색어 입력                     NAVER
    검색 버튼 클릭
    Wait Until Element Is Visible   xpath://div[@id='searchPage_entry']
    Page Should Contain Element     xpath://div[@id='searchPage_entry']   NAVER

TC3 - 네이버 사전 검색 - 크롬 브라우저 - ROBOT
    크롬 브라우저로 주소 열기        ${URL}
    검색어 입력                     ROBOT
    검색 버튼 클릭
    Wait Until Element Is Visible   xpath://div[@id='searchPage_entry']
    Page Should Contain Element     xpath://div[@id='searchPage_entry']   ROBOT

*** Keywords ***
주소 열기
    [Arguments]     ${browser}    ${url}
    Create WebDriver        ${browser}
    Maximize Browser Window
    Go To                   ${url}
    Wait For Condition      return !!document.body

크롬 브라우저로 주소 열기
    [Arguments]     ${url}
    주소 열기        Chrome    ${url}

검색어 입력
    [Arguments]     ${keyword}
    Input Text      xpath://input[@name="query"]     ${keyword}

검색 버튼 클릭
    Wait Until Element Is Visible       xpath://button[@class="btn_search"]
    Click Element                       xpath://button[@class="btn_search"]