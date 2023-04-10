#!/bin/bash
set -e

# Check if VNC server is already running
if [ -f /tmp/.X1-lock ]; then
    echo "VNC server is already running, stopping it..."
    /usr/bin/vncserver -kill :1
fi

# Start the VNC server
/usr/bin/vncserver :1 -geometry 1280x800 -depth 24

# Copy & Paste
autocutsel -fork

# Keep the container running
# tail -f /dev/null

