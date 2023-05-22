 
*** Settings ***
Library        Collections

*** Test cases ***
TestDictInit
    Dictionary Initialize

    # Notice that this ${dict} variable is set from user keyword and still accessible
    Run Keyword if    ${dict}['COUNTRY'] == 'IND'      Log To console    \n " Land of Sages"

    # --OR-- Check if an item of key`/value must be found in a dictionary
    Dictionary should contain item   ${dict}    COUNTRY   IND

*** Keywords ***
Dictionary Initialize
    ${dict} =     Create Dictionary     COUNTRY=IND

    # Makes a variable available everywhere within the scope of the current suite
    Set Suite Variable   ${dict}
