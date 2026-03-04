#### 1. Build Docker Image

```shell
docker build \
   -t rupesh1997/frontend-svc:1.0.0 \
   -t rupesh1997/frontend-svc:latest \
   --build-arg CONFIGURATION=docker \
   -f ../docker/frontend/Dockerfile .
```

#### 2. Run Frontend Container

```shell
docker run -d --name frontend-svc --network velocity -p 8080:8080 rupesh1997/frontend-svc:1.0.0
```