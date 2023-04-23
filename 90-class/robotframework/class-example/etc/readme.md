

# Calculator Test
## calc_test directory
- python calculator function test
- How to Use custom test case library (CalculatorLibrary.py)
- How to Custom Keyword 

# robtoframework-selenium test
1. testserver start (localhost:7000)
```
cd resources\testserver
python testserver.py start
```
2. run robot testcase
```
cd testcases
robot 01-open_and_close.robot
robot 02-multiple_browsers.robot
robot 03-windows.robot
robot 04-multiple_browsers_multiple_windows.robot
```

## Keywords
- Wait Until Keyword Succeeds
```robotframework
Wait Until Keyword Succeeds 	 2 min   5 sec   My keyword   argument
```
