*** Settings ***
Library    SeleniumLibrary

*** Variables ***
${HOSTNAME}      192.168.7.3
${PORT}          3000
${LOGIN PAGE}    http://${HOSTNAME}:${PORT}/
${BROWSER}       chrome
${ITEM NAME}     Sauce Labs Backpack

*** Test Cases ***
Add item to cart
    Open Browser    ${LOGIN PAGE}    ${BROWSER}
    Input Text      user-name        standard_user
    Input Text      password        secret_sauce
    Click Button    login-button
    Page Should Contain Element    inventory_container

    Click Link      ${ITEM NAME}
    Click Button    add-to-cart-sauce-labs-backpack
    Page Should Contain Element    shopping_cart_container
    Element Text Should Be    css=.shopping_cart_badge    1

    Close Browser