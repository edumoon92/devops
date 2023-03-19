*** Settings ***
Library           String

*** Test Cases ***
For-Loop-In-Range
    # Looping in range(0,5)
    FOR    ${INDEX}    IN RANGE    0    5
        Log To Console    ${INDEX}
    # Looping Element in list
    END

For-Loop-Elements
    @{ITEMS}    Create List    IBM    STG    LABS
    FOR    ${ELEMENT}    IN    @{ITEMS}
        Log To Console    ${ELEMENT}
    # Looping and breaking off
    END

For-Loop-Exiting
    @{ITEMS}    Create List    HelloRobot    are you breaking    up with me !!
    FOR    ${ELEMENT}    IN    @{ITEMS}
        Log To Console    ${ELEMENT}
        Run Keyword If    '${ELEMENT}' == 'are you breaking'    Exit For Loop
    END
