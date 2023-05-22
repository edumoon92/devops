*** Settings ***
Library    Debug

*** Test Cases ***
Example Test
    Log    This is the first step
    Stop Execution
    Log    This step will not be executed

    Log    This step will not be executed either