*** Test Cases ***
Boolean
    Set Status    ${true}    # Set Status gets Boolean true as an argument
    Create Y    something    ${false}    # Create Y gets a string and Boolean false

None
    Do XYZ    ${None}    # Do XYZ gets Python None as an argument

Null
    ${ret} =    Get Value    arg    # Checking that Get Value returns Java null
    Should Not Be Equal    ${ret}    ${null}

*** Keywords ***
Set Status
    [Arguments]    ${a}
    Log    ${a}

Create Y
    [Arguments]    ${a}    ${b}
    Log    ${a}
    Log    ${b}

Do XYZ
    [Arguments]    ${a}
    Log    ${a}

Get Value
    [Arguments]    ${a}
    [Return]    ${a}
