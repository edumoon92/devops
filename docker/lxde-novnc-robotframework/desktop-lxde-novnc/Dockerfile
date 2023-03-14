FROM dorowu/ubuntu-desktop-lxde-vnc:focal

RUN wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | sudo apt-key add -

RUN apt-get update \
    && apt-get install -y python3-pip
RUN apt-get -y install python3-wxgtk4.0

RUN apt-get -y install software-properties-common apt-transport-https wget
RUN wget -q https://packages.microsoft.com/keys/microsoft.asc -O- | sudo apt-key add -
RUN add-apt-repository "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main"
RUN apt-get update
RUN apt-get -y install code
RUN rm -rf /var/lib/apt/lists/*

COPY requirements.txt /

RUN pip install attrdict

RUN pip install --no-cache-dir -r /requirements.txt
