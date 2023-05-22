*** Settings ***
Documentation     구글 검색 테스트
Library           SeleniumLibrary    #Test Teardown    Close Browser

*** Variables ***
${GOOGLE_URL}     https://www.google.com

*** Test Cases ***
구글 검색 - 크롬 브라우저
    크롬 브라우저로 주소 열기    ${GOOGLE_URL}
    검색어 입력    Github
    검색 버튼 클릭
    Wait Until Element Is Visible    css:div#rso
    Page Should Contain Element    xpath://div[@class='main']    "https://github.com/"
    # Close Browser

구글 검색 - 파이어폭스 브라우저
    파이어폭스 브라우저로 주소 열기    ${GOOGLE_URL}
    검색어 입력    Github
    검색 버튼 클릭
    Wait Until Element Is Visible    css:div#rso
    Page Should Contain Element    xpath://div[@class='main']    "https://github.com/"

*** Keywords ***
주소 열기
    [Arguments]    ${browser}    ${url}
    Create WebDriver    ${browser}
    Maximize Browser Window
    Go To    ${url}
    Wait For Condition    return !!document.body

크롬 브라우저로 주소 열기
    [Arguments]    ${url}
    주소 열기    Chrome    ${url}

파이어폭스 브라우저로 주소 열기
    [Arguments]    ${url}
    주소 열기    Firefox    ${url}

검색어 입력
    [Arguments]    ${keyword}
    Input Text    xpath://input[@name="q"]    ${keyword}

검색 버튼 클릭
    Wait Until Element Is Visible    xpath://input[@value="Google 검색"]
    Click Element    xpath://input[@value="Google 검색"]

검색어 입력(쿠팡)
    [Arguments]    ${keyword}
    Input Text    xpath://input[@id="headerSearchKeyword"]    ${keyword}

검색 버튼 클릭(쿠팡)
    Press Keys    xpath://input[@id="headerSearchKeyword"]    ENTER
