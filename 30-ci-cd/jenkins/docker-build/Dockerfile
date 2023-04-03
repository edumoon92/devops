FROM  hcmoon92/devops:jenkins-v0.2 
USER root
RUN apt-get update && \
    apt-get -y install apt-transport-https ca-certificates curl gnupg-agent software-properties-common && \
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add - && \
    add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -a) stable" && \
    apt-get update && \
    apt-get -y install docker-ce docker-ce-cli containerd.io && \
    curl -s https://api.github.com/repos/docker/compose/releases/latest | grep browser_download_url | grep docker-compose-Linux-x86_64 | cut -d '"' -f 4 | wget -qi - && \
    chmod +x docker-compose-Linux-x86_64 && \
    mv docker-compose-Linux-x86_64 /usr/local/bin/docker-compose
USER jenkins
