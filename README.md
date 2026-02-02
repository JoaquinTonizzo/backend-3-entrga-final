# API de Adopción de Mascotas

API REST para gestionar adopciones de mascotas. Desarrollada con Node.js, Express y MongoDB.

## Instalación

```bash
npm install
npm start
```

La app corre en `http://localhost:8080`

## Endpoints

**Users**
- GET /api/users
- GET /api/users/:uid
- PUT /api/users/:uid
- DELETE /api/users/:uid

**Pets**
- GET /api/pets
- GET /api/pets/:pid
- POST /api/pets
- PUT /api/pets/:pid

**Adoptions**
- GET /api/adoptions
- GET /api/adoptions/:aid
- POST /api/adoptions/:uid/:pid

**Mocks** (datos de prueba)
- GET /api/mocks/mockingpets
- GET /api/mocks/mockingusers
- POST /api/mocks/generateData

## Documentación

La documentación completa está en Swagger:
```
http://localhost:8080/api/docs
```

## Tests

```bash
npm test
```

Los tests cubren todos los endpoints de adoptions (17 tests).

## Docker

```bash
# Build
docker build -t adoption-api .

# Run
docker run -p 8080:8080 \
  -e MONGO_URL="mongodb://localhost:27017/adoption-db" \
  adoption-api
```

O usar docker-compose:
```bash
docker-compose up
```

## Requisitos

- Node.js 20+
- MongoDB

## Stack

- Express
- MongoDB + Mongoose
- Mocha + Chai + Supertest (tests)
- Swagger/OpenAPI 3
- Docker
