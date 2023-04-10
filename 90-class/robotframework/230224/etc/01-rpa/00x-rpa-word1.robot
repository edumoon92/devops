*** Settings ***
Library                 RPA.Word.Application
Task Setup              Open Application
Suite Teardown          Quit Application

*** Tasks ***
Open existing file
    Open File           ${CURDIR}${/}old.docx
    Write Text          Extra Line Text
    Write Text          Another Extra Line of Text
    Save Document AS    ${CURDIR}${/}new.docx
    ${texts}=           Get all Texts
    Close Document