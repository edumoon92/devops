*** Setting ***
Suite Setup       Open Browser To Start Page
Suite Teardown    Close All Browsers
Test Setup        Go To Page "forms/prefilled_email_form.html"
Force Tags        Known Issue Internet Explorer
Resource          ../resource.robot

*** Test Cases ***
Get Value From Text Field
    ${text} =    Get Value    name
    Should Be Equal    ${text}    Prefilled Name
    Clear Element Text    name
    ${text} =    Get Value    name
    Should Be Equal    ${text}    ${EMPTY}

Input Text and Input Password
    [Documentation]    LOG 1 Typing text 'username' into text field 'username_field'.
    ...    LOG 2 Typing password into text field 'password_field'.
    [Setup]    Go To Page "forms/login.html"
    Input Text    username_field    username
    Input Password    password_field    password
    ${username} =    Get Value    username_field
    ${password} =    Get Value    password_field
    Should Be Equal    ${username}    username
    Should Be Equal    ${password}    password
    Submit Form
    Verify Location Is "forms/submit.html"

Input Password Should Not Log Password String
    [Documentation]    LOG 1:1 INFO Typing password into text field 'password_field'.
    ...    LOG 1:2 DEBUG STARTS: POST http
    ...    LOG 1:3 DEBUG STARTS: http
    ...    LOG 1:4 DEBUG Finished Request
    ...    LOG 1:5 DEBUG STARTS: POST http
    ...    LOG 1:6 DEBUG STARTS: http
    ...    LOG 1:7 DEBUG Finished Request
    ...    LOG 1:8 INFO Temporally setting log level to: NONE
    ...    LOG 1:9 INFO Log level changed from NONE to DEBUG.
    ...    LOG 1:10 NONE
    ...    LOG 2:1 INFO Typing text 'username' into text field 'username_field'.
    [Tags]    NoGrid
    [Setup]    Go To Page "forms/login.html"
    Input Password    password_field    password
    Input Text    username_field    username

Input Text and Input Password No Clear
    [Setup]    Go To Page "forms/login.html"
    Input Text    username_field    user    clear=False
    Input Password    password_field    pass    False
    Input Text    username_field    name    clear=False
    Input Password    password_field    word    False
    ${username} =    Get Value    username_field
    ${password} =    Get Value    password_field
    Should Be Equal    ${username}    username
    Should Be Equal    ${password}    password

Input Non-ASCII Text
    [Documentation]    LOG 1 Typing text 'Yrjö Ärje' into text field 'name'.
    Input Text    name    Yrjö Ärje
    ${text} =    Get Value    name
    Should Be Equal    ${text}    Yrjö Ärje

Press Key
    [Setup]    Go To Page "forms/login.html"
    Cannot Be Executed in IE
    Press Key    username_field    James Bon
    Press Key    username_field    \\100
    Textfield Value Should Be    username_field    James Bond
    Press Key    password_field    f
    Press Key    login_button    \\10
    Verify Location Is "forms/submit.html"

Attempt Clear Element Text On Non-Editable Field
    Run Keyword And Expect Error    *    Clear Element Text    can_send_email
