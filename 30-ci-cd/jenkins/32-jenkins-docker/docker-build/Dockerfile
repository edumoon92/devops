FROM  hcmoon92/devops:jenkins-v0.2 
USER root
RUN apt-get update && \
    apt-get -y install apt-transport-https \
      ca-certificates \
      curl \
      gnupg2 \
      software-properties-common && \
    curl -fsSL https://download.docker.com/linux/$(. /etc/os-release; echo "$ID")/gpg > /tmp/dkey; apt-key add /tmp/dkey && \
    add-apt-repository \
      "deb [arch=amd64] https://download.docker.com/linux/$(. /etc/os-release; echo "$ID") \
      $(lsb_release -cs) \
      stable" && \
   apt-get update && \
   apt-get -y install docker-ce docker-ce-cli containerd.io
   
# Add Jenkins user to sudoers group
RUN    apt-get install -y sudo
RUN usermod -aG sudo jenkins && \
    echo "jenkins ALL=(ALL) NOPASSWD: ALL" >> /etc/sudoers
    
RUN groupadd -f docker
RUN usermod -aG docker jenkins

USER jenkins
