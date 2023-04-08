#!/bin/bash
set -e

# Start the VNC server
/usr/bin/vncserver :1 -geometry 1280x800 -depth 24

# Copy & Paste
autocutsel -fork

# Keep the container running
# tail -f /dev/null

# stop vnc server
vncserver -kill :1
