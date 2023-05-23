import subprocess

 # Replace with the appropriate command to open wmctrl
subprocess.Popen(['wmctrl', '-r', 'Calculator', '-e', '0,0, 226, 398'])  