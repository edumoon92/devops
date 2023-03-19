*** Settings ***
Library           OperatingSystem
Library           String
Library           SeleniumLibrary

*** Variables ***
${URL}            https://www.cgv.co.kr
${FILE}           movie.txt
${INPUT_FILE}            movie.txt
${PATH}                  ${CURDIR}/output.txt

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

        #Click Element   //*[@alt="모가디슈"]
        Click Element   //*[@alt="${line}"]

        
        Sleep           3s

        ${result}=      Get Text        //*[@id="select_main"]/div[1]/div[2]/div[3]/dl/dd[6]
        Log To Console      ${result}

        Write to file1       ${line}        ${result}

        Sleep           1s

        Go To           ${URL}

    END

    Close Browser

Write to file1
  [Arguments]  ${variable}      ${variable1}
  Append To File    ${PATH}       ${variable}

  Append To File    ${PATH}     ${SPACE * 5} ${variable1} ${\n}
