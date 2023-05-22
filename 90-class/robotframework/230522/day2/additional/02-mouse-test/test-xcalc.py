import pyautogui
import subprocess
import time

# Open xcalc (replace with your calculator application if necessary)
#pyautogui.press('super')  # Press Alt key to open the application menu
#time.sleep(0.5)  # Wait for the menu to open
#pyautogui.typewrite('xcalc')  # Type 'xcalc' to search for the calculator
#time.sleep(0.5)  # Wait for the search results to appear
#pyautogui.press('enter')  # Press Enter to open xcalc

subprocess.Popen(['xcalc'])  # Replace with the appropriate command to open xcalc

# Wait for xcalc to open (you can adjust the sleep duration as needed)
time.sleep(2)

# Perform a simple calculation
pyautogui.press('2')  # Press 2
pyautogui.press('+')  # Press +
pyautogui.press('3')  # Press 3
pyautogui.press('=')  # Press = to perform the calculation

time.sleep(3)
# Get the result
result_location = pyautogui.locateOnScreen('result.png')  # Replace 'result.png' with the actual image of the result
if result_location is not None:
    result_center = pyautogui.center(result_location)
    pyautogui.click(result_center)  # Click on the result to select it
    selected_text = pyautogui.hotkey('ctrl', 'c')  # Copy the selected text to the clipboard
    print("Result:", selected_text)
else:
    print("Result not found.")

# Close xcalc
pyautogui.hotkey('alt', 'f4')  # Press Alt+F4 to close the application