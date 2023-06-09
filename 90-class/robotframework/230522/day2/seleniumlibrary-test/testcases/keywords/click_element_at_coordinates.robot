*** Settings ***
Documentation     Clicks element at coordinates
Suite Setup       Run Keywords    Open Browser To Start Page    Go To Page "javascript/click_at_coordinates.html"
Suite Teardown    Close All Browsers
Test Setup        Initialize Page
Resource          ../resource.robot

*** Test Cases ***
Click Element At Coordinates
    [Documentation]    LOG 1 Clicking element 'Clickable' at coordinates x=10, y=20.
    [Tags]    Known Issue Internet Explorer    Known Issue Safari
    Click Element At Coordinates    Clickable    ${10}    ${20}
    Element Text Should Be    outputX    110
    Element Text Should Be    outputY    120

*** Keywords ***
Initialize page
    [Documentation]    Initialize page
    Reload Page
    Element Text Should Be    outputX    initial outputX
    Element Text Should Be    outputY    initial outputY
