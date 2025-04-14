import express from 'express';
import { PrismaClient } from '../generated/prisma/client.js';
import user from './user.js';

const prisma = new PrismaClient();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({ error: 'Invalid JSON format' });
  }
  next();
});

user(app, prisma);

const PORT = 3100;
app.listen(PORT, () =>
  console.log(`REST API server ready at: http://localhost:${PORT}`)
);
