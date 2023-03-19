- nightwatch execution

```
docker-compose run --rm nightwatch bash 
```

```
docker-compose up
docker-compose run --rm nightwatch bash 
docker-compose down
```

- run ui-tests test case bash-5.1 (after entering nighwatch docker)

```
nightwatch ui-tests -e chrome
nightwatch ui-tests -e chrome,firefox
```
