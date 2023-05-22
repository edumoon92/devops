
*** Settings ***
Documentation      Maths as simple as that

*** Variables ***
${count}               2

${TestData}        3735928559

*** Test cases ***
Addition
    Log To Console       \n Before: ${count}
    ${count}=    Evaluate     ${count} + 1
    Log To Console      \n After : ${count}
    Should be equal as numbers      ${count}  3

Subtraction
    Log To Console      \n Before: ${count}
    ${count}=    Evaluate    ${count} - 1
    Log To Console       \n After : ${count}
    Should be equal as numbers   ${count}  1

Multiply
    Log To Console      \n Before: ${count}
    ${count}=    Evaluate   ${count} * 3
    Log To Console      \n After : ${count}
    Should be equal as numbers     ${count}  6

Division
    Log To Console      \n Before: ${count}
    ${count}=    Evaluate    ${count} / 2
    Log To Console      \n After : ${count}
    Should be equal as numbers     ${count}  1

DecimalToHex
                                              # add 0x prefix to the hex string
   ${result} =     Convert To Hex      ${TestData}  prefix=0x  length=2
   Log To Console   \n ${result}

   # Lets convert this to Integer back
   ${iresult} =  Convert To Integer    ${result}
   Log To Console    \n ${iresult}
   Should be equal as numbers    ${iResult}    ${TestData}
