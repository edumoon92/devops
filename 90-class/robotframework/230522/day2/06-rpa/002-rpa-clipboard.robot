*** Settings ***
Library           RPA.Desktop

*** Tasks ***
Clipping
    Copy To Clipboard    Text from Robot to clipboard
    ${var}=    Paste From Clipboard
    Log    ${var}
    Clear Clipboard
