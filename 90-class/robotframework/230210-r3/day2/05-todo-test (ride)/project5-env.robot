*** Settings ***
Library           SeleniumLibrary

*** Variables ***
${url}            http://todomvc.com/examples/vue/
&{todos}          todo1=todo 1    todo2=todo 2    todo3=todo 3

*** Test Cases ***
TC1-List
    Open Browser    ${url}    chrome
    Input Text    css=input.new-todo    ${todos}[todo1]
    Press Keys    css=input.new-todo    ENTER
    Input Text    css=input.new-todo    ${todos}[todo2]
    Press Keys    css=input.new-todo    ENTER
    Input Text    css=input.new-todo    ${todos}[todo3]
    Press Keys    css=input.new-todo    ENTER
    Comment    Close Browser
    Log To Console    %{username} - %{os}
    Log To Console    Complete Successfully - chrome
