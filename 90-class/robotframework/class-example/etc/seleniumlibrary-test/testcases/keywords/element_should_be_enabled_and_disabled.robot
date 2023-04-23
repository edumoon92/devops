*** Settings ***
Documentation     Tests disabled and readonly elements
Suite Setup       Open Browser To Start Page
Suite Teardown    Close All Browsers
Test Setup        Go To Page "forms/enabled_disabled_fields_form.html"
Resource          ../resource.robot

*** Test Cases ***
Input Text
    Should Be Enabled Not Disabled    enabled_input
    Should Be Disabled Not Enabled    readonly_input
    Should Be Disabled Not Enabled    disabled_input

Input Password
    Should Be Enabled Not Disabled    enabled_password
    Should Be Disabled Not Enabled    readonly_password
    Should Be Disabled Not Enabled    disabled_password

Input Button
    Should Be Enabled Not Disabled    enabled_input_button
    Should Be Disabled Not Enabled    disabled_input_button

Textarea
    Should Be Enabled Not Disabled    enabled_textarea
    Should Be Disabled Not Enabled    readonly_textarea
    Should Be Disabled Not Enabled    disabled_textarea

Button
    Should Be Enabled Not Disabled    enabled_button
    Should Be Disabled Not Enabled    disabled_button

Option
    Should Be Enabled Not Disabled    enabled_option
    Should Be Disabled Not Enabled    disabled_option

Disabled with different syntaxes
    Should Be Disabled Not Enabled    disabled_only
    Should Be Disabled Not Enabled    disabled_with_equals_only
    Should Be Disabled Not Enabled    disabled_empty
    Should Be Disabled Not Enabled    disabled_invalid_value

Readonly with different syntaxes
    Should Be Disabled Not Enabled    readonly_only
    Should Be Disabled Not Enabled    readonly_with_equals_only
    Should Be Disabled Not Enabled    readonly_empty
    Should Be Disabled Not Enabled    readonly_invalid_value

Not Input nor Editable Element
    Should Be Enabled Not Disabled    table1

*** Keywords ***
Should Be Enabled Not Disabled
    [Arguments]    ${locator}
    [Documentation]    Should Be Enabled Not Disabled
    Element Should Be Enabled    ${locator}
    Run Keyword And Expect Error    Element '${locator}' is enabled.    Element Should Be Disabled    ${locator}

Should Be Disabled Not Enabled
    [Arguments]    ${locator}
    [Documentation]    Should Be Disabled Not Enabled
    Element Should Be Disabled    ${locator}
    Run Keyword And Expect Error    Element '${locator}' is disabled.    Element Should Be Enabled    ${locator}
