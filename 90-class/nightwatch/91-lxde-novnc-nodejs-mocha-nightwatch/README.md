# 실습 초기화
chmod +x ./class-init.sh
./class-init.sh

```
VNC password : tta123!@
sudo password : ubuntu
```


# VSCODE 설치
```
sudo apt update
sudo apt install software-properties-common apt-transport-https wget
wget -q https://packages.microsoft.com/keys/microsoft.asc -O- | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main"
sudo apt install code
```
- novnc (docker) 
```
code --no-sandbox
```

# JAVA 설치
## openjdk 설치
```bash
sudo apt-get install openjdk-8-jdk
java -version
javac -version
```

## javac location  
```bash
readlink -f /usr/bin/javac
```

## .profile
```
...
...
...
export JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64
export PATH=$JAVA_HOME/bin:$PATH
export CLASS_PATH=$JAVA_HOME/lib:$CLASS_PATH
```

- cypress watcher error
```
    ...
    privileged: true
    ...
```    
```
sysctl fs.inotify.max_user_watches
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

