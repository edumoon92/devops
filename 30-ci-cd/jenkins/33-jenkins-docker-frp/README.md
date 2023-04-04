```
wget https://bin.equinox.io/c/bNyj1mQVY4c/ngrok-v3-stable-linux-amd64.tgz
```

```
ngrok http 8080
ngrok http --proto=http 8080
```
---
To use a Jenkinsfile in your Jenkins build process, you can follow these steps:

Open the Jenkins dashboard and create a new Jenkins job.

In the "General" section of the job configuration, select "Pipeline" as the type of job.

In the "Pipeline" section, select "Pipeline script from SCM" as the definition of the pipeline.

Choose the appropriate SCM (such as Git or Subversion) and enter the repository URL.

In the "Script Path" field, enter the path to your Jenkinsfile. For example, if your Jenkinsfile is located in the root directory of your repository, you would enter Jenkinsfile.

Save the job configuration.

Run the Jenkins job and watch the pipeline execute according to the steps defined in the Jenkinsfile.

---
- root access
```
docker exec -u 0 -it <container_id/container_name> /bin/bash
```
- docker access
```
chown root:docker /var/run/docker.sock
```

---
- https://jerry92k.tistory.com/71 : Github - Jenkins로 CI 자동화 하기
- https://jerry92k.tistory.com/72 : Jenkins CD 자동화 하기

---
- v0.4
- wget, ngrok install
