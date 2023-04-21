import pyautogui

class MouseControlLibrary(object):
    def move_to_init(self):
        pyautogui.moveTo(10, 10)

    def move_to_element(self):
        pyautogui.moveTo(10, 500)

    def click_init(self):
        pyautogui.click(10, 10, button='left', clicks=1, interval=0.0)

    def click_element(self):
        pyautogui.click(50, 30, button='left', clicks=1, interval=0.0)

    def double_click_element(self):
        pyautogui.doubleClick(50, 30, button='left', interval=0.1)

    def right_click_element(self):
        pyautogui.rightClick(50, 30, interval=0.1)

    def scroll(self, amount):
        pyautogui.scroll(amount)