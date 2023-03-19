*** Settings ***
Library           SeleniumLibrary

*** Variables ***
${url}            http://todomvc.com/examples/vue/
&{todos}          todo1=todo 1    todo2=todo 2    todo3=todo 3

*** Test Cases ***
TC1-LOOP
    Open Browser    ${url}    chrome
    FOR    ${INDEX}    IN RANGE    30
        Input Todos 1 Items
    END
    FOR    ${INDEX}    IN RANGE    30
        Click Element Using JavaScript    ${INDEX}
    END
    Log To Console    Complete Successfully - chrome

*** Keywords ***
Input Todos 1 Items
    Input Text    css=input.new-todo    ${todos}[todo1]
    Press Keys    css=input.new-todo    ENTER

Click Element Using JavaScript
    [Arguments]    ${index}
    Execute JavaScript    document.getElementsByTagName('button')[0].click()
