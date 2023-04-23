*** Settings ***
Library    SeleniumLibrary

*** Variables ***
${HOSTNAME}      192.168.7.3
${PORT}          3000
${LOGIN PAGE}    http://${HOSTNAME}:${PORT}/
${BROWSER}       chrome
${FIRST NAME}    Test
${LAST NAME}     User
${ZIP CODE}      12345

*** Test Cases ***
Fill in checkout information
    Open Browser    ${LOGIN PAGE}    ${BROWSER}
    Input Text      user-name        standard_user
    Input Text      password        secret_sauce
    Click Button    login-button
    Page Should Contain Element    inventory_container
    Click Button    add-to-cart-sauce-labs-backpack
    Page Should Contain Element    shopping_cart_container
    Click Link      css=.shopping_cart_link

    Click Button       checkout

    Input Text      first-name      ${FIRST NAME}
    Input Text      last-name       ${LAST NAME}
    Input Text      postal-code     ${ZIP CODE}
    Click Button    continue
    Page Should Contain Element    checkout_summary_container

    Close Browser