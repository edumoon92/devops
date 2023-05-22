*** Settings ***
Documentation    첫 번째 예제 - 평서문 디렉토리 존재 여부 확인
Library          OperatingSystem

*** Variables ***
${MESSAGE}       Hello, world!

*** Test Cases ***
시험항목 1.1
    [Documentation]                 /tmp 폴더 존재 여부 확인
    Log                             ${MESSAGE}
    시험 내용 - 디렉토리 존재 확인    /tmp

시험항목 1.2
    Should Be Equal           ${MESSAGE}      Hello, world!

*** Keywords ***
시험 내용 - 디렉토리 존재 확인
    [Arguments]               ${path}
    Directory Should Exist    ${path}


