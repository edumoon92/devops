| *** Variables *** |
| @{USER}        | robot | secret |
| @{LIST}        | list1 | list2 |
| ${SCALAR}      | scalar |
| @{ANOTHER}     | another1 | another2 | another3 |
| @{ONE MORE}    | one more 1 | one more 2 | one more 3 | one more 4 |

| *** Test Cases *** |
| Constants |
|    | Login | robot | secret |

| List Variable |
|    | Login | @{USER} |

| Example |
|    | Keyword | @{LIST} | more | args |
|    | Keyword | ${SCALAR} | @{LIST} | constant |
|    | Keyword | @{LIST} | @{ANOTHER} | @{ONE MORE} |

| *** Keywords *** |
| Login |
|    | [Arguments] | ${a} | ${b} |
|    | Log Many | login | ${a} | password | ${b} |

| Keyword |
|    | [Arguments] | @{a} |
|    | Log Many | @{a} |
