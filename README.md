# devops docker compose samples

Project structure:

```
.
├── docker
│   ├── nodejs-web
│   │   ├── docker-compose.yml
│   │   ├── Dockerfile
│   │   ├── index.js
│   │   ├── index.js.new
│   │   ├── index.js.old
│   │   └── package.json
│   ├── portainer
│   │   ├── docker-compose.yml
│   │   └── README.md
│   ├── python-web
│   │   ├── docker-compose.yml
│   │   ├── Dockerfile
│   │   └── requirements.txt
│   └── react-nodejs-mysql
│       ├── docker-compose-react-nodejs-mysql
│       │   ├── bezkoder-api
│       │   │   ├── app
│       │   │   │   ├── config
│       │   │   │   │   └── db.config.js
│       │   │   │   ├── controllers
│       │   │   │   │   └── tutorial.controller.js
│       │   │   │   ├── models
│       │   │   │   │   ├── index.js
│       │   │   │   │   └── tutorial.model.js
│       │   │   │   └── routes
│       │   │   │       └── turorial.routes.js
│       │   │   ├── Dockerfile
│       │   │   ├── package.json
│       │   │   ├── README.md
│       │   │   └── server.js
│       │   ├── bezkoder-ui
│       │   │   ├── Dockerfile
│       │   │   ├── package.json
│       │   │   ├── public
│       │   │   │   ├── favicon.ico
│       │   │   │   ├── index.html
│       │   │   │   ├── logo192.png
│       │   │   │   ├── logo512.png
│       │   │   │   ├── manifest.json
│       │   │   │   └── robots.txt
│       │   │   ├── react-crud-example-web-api-demo.png
│       │   │   ├── README.md
│       │   │   └── src
│       │   │       ├── App.css
│       │   │       ├── App.js
│       │   │       ├── components
│       │   │       │   ├── add-tutorial.component.js
│       │   │       │   ├── tutorial.component.js
│       │   │       │   └── tutorials-list.component.js
│       │   │       ├── http-common.js
│       │   │       ├── index.js
│       │   │       ├── logo.svg
│       │   │       ├── services
│       │   │       │   └── tutorial.service.js
│       │   │       ├── serviceWorker.js
│       │   │       └── setupTests.js
│       │   ├── docker-compose.yml
│       │   └── README.md
│       ├── docker-compose.yml
│       ├── package.json
│       └── README.md
└── gitlab
    └── docker-compose.yml

```        
        
# References
- https://github.com/docker/awesome-compose
- https://github.com/dockersamples/101-tutorial
- https://github.com/dockersamples


### Prerequisites

- Make sure that you have Docker and Docker Compose installed
  - Windows or macOS:
    [Install Docker Desktop](https://www.docker.com/get-started)
  - Linux: [Install Docker](https://www.docker.com/get-started) and then
    [Docker Compose](https://github.com/docker/compose)
- Download some or all of the samples from this repository.

### Running a sample

The root directory of each sample contains the `compose.yaml` which
describes the configuration of service components. All samples can be run in
a local environment by going into the root directory of each one and executing:

```console
docker compose up -d
docker compose down
```

### Quickstart guides

In addition to all the ready to run Compose samples listed above the folder [official-documentation-samples](official-documentation-samples/README.md) contains quickstart guides. Each of these step by step guides explain which files need to be created to build and run a Docker Compose application.

