docker-compose exec -it web grep 'Password:' /etc/gitlab/initial_root_password

login: root
- init password check
```
docker exec -it gitlab grep 'Password:' /etc/gitlab/initial_root_password
```

id:root pw: tta123!@