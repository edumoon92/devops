import time

import rclpy
from rclpy.node import Node
from turtlesim.msg import Pose
from std_srvs.srv import Empty


class TestTurtlesim(Node):

    def __init__(self):
        super().__init__('test_turtlesim')
        self.publisher_ = self.create_publisher(Pose, '/turtle1/cmd_vel', 10)
        self.pose_subscription_ = self.create_subscription(Pose, '/turtle1/pose', self.pose_callback, 10)
        self.service_client_ = self.create_client(Empty, '/reset')
        while not self.service_client_.wait_for_service(timeout_sec=1.0):
            self.get_logger().info('Service not available, waiting again...')
        self.reset_turtle_ = self.service_client_.call_async(Empty.Request())

    def pose_callback(self, msg):
        self.get_logger().info('Turtle1 pose: x=%f, y=%f, theta=%f', msg.x, msg.y, msg.theta)

    def test_turtlesim(self):
        # Wait for a moment to let the turtle move
        time.sleep(1.0)

        # Publish a command to move the turtle
        cmd_vel = Pose()
        cmd_vel.linear.x = 0.2
        cmd_vel.angular.z = 0.2
        self.publisher_.publish(cmd_vel)

        # Wait for another moment to let the turtle move
        time.sleep(1.0)

        # Reset the turtle position using a service call
        self.reset_turtle_.result()

        # Wait for a moment to let the turtle reset
        time.sleep(1.0)

        # Stop the turtle movement
        cmd_vel.linear.x = 0.0
        cmd_vel.angular.z = 0.0
        self.publisher_.publish(cmd_vel)

        # Wait for another moment to let the turtle stop
        time.sleep(1.0)

        # Shut down the ROS node
        self.destroy_node()
        rclpy.shutdown()


def main():
    rclpy.init()
    test_turtlesim = TestTurtlesim()
    test_turtlesim.test_turtlesim()


if __name__ == '__main__':
    main()