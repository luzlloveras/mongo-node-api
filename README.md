# Artists API

REST API for managing artist records. Built with NestJS and MongoDB.

## Scope
- CRUD operations for artists
- MongoDB persistence via Mongoose

## Requirements
- Node.js 18+
- MongoDB (local or Atlas)

## Configuration
The app reads `MONGODB_URI` from the environment. If it's not set, it falls back
to `mongodb://127.0.0.1:27017/luzlloveras`.

For Atlas, use the connection string from the UI and URL‑encode the password if
it contains special characters.
Example:

```bash
export MONGODB_URI="mongodb+srv://USER:ENCODED_PASSWORD@cluster0.example.mongodb.net/luzlloveras?retryWrites=true&w=majority"
```

## Running
```bash
npm install
npm run start:dev
```

The API listens on `http://localhost:3000`.

## API
Base path: `/artists`

- `GET /artists` — list all artists
- `GET /artists/:id` — fetch one artist by id
- `POST /artists` — create an artist
- `PUT /artists/:id` — update an artist
- `DELETE /artists/:id` — remove an artist

### Artist shape
```json
{
  "name": "string",
  "age": 0,
  "location": "string",
  "discipline": ["string"],
  "worksNumber": 0,
  "webSite": "string"
}
```
