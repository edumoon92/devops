| *** Settings *** |
| Library        | OperatingSystem |

| *** Test Cases *** |
| Environment variables |
|    | Log | Current user: %{USERNAME} |
|    | Run | %{JAVA_HOME}${/}javac |

| Environment variables with defaults |
|    | Set port | %{APPLICATION_PORT=8080} |
