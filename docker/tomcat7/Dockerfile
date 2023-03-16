FROM tomcat:7.0

RUN apt-get update && apt-get -y install vim

# docker-compose 에서 톰캣 부분이 실행될때 아래 경로를 미리 만들어준다.
RUN mkdir -p /usr/local/tomcat/shared/lib
RUN mkdir -p /usr/local/tomcat/server/lib
