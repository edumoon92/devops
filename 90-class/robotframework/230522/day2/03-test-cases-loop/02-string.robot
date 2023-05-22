

*** Settings ***
Documentation        This one's are direct example from the built/string in lib
Library                        String

*** Variables ***

${TestString}     Punctuation is important, my teacher said. Without punctuation marks, your writing would be very confusing.
${SString}          Punctuation
${ParaString}    This is something. \n
...               There must be another angle but
...               this is no way but robo way..\n ah damn

 

*** Test Cases ***
JoinTwoStrings
   ${str1} =     Catenate        WelCome to      IBM DevOps    
   ${str2} =     Catenate      SEPARATOR=---     Hello     world
   ${str3} =     Catenate      SEPARATOR=     Hello     world
   Log To Console      \n ${str1} \n ${str2} \n ${str3}

# Remove leading and/or trailing whitespaces from the given string.
Strip A Given String
   Log To Console      \n ${SString}
   Log To Console      Chars to Strip = Pat
   ${stripped} =       Strip String    ${SString}     characters=Pat
   Log To Console      \n ${stripped}

Split A Given String
   Log     \n " Initial string "
   Log To Console     \n ${TestString} \n
   Log To Console     \n " Split a string by spaces by default "
   @{words} =   Split String    ${TestString}
   Log To Console     \n ${words}

   Log To Console     \n " Split a string by delitemers"
   @{words} =   Split String    ${TestString}    ,${SPACE}         
   Log To Console     \n ${words}
 
Replace A Given String
   Log To Console     \n ${TestString} \n
   ${replace}    Set Variable     my teacher said
   ${replacewith}  Set variable   my damn friend said
   ${str} =     Replace String     ${TestString}    ${replace}  ${replacewith}
   Log To Console     \n ${str}

Search or Match A Given String
   ${needle}   Set Variable     way
   :: FOR  ${line}  IN   ${ParaString}
   \    ${lines} =   Get Lines Containing String  ${line}   ${needle}
   \    Log To Console     \n ${lines}
