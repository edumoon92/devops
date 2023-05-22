*** Settings ***

*** Variable ***

*** Test Case ***
TestCase 1
    Should Be Equal    1    1
    Should Be Equal    2    2
    Should Be Equal    3    3

TestCase 2
    Should Be Equal    1    1
    #Should Be Equal    2    2
    Should Be Equal    3    3    EqualCheck

*** Keywords ***
