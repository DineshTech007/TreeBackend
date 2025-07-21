import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import familyTreeRoutes from './routes/familyTreeRoutes';
import { ApiResponse } from './types/Person';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" },
  contentSecurityPolicy: {
    directives: {
      ...helmet.contentSecurityPolicy.getDefaultDirectives(),
      "img-src": ["'self'", "data:", "http://localhost:*", "https://localhost:*"]
    }
  }
}));
app.use(cors({
  origin: [
    process.env.FRONTEND_URL || 'http://localhost:8080',
    'http://localhost:8081',
    'http://localhost:8082',
    'http://localhost:3000'
  ],
  credentials: true
}));
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (images)
app.use('/images', express.static('public/images'));

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Family Tree API is running',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  } as ApiResponse);
});

// API routes
app.use('/api/family-tree', familyTreeRoutes);

// Root endpoint
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Welcome to Family Tree API',
    endpoints: {
      health: '/health',
      familyTree: '/api/family-tree',
      familyMember: '/api/family-tree/:id',
      generation: '/api/family-tree/generation/:generation',
      children: '/api/family-tree/:id/children',
      parents: '/api/family-tree/:id/parents',
      siblings: '/api/family-tree/:id/siblings',
      search: '/api/family-tree/search?q=name'
    }
  } as ApiResponse);
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} not found`
  } as ApiResponse);
});

// Global error handler
app.use((error: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Global error handler:', error);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'
  } as ApiResponse);
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Family Tree API server is running on port ${PORT}`);
  console.log(`📍 Health check: http://localhost:${PORT}/health`);
  console.log(`🌳 Family Tree API: http://localhost:${PORT}/api/family-tree`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
});

export default app;
