import pyautogui
import subprocess
import time

subprocess.Popen(['xcalc'])  # Replace with the appropriate command to open xcalc

# Wait for xcalc to open (you can adjust the sleep duration as needed)
time.sleep(1)

# Perform a simple calculation
pyautogui.press('2')  # Press 2
pyautogui.press('+')  # Press +
pyautogui.press('3')  # Press 3
pyautogui.press('=')  # Press = to perform the calculation

time.sleep(1)

#im2 = pyautogui.screenshot('my_screenshot.png')
im3 = pyautogui.screenshot('result.png', region=(150, 30, 40, 50)) # left, top, width, height

# Close xcalc
pyautogui.hotkey('alt', 'f4')  # Press Alt+F4 to close the application