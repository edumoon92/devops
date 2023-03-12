*** Variables ***
${GREET} Hello    ${EMPTY}
${NAME}           world

*** Test Cases ***
TC1.1 Constant
    Log    Hello
    Log    Hello, world!!

Variables
    Log    ${GREET}
    Log    ${GREET}, ${NAME}!!
