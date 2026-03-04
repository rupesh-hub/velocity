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
  --network velocity \
  -e MYSQL_ROOT_PASSWORD=root \
  -e MYSQL_DATABASE=velocity \
  mysql:latest 
```

#### 4. Run Backend Container
```bash
docker run -d \
 -p 8181:8181 \
  --name backend-svc \
   --network velocity \
    -e APPLICATION_CORS_ORIGINS=http://localhost:8080 \
    -e SPRING_DATASOURCE_URL=jdbc:mysql://mysql:3306/velocity \
     rupesh1997/backend-svc:1.0.0
     
```
