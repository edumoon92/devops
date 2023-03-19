*** Settings ***
Library           OperatingSystem
Library           String
Library           SeleniumLibrary

*** Variables ***
${FILE}           movie.txt
${URL}            https://www.cgv.co.kr

*** Test Cases ***
TC 1.1 Movie Query
    [Documentation]    Parse a text File & Movie query
    readTextFile

*** Keywords ***
readTextFile
    ${contents}=        Get File            ${FILE}
    @{lines}=           Split to lines      ${contents}

    Open Browser      ${URL}        firefox

    FOR    ${line}    IN    @{lines}

        Input Text      //*[@id="header_keyword"]       ${line}
        Press Keys      //*[@id="header_keyword"]       ENTER

        Log To Console    ${line}

        Sleep           3s

        Go To           ${URL}


    END
