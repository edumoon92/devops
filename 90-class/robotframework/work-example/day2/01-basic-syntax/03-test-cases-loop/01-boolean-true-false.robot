*** Variables ***
${count}          1
${num}      2

*** Test Cases ***
Testing True or False - num
    ${true_or_false}=    Set Variable If    ${num} > 0    ${True}    ${False}
    Log To Console    ${true_or_false}

Testing True or False - count
    ${true_or_false}=    Set Variable If    ${count} > 0    ${True}    ${False}
    Log To Console    ${true_or_false}
