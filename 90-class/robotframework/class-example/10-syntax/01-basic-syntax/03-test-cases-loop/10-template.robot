
*** Settings ***
Test template    Template Login Example

*** Test cases ***
Call Template
    # arg1      agr2           agr3
    root       root         xyz.hostname  # hostname/IP
    dev        rootdev      abc.hostname

*** Keywords ***
Template Login Example
    [Arguments]  ${username}=  ${password}=  ${server}=

    Log To Console   \n ${username} : ${password} : ${server}
    Run Keyword If   '${password}' == 'root'        Connect To ServerA
    ...    ELSE IF   '${password}' == 'rootdev'     Connect To ServerB

Connect To ServerA
   Log To Console     " Log in to Server A "

Connect To ServerB
   Log To Console     " Log in to Server B "
