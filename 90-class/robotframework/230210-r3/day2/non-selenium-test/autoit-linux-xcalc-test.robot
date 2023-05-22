*** Settings ***
Library    AutoItLibrary

*** Test Cases ***
XCalc Test
    Open XCalc
    Input Number    5
    Click Operator    Mul
    Input Number    4
    Click Operator    Equal
    ${result}    Get Result
    Log    Result: ${result}
    Should Be Equal As Numbers    ${result}    20

*** Keywords ***
Open XCalc
    Run    xcalc

Input Number
    [Arguments]    ${number}
    Control Click    Calculator    [CLASS:Button; TEXT:${number}]

Click Operator
    [Arguments]    ${operator}
    Control Click    Calculator    [CLASS:Button; TEXT:${operator}]

Get Result
    Control Get Text    Calculator    [CLASS:Static]