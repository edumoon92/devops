*** Settings ***
Library          RPA.Excel.Application
Library          RPA.Excel.Files
Task Setup       Open Application
Task Teardown    Quit Application

*** Tasks ***
Creating new Excel
    Create Workbook             my_new_excel.xlsx
    FOR                         ${index}             IN RANGE          2000
    &{row}=                     Create Dictionary
    ...                         행번호                  ${index}
    ...                         값                    ${index * 25}
    Append Rows to Worksheet    ${row}               header=${TRUE}
    END
    Save Workbook