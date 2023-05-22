*** Settings ***
Documentation  Database Testing in Robot Framework
Library  DatabaseLibrary

*** Variables ***
${DBName}  testdb
${DBUser}  henry
${DBPassword}  tta123!@
${DBHost}  192.168.56.101
${DBPort}  3306

*** Test Cases ***
Verify Successful creation of Table
    Connect DB


Verify Data Insertion in Table
    ${output}=  Execute SQL Script  ./insert.sql
    Should Be Equal As Strings  ${output}  None


*** Keywords ***
Connect DB
    Connect To Database  pymysql  ${DBName}  ${DBUser}  ${DBPassword}  ${DBHost}  ${DBPort}

Disconnect DB
    Disconnect From Database