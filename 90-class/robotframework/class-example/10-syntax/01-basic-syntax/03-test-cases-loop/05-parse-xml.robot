*** Settings ***
Library   XML

*** Variables ***

${XML_FILE}   file.xml

*** Test Cases ***
HelloRobot
   [Documentation]    User define XML
   call User Library

*** Keywords ***
Call User Library
  # Parse the XML root tag
  ${root} =     Parse XML   ${XML_FILE}   root
  Should Be Equal   ${root.tag}    root

  # Walk and Get the child element tag user
  ${user} =    Get Element     ${root}    user
  Log To Console   ${user.text}

  ${password} =    Get Element     ${root}    password
  Log To Console   ${password.text}

  ${address} =    Get Element     ${root}    address
  Log To Console   ${address.text}