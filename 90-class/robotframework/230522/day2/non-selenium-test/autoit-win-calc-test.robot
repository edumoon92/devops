*** Settings ***
Library    AutoItLibrary

*** Test Cases ***
Windows Calculator Test
    Open Application    calc.exe
    Click Calculator Button    7
    Click Calculator Button    *
    Click Calculator Button    4
    Click Calculator Button    =
    ${result}    Get Calculator Result
    Log    Result: ${result}
    Should Be Equal As Numbers    ${result}    28

*** Keywords ***
Open Application
    [Arguments]    ${application}
    Run    ${application}
    Win Wait Active    Calculator

Click Calculator Button
    [Arguments]    ${button}
    Control Click    Calculator    [CLASS:Button; INSTANCE:${button}]

Get Calculator Result
    Control Get Text    Calculator    [CLASS:Static; INSTANCE:2]