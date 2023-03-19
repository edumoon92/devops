
#Reference :  http://robotframework.org/robotframework/latest/libraries/Screenshot.html

*** Settings ***
Library   Screenshot

*** Variables ***
# This is your directory where screenshots are needed to be saved.
${SCREEN_PATH}    ${CURDIR}

*** Test Cases ***
HelloRobot
   [Documentation]  Taking Selfie
   TakeSnapshot

*** Keywords ***
TakeSnapshot
  # Set the Directory where to store the screen
  Set Screenshot Directory     ${SCREEN_PATH}

  # Run something to capture
  Log To Console      Taking Selfie

  # Capture this
  Take Screenshot     name=selfie.JPG
