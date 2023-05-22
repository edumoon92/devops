*** Settings ***

*** Test Case ***
TestCase 1
    Should Be Equal    1    1
    Should Be Equal    2    2
    Should Be Equal    3    3

TestCase 2
    Should Be Equal    1    1
    Should Be Equal    2    3    같은지?
    #Should Be Equal    3    3   같은지?

*** Keywords ***

*** Variable ***

