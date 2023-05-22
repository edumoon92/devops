
*** Test Cases ***
Run-Keyword
    Run Keywords     Step Own     Step Two

Run-Keyword-If
    ${USER_DATA}=    Set Variable    DevsOps
    Log to Console    ${USER_DATA}
    Run Keyword If    '${USER_DATA}' == 'DevsOps'        Log To Console    Testing If statement A
    Run Keyword If    '${USER_DATA}' == 'Traditional'    Log To Console    Testing If statement B


*** Keyword ***
Step Own
    Log To Console      One

Step Two
    Log To Console      Two