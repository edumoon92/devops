*** Settings ***
Library     SeleniumLibrary
#Library     OperatingSystem
Library     String
Library     RPA.Excel.Files


*** Variable ***
#${EXCEL_DATA}       1



*** Test Cases ***
TC - Get Excel Data
    ${EXCEL_DATA}=    Get From Excel - value
    log to console     ${EXCEL_DATA}
    Set Suite Variable      ${EXCEL_DATA}

TC - Get Excel Data
    ${EXCEL_DATA}=    Get From Excel - value - Arg     2    2
    log to console     ${EXCEL_DATA}
    Set Suite Variable      ${EXCEL_DATA}

#
#TC Open zerogram 
#    log to console     ${excel_data}
#    Open zerogram 1
#

TC Open zerogram 
    Open zerogram 2    ${EXCEL_DATA}
    log to console     ${EXCEL_DATA}

#TC - Check Slide Popup
#    Key - Check Slide Popup


*** Keywords ***

Key - Check Slide Popup
    ${c} =   Get Element Count   css:button.btn-default
    Run Keyword If   ${c}>0    Click Element   css:button.btn-default  # close slide popup

Open zerogram 
    Open Browser    https://zerogram.co.kr/     firefox
    Check Slide Popup
    Click Search Icon

Click Search Icon
    #Wait Until Element Is Visible        css:span.ico-search
    Click Element                        css:span.ico-search
    Input Text          css:input#search     텐트
    Press Keys          css:input#search     ENTER
    #Sleep   1s     

    Wait Until Element Is Visible       css:div.content    timeout=10
    ${count} =     Get Element Count    css:a[data-id="link"]
    log to console     ${count}

    ${text}=  Get Text      css:div.item-info
    log to console     ${text}

    #Close Browser    

Open zerogram 1
    Open Browser    https://zerogram.co.kr/search?keyword=텐트   firefox
    Wait Until Element Is Visible       css:div.content    timeout=10
    ${count} =     Get Element Count    css:a[data-id="link"]
    log to console     ${count}

    ${url}=        Get Element Attribute      css:div.item-info>a      href
    log to console     ${url}
    Go To       ${url}

    Wait Until Page Contains Element    css:div.total-price    2 seconds
    #${text}=        Get Text            css:div.total-price
    ${text}=        Get Text            css:span.amount         #200,000
    log to console     ${text}

    ${str} =	Remove String	${text}	    ,            # remove comma     Library String
    log to console     ${str}

Open zerogram 2
    [Arguments]     ${data}
    ${url} =    Add String      https://zerogram.co.kr/search?keyword=      ${data}
    log to console  ${url}

    Open Browser    ${url}   firefox
    Wait Until Element Is Visible       css:div.content    timeout=10
    ${count} =     Get Element Count    css:a[data-id="link"]
    log to console     ${count}

    ${url}=        Get Element Attribute      css:div.item-info>a      href
    log to console     ${url}
    Go To       ${url}

    Wait Until Page Contains Element    css:div.total-price    2 seconds
    #${text}=        Get Text            css:div.total-price
    ${text}=        Get Text            css:span.amount         #200,000
    log to console     ${text}

    ${str} =	Remove String	${text}	    ,            # remove comma     Library String
    log to console     ${str}

    #Save to Excel - value - Arg     1       2       ${str}
    Save to Excel - value - Arg     2       2       ${str}

    Get Current Location

    Close Browser

Save to Excel - value
    Open Workbook      items.xlsx
    ${column1}=    Get cell value    1    2
    log to console             ${column1}
    Set cell value    1    3    Test_Value
    #Open zerogram
    Save Workbook

Save to Excel - value - Arg
    [Arguments]     ${row}     ${col}     ${val}
    Open Workbook      items.xlsx
    ${newCol}=      Evaluate    ${col}+1
    Set cell value    ${row}    ${newCol}       ${val}
    #Open zerogram
    log to console    ${val}
    Save Workbook

Get From Excel - value - Arg
    [Arguments]     ${row}     ${col}
    Open Workbook      items.xlsx
    ${column1}=    Get cell value    ${row}    ${col}
    log to console             ${column1}
    Close Workbook 
    [Return]    ${column1}

Get From Excel - value
    Open Workbook      items.xlsx
    ${column1}=    Get cell value    1    2
    log to console             ${column1}
    Close Workbook 
    [Return]    ${column1}

Add String
    [Arguments]     ${a}    ${b}
    [Return]    ${a}${b}


Get Current Location
    ${url}=   Get Location
    Log To Console  ${url}