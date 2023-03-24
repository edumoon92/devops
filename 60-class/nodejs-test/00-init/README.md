# 실습 초기화
chmod +x ./class-init.sh
./class-init.sh

```
VNC password : tta123!@
sudo password : ubuntu
```

# JAVA 설치
## openjdk 설치
$ sudo apt-get install openjdk-17-jdk
$ java -version
$ javac -version


## javac location  
$ readlink -f /usr/bin/javac

## .profile
```
...
...
...
export JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64
export PATH=$JAVA_HOME/bin:$PATH
export CLASS_PATH=$JAVA_HOME/lib:$CLASS_PATH
```
