*** Settings ***
Library           OperatingSystem
Library           String
Library           SeleniumLibrary

*** Variables ***
${URL}            https://www.cgv.co.kr
${FILE}           movie.txt

*** Test Cases ***
TC 1.1
    Step 001 - Movie Input

*** Keywords ***
Step 001 - Movie Input

    Open Browser    ${URL}    firefox

    ${contents}=        Get File            ${FILE}
    @{lines}=           Split to lines      ${contents}

    FOR    ${line}    IN    @{lines}
        Log To Console  ${line}      
        Click Element   //*[@id="header_keyword"]
        Input Text      //*[@id="header_keyword"]       ${line}
        Press Keys      //*[@id="header_keyword"]       ENTER    

        Sleep           3s

        Go To           ${URL}
    END

    Close Browser

