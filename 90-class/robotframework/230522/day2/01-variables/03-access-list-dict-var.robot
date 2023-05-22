| *** Variables *** |
| @{USER}        | robot | secret |
| &{SEQUENCE}    | -1=one more 1 | 0=one more 2 | 1=one more 3 | 2=one more 4 |
| ${INDEX}       | 1 |

| *** Test Cases *** |
| Sequence variable item |
|    | Login | ${USER}[0] | ${USER}[1] |
|    | Title Should Be | Welcome ${USER}[0]! |

| Negative index |
|    | Log | ${SEQUENCE}[-1] |

| Positive index |
|    | Log | ${SEQUENCE}[2] |

| Index defined as variable |
|    | Log | ${SEQUENCE}[${INDEX}] |

| *** Keywords *** |
| Login |
|    | [Arguments] | @{a} |
|    | Log Many | @{a} |

| Title Should Be |
|    | [Arguments] | ${a} |
|    | Log | ${a} |
