| *** Variables *** |
| &{USER}        | name=robot | password=secret |
| @{LIST}        | list1 | list2 |
| &{DICT}        | dict1=meaning1 | dict2=meaning2 |
| ${SCALAR}      | scalar |
| &{ANOTHER}     | key1=another1 | key2=another2 | key3=another3 |
| &{ONE MORE}    | key1=one more 1 | key2=one more 2 | key3=one more 3 | key4=one more 4 |

| *** Test Cases *** |
| Constants |
|    | Login | name=robot | password=secret |

| Dict Variable |
|    | Login | &{USER} |

| Example |
|    | Keyword | &{DICT} | named=arg |

| *** Keywords *** |
| Login |
|    | [Arguments] | &{a} |
|    | Log Many | login | ${a}[name] | password | ${a}[password] |

| Keyword |
|    | [Arguments] | &{a} |
|    | Log Many | &{a} |
