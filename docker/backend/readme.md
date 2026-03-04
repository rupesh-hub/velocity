#### 1. Build Backend Image
```bash
docker build -t rupesh1997/backend-svc:1.0.0 \
   -t rupesh1997/backend-svc:latest \
   --build-arg ACTIVE_PROFILE=docker \
   --build-arg PROJECT_VERSION=1.0.0 \
   -f ../docker/backend/Dockerfile .
```

#### 2. Docker Network
```bash
docker network create velocity --driver bridge
docker network velocity
docker network inspect notes
```

#### 3. Mysql Container
```bash
docker run -d \
  -p 3306:3306 \
  --name mysql \
  --network notes \
  --env-file .env \
  -v mysql_data:/var/lib/mysql \
  --cpus="1.0" \
  --memory="1g" \
  --memory-swap="1g" \
  --health-cmd="mysqladmin ping -h localhost -u root -p$MYSQL_ROOT_PASSWORD" \
  --health-interval=10s \
  --health-timeout=5s \
  --health-retries=5 \
  --health-start-period=30s \
  mysql:8.0
```

#### 4. Run Backend Container
```bash
docker run -d \
 -p 8181:8181 \
  --name backend-svc \
   --network velocity \
    -e APPLICATION_CORS_ORIGINS=http://localhost:8080 \
     rupesh1997/backend-svc:1.0.0
docker run -d -p 8181:8181 --name backend-svc --network notes rupesh1997/backend-svc:1.0.0
```
