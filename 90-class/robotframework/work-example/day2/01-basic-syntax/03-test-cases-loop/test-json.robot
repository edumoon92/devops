*** Settings ***
Library   OperatingSystem

*** Test Cases ***
Load JSON
    # read the raw data from file
    ${json}=  Get file    name.json

    # Now convert the data to a python object like in dict
    ${object}=  Evaluate  json.loads('''${json}''')  json

    # Do stuff
    Run Keyword If    '${object["firstname"]}' == 'George'        Log To Console    ${object["firstname"]}
    Run Keyword If    '${object["lastname"]}' == 'Keishing'       Log To Console    ${object["lastname"]}

    Log To Console   The JSON object are : ${object["firstname"]} -and- ${object["lastname"]}
