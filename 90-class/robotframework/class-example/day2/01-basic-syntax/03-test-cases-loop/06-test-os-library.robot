*** Settings ***
Library           OperatingSystem

*** Variables ***

*** Test Cases ***
HelloRobot
    [Documentation]    Os simple commands
    call User Library

*** Keywords ***
Call User Library
    ${cd}=    Run    cd
    Log To Console    ${cd}
    # List the files under current dir path with absolute path
    ${files}=    List Files In Directory    ${cd}    *.*    absolute
    Log To Console    ${files}
    # Run the command like we execute on the prompt
    ${execute}=    Run    ${cd}/test.py
    Log To Console    ${execute}
