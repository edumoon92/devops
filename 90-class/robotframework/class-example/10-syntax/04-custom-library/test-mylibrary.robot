*** Settings ***
Library  MyLibrary.py

*** Test Cases ***
TC1: Counter Test
    Increment Counter
    Increment Counter
    ${counter}=  Get Counter
    Should Be Equal As Integers  ${counter}  2

TC2: Greeting Test
    ${message}=    Greeting    World
    Should Be Equal    ${message}    Hello, World!

