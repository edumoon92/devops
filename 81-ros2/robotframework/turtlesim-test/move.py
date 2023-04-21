import rclpy
from geometry_msgs.msg import Twist
from turtlesim.msg import Pose
from std_srvs.srv import Empty

class TestTurtlesim:

    def setUp(self):
        rclpy.init()
        self.node = rclpy.create_node('test_turtlesim')
        self.cmd_vel_pub = self.node.create_publisher(Twist, '/turtle1/cmd_vel', 10)
        self.pose_sub = self.node.create_subscription(Pose, '/turtle1/pose', self.pose_callback, 10)
        self.clear_srv = self.node.create_client(Empty, '/reset')
        while not self.clear_srv.wait_for_service(timeout_sec=1.0):
            self.node.get_logger().info('service not available, waiting again...')

    def tearDown(self):
        self.cmd_vel_pub = None
        self.pose_sub = None
        self.node.destroy_node()
        rclpy.shutdown()

    def pose_callback(self, msg):
        self.current_pose = msg

    def test_move_forward(self):
        cmd_vel = Twist()
        cmd_vel.linear.x = 0.2
        self.cmd_vel_pub.publish(cmd_vel)
        rclpy.spin_once(self.node, timeout_sec=1.0)
        #self.assertAlmostEqual(self.current_pose.x, 0.2, delta=0.05)

if __name__ == '__main__':
    test = TestTurtlesim()
    test.setUp()
    test.test_move_forward()
