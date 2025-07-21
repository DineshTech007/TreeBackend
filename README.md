# Family Tree Backend API

A RESTful API built with Node.js, Express, and TypeScript to serve family tree data for the frontend application.

## Features

- Complete family tree data with 7 generations
- RESTful API endpoints for family data
- TypeScript for type safety
- CORS enabled for frontend integration
- Comprehensive error handling
- Health check endpoint

## API Endpoints

### Base URL: `http://localhost:3001`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/health` | Health check |
| GET | `/api/family-tree` | Get all family members |
| GET | `/api/family-tree/:id` | Get specific family member |
| GET | `/api/family-tree/generation/:generation` | Get members by generation (1-7) |
| GET | `/api/family-tree/:id/children` | Get children of a person |
| GET | `/api/family-tree/:id/parents` | Get parents of a person |
| GET | `/api/family-tree/:id/siblings` | Get siblings of a person |
| GET | `/api/family-tree/search?q=name` | Search by name |

## Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Create environment file:**
   ```bash
   cp .env.example .env
   ```

3. **Run in development mode:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

## Environment Variables

- `PORT`: Server port (default: 3001)
- `NODE_ENV`: Environment (development/production)
- `FRONTEND_URL`: Frontend URL for CORS (default: http://localhost:8080)

## Data Structure

Each person in the family tree has:
- `id`: Unique identifier
- `name`: Full name
- `x`, `y`: Coordinates for tree visualization
- `parents`: Array of parent IDs (optional)

## Example Response

```json
{
  "success": true,
  "data": [
    {
      "id": "1",
      "name": "William Anderson",
      "x": 100,
      "y": 50
    }
  ],
  "message": "Family tree data retrieved successfully"
}
```
