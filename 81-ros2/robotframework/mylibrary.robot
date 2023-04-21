*** Settings ***
Library  MyLibrary.py

*** Test Cases ***
Example Test Case
    Increment Counter
    Increment Counter
    ${counter}=  Get Counter
    Should Be Equal As Integers  ${counter}  2