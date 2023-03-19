- /etc/gitlab-runner/config.toml
- privileged (for docker)
```
[session_server]
  session_timeout = 1800

[[runners]]
  name = "214adb409321"
  url = "http://192.168.56.101/"
  token = "scUr9mvuxSBPs4cWsys_"
  executor = "docker"
  [runners.custom_build_dir]
  [runners.cache]
    [runners.cache.s3]
    [runners.cache.gcs]
    [runners.cache.azure]
  [runners.docker]
    tls_verify = false
    image = "alpine:latest"
    privileged = true
    disable_entrypoint_overwrite = false
    oom_kill_disable = false
    disable_cache = false
    volumes = ["/cache"]
    shm_size = 0
```