# ====================================================================== #
# Android SDK Docker Image (VNC enabled)
# ====================================================================== #

# Base image
# ---------------------------------------------------------------------- #
FROM hcmoon92/devops:android-sdk-v0.9

# Author
# ---------------------------------------------------------------------- #
LABEL maintainer "henry.moon"

# install and configure VNC server
ENV USER root
ENV DISPLAY :1
EXPOSE 5901
ADD vncpass.sh /tmp/
ADD watchdog.sh /usr/local/bin/
ADD supervisord_vncserver.conf /etc/supervisor/conf.d/
RUN apt-get update && \
    DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends xfce4 xfce4-goodies xfonts-base dbus-x11 tightvncserver expect && \
    chmod +x /tmp/vncpass.sh; sync && \
    /tmp/vncpass.sh && \
    rm /tmp/vncpass.sh && \
    apt-get remove -y expect && apt-get autoremove -y && \
    FILE_SSH_ENV="/root/.ssh/environment" && \
    echo "DISPLAY=:1" >> $FILE_SSH_ENV

RUN apt-get install autocutsel

# Set up VNC server to start automatically
COPY entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]


# Stop VNC server when container exits
CMD ["bash", "-c", "trap 'tightvncserver -kill :1 ; exit 0' TERM; tail -f /dev/null & wait"]
