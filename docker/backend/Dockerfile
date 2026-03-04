# Build stage
FROM maven:3.9.6-amazoncorretto-21 AS build
WORKDIR /build
COPY pom.xml .
# Benefit: Layer caching for dependencies
RUN mvn dependency:go-offline
COPY src ./src
RUN mvn clean package -DskipTests

# Runtime stage
FROM amazoncorretto:21-alpine
RUN apk add --no-cache curl
WORKDIR /app

# Using a wildcard or specific name to avoid copy errors
COPY --from=build /build/target/backend-*.jar app.jar

ARG ACTIVE_PROFILE=production

ENV PROFILE=${ACTIVE_PROFILE}
ENV DATABASE_URL=jdbc:mysql://mysql:3306/velocity

EXPOSE 8181

# Optimization: Using exec form and better memory management for Java 21
ENTRYPOINT ["java", "-jar", "-Dspring.profiles.active=${PROFILE}", "-Dspring.datasource.url=${DATABASE_URL}", "app.jar"]