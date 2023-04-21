*** Settings ***
Library           ROS2
Suite Setup       ROS2 Start Node    turtlesim
Suite Teardown    ROS2 Stop Node     turtlesim

*** Test Cases ***
Test Publisher
    ROS2 Start Node     my_publisher_node
    ROS2 Create Publisher     my_topic     std_msgs/String
    ROS2 Send Message     my_topic     std_msgs/String     data: Hello, ROS2!

    ${msg}=    ROS2 Wait For Message    my_topic    std_msgs/String
    Should Be Equal As Strings    ${msg.data}    Hello, ROS2!

    ROS2 Stop Node     my_publisher_node
Move Turtlesim
    [Documentation]    Test moving the Turtlesim in a circle
    ROS2 Send Message    /turtle1/cmd_vel    geometry_msgs/Twist    angular: {z: 1.0}
    Sleep    5
    ROS2 Send Message    /turtle1/cmd_vel    geometry_msgs/Twist    angular: {z: 0.0}
    ROS2 Send Message    /turtle1/cmd_vel    geometry_msgs/Twist    linear: {x: 1.0}
    Sleep    5
    ROS2 Send Message    /turtle1/cmd_vel    geometry_msgs/Twist    linear: {x: 0.0}

    ${x}=    ROS2 Get Parameter    /turtle1/pose/x
    ${y}=    ROS2 Get Parameter    /turtle1/pose/y

    Should Be True    ${x} > 0
    Should Be True    ${y} > 0