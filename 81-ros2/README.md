* https://docs.ros.org/en/foxy/Tutorials/Beginner-CLI-Tools/Introducing-Turtlesim/Introducing-Turtlesim.html
* https://www.youtube.com/watch?v=xwT7XWflMdc

- turtlesim install
```
sudo apt update
sudo apt install ros-foxy-turtlesim
```

- check ros2 pkg executables turtlesim
```
ros2 pkg executables turtlesim
```

- run
```
ros2 run turtlesim turtlesim_node
```

- teleop
```
ros2 run turtlesim turtle_teleop_key
```

- draw square
```
ros2 run turtlesim draw_square
```

- new spawn turtlesim
```
ros2 service call /spawn turtlesim/srv/Spawn "{x: 2, y: 2, theta: 0.2, name: ''}"
```
- new window (terminal)
```
ros2 run turtlesim turtle_teleop_key --ros-args --remap turtle1/cmd_vel:=turtle2/cmd_vel
```

- topics list
```
ros2 node list
ros2 topic list
ros2 service list
ros2 action list
```