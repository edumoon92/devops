*** Settings ***
Suite Setup       Open Browser    ${url}    chrome
Suite Teardown    Close and Log
Library           SeleniumLibrary

*** Variables ***
${url}            http://todomvc.com/examples/vue/
&{todos}          todo1=todo 1    todo2=todo 2    todo3=todo 3

*** Test Cases ***
TC1
    [Tags]    Tag1
    [Setup]    Log To Console    ${\n}Test Case Started
    Input Todos 3 Items
    [Teardown]    Log To Console    Test Case Ended

TC2
    [Tags]    Tag2
    [Setup]    Log To Console    ${\n}Test Case Started
    Input Todos 3 Items
    Set Tags    NewTags
    [Teardown]    Log To Console    Test Case Ended

*** Keywords ***
Input Todos 3 Items
    Input Text    css=input.new-todo    ${todos}[todo1]
    Press Keys    css=input.new-todo    ENTER
    Input Text    css=input.new-todo    ${todos}[todo2]
    Press Keys    css=input.new-todo    ENTER
    Input Text    css=input.new-todo    ${todos}[todo3]
    Press Keys    css=input.new-todo    ENTER

Close and Log
    Close Browser
    Log To Console    %{username} - %{os}
    Log To Console    Complete Successfully - chrome
