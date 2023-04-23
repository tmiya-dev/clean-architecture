# clean-architecture

a lesson for clean architecture

## .env

set these env from MinIO Operator.

* `MINIO_ACCESS_KEY`
* `MINIO_SECRET_KEY`

## run

```shell
docker compose up -d --build
```

* `http://localhost:9001`: MinIO Operator
  * see `docker-component.yml` for USER/PASS.
* `curl http://localhost/buckets`

