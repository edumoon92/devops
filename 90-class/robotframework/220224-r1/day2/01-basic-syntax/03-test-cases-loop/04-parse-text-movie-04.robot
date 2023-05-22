*** Settings ***
Library           OperatingSystem
Library           String
Library           SeleniumLibrary
Suite Setup       Open Browser    ${URL}    firefox
#Suite Teardown    Close Browser

*** Variables ***
${URL}            https://www.megabox.co.kr/movie?searchText=
${FILE}           movie.txt

*** Test Cases ***
TC 1.1
    Step 001 - Movie Input

*** Keywords ***
Step 001 - Movie Input
    ${contents}=        Get File            ${FILE}
    @{lines}=           Split to lines      ${contents}

    FOR    ${line}    IN    @{lines}
        Log To Console  ${line}      
        ${queryUrl}=    Add String      ${URL}      ${line}

        Log To Console  ${queryUrl} 
        Go To           ${queryUrl}    

        Click Image     img[alt=${line}]
        Sleep   3s
    END

Add String
    [Arguments]     ${a}    ${b}
    [Return]        ${a}${b}