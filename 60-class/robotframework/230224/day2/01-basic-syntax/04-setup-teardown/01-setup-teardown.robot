*** Settings ***
Documentation     This suite was initially created for testing keyword types
...               with listeners but can be used for other purposes too.


Suite Setup       Suite Setup
Suite Teardown    Suite Teardown
Test Setup        Test Setup        
Test Teardown     Test Teardown     

*** Variables ***

*** Test Cases ***
TC 1.1
    Log To Console      TC 1.1
TC 1.2
    Log To Console      TC 1.2


*** Keywords ***
Suite Setup
    Log To Console    Suite Setup

Suite Teardown
    Log To Console    Suite Teardown

Test Setup
    Log To Console    Test Setup

Test Teardown
    Log To Console    Test Teardown


