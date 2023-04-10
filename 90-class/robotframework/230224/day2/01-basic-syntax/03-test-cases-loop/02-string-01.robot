
*** Settings ***
Library        String

*** Variables ***

*** Test Cases ***
TC 1.1
   ${lines}=    Convert To Lower Case     Hello World
   Log To Console     ${lines}
