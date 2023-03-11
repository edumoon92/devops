# devops docker compose samples

Project structure:
```
.
├── compose.yaml
└── README.md
```

# References
- https://github.com/docker/awesome-compose


## Basic setups for different platforms (not production ready - useful for personal use)

- [`Gitea / PostgreSQL`](gitea-postgres)
- [`Nextcloud / PostgreSQL`](nextcloud-postgres)
- [`Nextcloud / Redis / MariaDB`](nextcloud-redis-mariadb)
- [`Pi-hole / cloudflared`](pihole-cloudflared-DoH) - Sample Pi-hole setup with use of DoH cloudflared service
- [`Prometheus / Grafana`](prometheus-grafana)
- [`Wordpress / MySQL`](wordpress-mysql)

<!--lint disable awesome-toc-->

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

