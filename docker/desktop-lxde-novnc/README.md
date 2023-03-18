docker-ubuntu-vnc-desktop
Docker Pulls Docker Stars

docker-ubuntu-vnc-desktop is a Docker image to provide web VNC interface to access Ubuntu LXDE/LxQT desktop environment.

Quick Start
VNC Viewer
HTTP Base Authentication
SSL
Screen Resolution
Default Desktop User
Deploy to a subdirectory (relative url root)
Sound (Preview version and Linux only)
Generate Dockerfile from jinja template
Troubleshooting and FAQ
License
Quick Start
Run the docker container and access with port 6080

```
docker run -p 6080:80 -v /dev/shm:/dev/shm dorowu/ubuntu-desktop-lxde-vnc
```
Browse http://127.0.0.1:6080/


Ubuntu Flavors
Choose your favorite Ubuntu version with tags

focal: Ubuntu 20.04 (latest)
focal-lxqt: Ubuntu 20.04 LXQt
bionic: Ubuntu 18.04
bionic-lxqt: Ubuntu 18.04 LXQt
xenial: Ubuntu 16.04 (deprecated)
trusty: Ubuntu 14.04 (deprecated)
VNC Viewer
Forward VNC service port 5900 to host by

```
docker run -p 6080:80 -p 5900:5900 -v /dev/shm:/dev/shm dorowu/ubuntu-desktop-lxde-vnc
```
