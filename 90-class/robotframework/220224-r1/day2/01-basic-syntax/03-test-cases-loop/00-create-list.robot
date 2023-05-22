*** Settings ***
Library             Collections

*** Variables ***

${VAR_A}     Hello
${VAR_B}     robot
${VAR_C}     example

*** Test Cases ***
Check Multiple Words
   @{condition} =   Create List  ${VAR_A}  ${VAR_B}  ${VAR_C}
   
   Log To Console        \n Condition word List : ${condition}
 
   # Success scenario since no matching in the list
   Log To Console      \n Success Scenario -> Hello
   Should Contain Match   ${condition}     Hello      case_insensitive=True
