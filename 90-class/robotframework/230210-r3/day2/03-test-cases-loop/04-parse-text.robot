*** Settings ***
Library           OperatingSystem
Library           String

*** Variables ***
${FILE}           file.txt

*** Test Cases ***
HelloRobot
    [Documentation]    Parse a text File
    readTextFile

*** Keywords ***
readTextFile
    ${contents}=        Get File            ${FILE}
    @{lines}=           Split to lines      ${contents}

    FOR    ${line}    IN    @{lines}
        Log    ${line}    WARN
    END
