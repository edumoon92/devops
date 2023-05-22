| *** Test Cases *** |
| Example |
|    | Should Be Equal | ${0b1011} | ${11} |
|    | Should Be Equal | ${0o10} | ${8} |
|    | Should Be Equal | ${0xff} | ${255} |
|    | Should Be Equal | ${0B1010} | ${0XA} |

| Example 1A |
|    | Connect | example.com | 80 | # Connect gets two strings as arguments |

| Example 1B |
|    | Connect Number | example.com | ${80} | # Connect gets a string and an integer |

| Example 2 |
|    | Do X | ${3.14} | ${-1e-4} | # Do X gets floating point numbers 3.14 and -0.0001 |

| *** Keywords *** |
| Connect |
|    | [Arguments] | ${a} | ${b} |
|    | Log | ${a} ${b} |

| Connect Number |
|    | [Arguments] | ${a} | ${b} |
|    | Log | ${a} ${b*30} |

| Do X |
|    | [Arguments] | ${a} | ${b} |
|    | Log | ${a} ${b} |
