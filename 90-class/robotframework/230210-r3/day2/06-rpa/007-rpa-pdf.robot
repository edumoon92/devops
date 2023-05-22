*** Settings ***
Library           RPA.PDF

*** Variables ***
${TEMPLATE}       order.template
${PDF}            result.pdf
&{VARS}           name=Robot Generated    email=robot@domain.com    zip=00100    items=Item 1, Item 2

*** Tasks ***
Create PDF from HTML template
    Template HTML to PDF    ${TEMPLATE}    ${PDF}    ${VARS}
