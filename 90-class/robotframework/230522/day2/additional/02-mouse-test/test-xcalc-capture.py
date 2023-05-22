import pyautogui
import subprocess
import time

subprocess.Popen(['xcalc'])  # Replace with the appropriate command to open xcalc

# Wait for xcalc to open (you can adjust the sleep duration as needed)
time.sleep(2)

# Perform a simple calculation
pyautogui.press('2')  # Press 2
pyautogui.press('+')  # Press +
pyautogui.press('3')  # Press 3
pyautogui.press('=')  # Press = to perform the calculation

time.sleep(3)

#im2 = pyautogui.screenshot('my_screenshot.png')
im3 = pyautogui.screenshot('result.png', region=(0, 0, 50, 100))

# Close xcalc
pyautogui.hotkey('alt', 'f4')  # Press Alt+F4 to close the application