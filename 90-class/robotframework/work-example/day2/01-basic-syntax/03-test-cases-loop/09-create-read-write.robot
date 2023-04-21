*** Settings ***
Library  OperatingSystem
Library  String

*** Variables ***
${INPUT_FILE}     file.txt
${PATH}                  ${CURDIR}/output.txt

*** Test cases ***
write to file
  # Create the output file
  Create File    ${PATH}  

  # Read the INPUT File content
  ${contents}=   Get File          ${INPUT_FILE}
  @{lines}=      Split to lines    ${contents}

  # Loop through the lines
  FOR     ${line}     IN    @{lines}
      write to file   ${line}
  END

*** Keywords ***
write to file
  [Arguments]  ${variable}
  Append To File    ${PATH}       ${variable}

  # Since this is a line , if you want to add the next into new line
  Append To File    ${PATH}     ${\n}
