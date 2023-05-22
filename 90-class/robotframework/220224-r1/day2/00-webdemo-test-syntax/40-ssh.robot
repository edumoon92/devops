*** Settings ***
Library  SSHLibrary

*** Variables ***
${HOSTNAME}       192.168.56.101
${USERNAME}       henry
${PASSWORD}       tta123!@
${COMMAND}        ls

*** Test Cases ***
SSH Test Example
    Open Connection   ${HOSTNAME}
    Login   ${USERNAME}   ${PASSWORD}
    ${output}   Execute Command   ${COMMAND}
    Log To Console    ${output}
    Close Connection
