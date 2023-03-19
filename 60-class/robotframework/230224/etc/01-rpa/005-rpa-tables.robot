*** Settings ***
Library    RPA.Tables
Library    RPA.FileSystem

*** Tasks *** ***
List Files
    Files to Table
*** Keywords ***
Files to Table
    ${files}=                 List files in directory    ${CURDIR}
    ${files}=                 Create table               ${files}
    Filter table by column    ${files}                   size   >=   ${1024}
    FOR                       ${file}                    IN                            @{files}
    Log                       ${file}[name]
    END
    Write table to CSV        ${files}                   ${OUTPUT_DIR}${/}files.csv