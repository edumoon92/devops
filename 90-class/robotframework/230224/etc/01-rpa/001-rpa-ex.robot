*** Settings ***
Library           RPA.Browser

*** Tasks ***
Search Keword
    Open browser    https://www.naver.com
    Input text    id:query    robot
