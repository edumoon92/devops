*** Settings ***
Library           SeleniumLibrary

*** Variables ***
${url}            http://todomvc.com/examples/vue/
${new-todo}       New Todo
@{todos}          todo 1    todo 2    todo 3

*** Test Cases ***
TC1-List
    Open Browser    ${url}    chrome
    Input Text    css=input.new-todo    ${todos}[0]
    Press Keys    css=input.new-todo    ENTER
    Input Text    css=input.new-todo    ${todos}[1]
    Press Keys    css=input.new-todo    ENTER
    Input Text    css=input.new-todo    ${todos}[2]
    Press Keys    css=input.new-todo    ENTER
    Comment    Close Browser
    Log To Console    Complete Successfully - chrome
