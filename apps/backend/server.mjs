import express from 'express';
import prismaDefault from './generated/prisma/client.js';
const { PrismaClient } = prismaDefault;

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

// GET /users
app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

// GET /user/:id
app.get('/user/:id', async (req, res) => {
  const { id } = req.params;
  const user = await prisma.user.findUnique({ where: { id: Number(id) } });
  res.json(user);
});

// POST /user
app.post('/user', async (req, res) => {
  console.log('req.body', req.body);
  const { name, email } = req.body;
  console.log('name', name);
  console.log('email', email);
  const user = await prisma.user.create({ data: { name, email } });
  res.json(user);
});

// PUT /user/:id
app.put('/user/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const user = await prisma.user.update({
    where: { id: Number(id) },
    data: { name, email },
  });
  res.json(user);
});

// DELETE /user/:id
app.delete('/user/:id', async (req, res) => {
  const { id } = req.params;
  const user = await prisma.user.delete({ where: { id: Number(id) } });
  res.json(user);
});

app.listen(3100, () =>
  console.log('REST API server ready at: http://localhost:3100')
);
