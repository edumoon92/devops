## screen capture tool
sudo apt install pyautogui
sudo apt install kazam

## xdotool for get dimension
sudo apt install xdotool

```
xdotool search --name Calculator
xdotool getwindowgeometry <window_id>
```

## wmctrl to move window app
```
wmctrl -r Calculator -e "0, 0,0, 226, 398"
```