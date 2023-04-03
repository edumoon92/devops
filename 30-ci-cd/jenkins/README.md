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
docker exec -u 0 -it 9b8 /bin/bash
```
