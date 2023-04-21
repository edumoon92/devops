*** Settings ***
Library           SeleniumLibrary

*** Variables ***
${url}            http://todomvc.com/examples/vue/
${new-todo}       New Todo

*** Test Cases ***
TC1
    Open Browser    http://todomvc.com/examples/vue/    chrome
    Input Text    css=input.new-todo    New Todo
    Press Keys    css=input.new-todo    ENTER
    Sleep    2
    Close Browser
    Log To Console    Complete Successfully - chrome

TC2
    Open Browser    ${url}    chrome
    Input Text    css=input.new-todo    ${new-todo}
    Press Keys    css=input.new-todo    ENTER
    Sleep    2
    Close Browser
    Log To Console    Complete Successfully - chrome

TC3
    Open Browser    http://todomvc.com/examples/vue/    chrome
    Input Text      xpath://body/section/header/input   New Todo
    Press Keys      xpath://body/section/header/input    ENTER
    Sleep    2
    Close Browser
    Log To Console    Complete Successfully - chrome    
