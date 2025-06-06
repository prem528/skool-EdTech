import 'dotenv/config'; 
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connectDB from './src/db/index.js'
import authRoutes from './src/routes/auth.js'; 
import dataRoutes from './src/routes/dataRoutes.js';
import adminRoutes from './src/routes/adminRoutes.js';

const app = express();

// Connect to MongoDB
connectDB();

app.use(
  cors({
    origin: 'http://localhost:5173', 
    credentials: true,               
  })
);
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/auth', authRoutes);
app.use("/api/data", dataRoutes);
app.use("/api/admin", adminRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});