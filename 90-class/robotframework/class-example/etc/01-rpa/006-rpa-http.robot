*** Settings ***
Library    RPA.HTTP

*** Variables ***
${URL}       https://ec.europa.eu/energy/sites/ener/files/documents/EnergyDailyPricesReport-EUROPA_0.pdf
${PDF_FILE}  prices.pdf

*** Tasks ***
Get Energy Prices
    HTTP GET   ${URL}  ${PDF_FILE}