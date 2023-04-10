*** Settings ***
Library    RPA.Desktop.OperatingSystem

*** Tasks ***
Get computer information
    ${boot_time}=   Get Boot Time  as_datetime=${TRUE}
    ${machine}=     Get Machine Name
    ${username}=    Get Username
    &{memory}=      Get Memory Stats
    Log Many        ${memory}