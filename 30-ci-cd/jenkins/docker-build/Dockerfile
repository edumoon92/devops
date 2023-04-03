FROM  hcmoon92/devops:jenkins-v0.2 
USER root
RUN  apt-get clean && apt-get update \
  && apt-get install -y apt-transport-https ca-certificates curl gnupg-agent software-properties-common \
  && curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor --output /usr/share/keyrings/docker-archive-keyring.gpg \
  && echo \
     "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
     $(lsb_release -cs) stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null \
  && apt-get update \
  && apt-get install -y docker-ce docker-ce-cli containerd.io \
  && curl -sSL https://github.com/docker/compose/releases/download/1.29.2/docker-compose-Linux-x86_64 -o /usr/local/bin/docker-compose \
  && chmod +x /usr/local/bin/docker-compose

# Start Docker
CMD ["dockerd"]
USER jenkins
