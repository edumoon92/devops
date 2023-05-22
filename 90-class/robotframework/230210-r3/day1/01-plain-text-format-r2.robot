*** Settings ***
Documentation     Example using the space separated plain text format.
Library           OperatingSystem

*** Variables ***
${MESSAGE}        Hello, world!

*** Test Cases ***
TC1 - 디렉토리 테스트
    [Documentation]    Example test
    Log    ${MESSAGE}
    디렉테리 존재 확인    /tmp

TC2 - 메시지 테스트
    Should Be Equal    ${MESSAGE}    Hello, world!

*** Keywords ***
디렉테리 존재 확인
    [Arguments]    ${path}
    Directory Should Exist    ${path}
