import pyautogui as gui, time
# https://towardsdatascience.com/automate-ui-testing-with-pyautogui-in-python-4a3762121973

class MouseKeyboardControlLibrary(object):
    def click_start_menu(self):
      screenWidth, screenHeight = gui.size()
      gui.moveTo(0,screenHeight-5)
      gui.click()

    def open_firefox(self):
      # firefox
      gui.typewrite('Firefox', interval=0.25)
      gui.press('enter')

    def maximize_and_show_menu(self):
      # alt + space, x (max), alt 
      # time.sleep(2) #give 2 seconds for firefox to launch
      # gui.keyDown('alt')
      # gui.press(' ')
      # gui.press('x')
      time.sleep(2)
      gui.keyDown('alt')

    def click_new_tab_and_type_url(self):
      gui.click(250,22)
      gui.typewrite('https://medium.com/financeexplained')
      gui.press('enter')