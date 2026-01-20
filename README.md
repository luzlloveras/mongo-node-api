# Artists API

REST API for managing artist records in a small catalog. It exists to provide a
clean backend for a simple client that needs basic CRUD and predictable data
shape.

Built with NestJS and MongoDB. Mongoose is used to keep the schema explicit and
avoid ad‑hoc document shapes.

## Requirements
- Node.js 18+
- MongoDB (local or Atlas)

## Configuration
The app reads `MONGODB_URI` from the environment. If it's not set, it falls back
to `mongodb://127.0.0.1:27017/luzlloveras`.

## Running
```bash
npm install
npm run start:dev
```

The API listens on `http://localhost:3000`. The base path is `/artists`.
Swagger UI is available at `http://localhost:3000/docs`.
OpenAPI JSON is available at `http://localhost:3000/docs-json`.