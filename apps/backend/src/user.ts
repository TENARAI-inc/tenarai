import { Express } from 'express';
import { PrismaClient } from '../generated/prisma/client.js';

export default function User(app: Express, prisma: PrismaClient) {
  // GET /users
  app.get('/users', async (req, res) => {
    const users = await prisma.user.findMany();
    res.json(users);
  });

  // GET /user/:id
  app.get('/users/:id', async (req, res) => {
    const { id } = req.params;
    const user = await prisma.user.findUnique({ where: { id: Number(id) } });
    res.json(user);
  });

  // POST /user
  app.post('/users', async (req, res) => {
    const prams = req.body;
    const user = await prisma.user.create({ data: prams });
    res.json(user);
  });

  // PUT /user/:id
  app.put('/users/:id', async (req, res) => {
    const { id } = req.params;
    const prams = req.body;
    const user = await prisma.user.update({
      where: { id: Number(id) },
      data: prams,
    });
    res.json(user);
  });

  // DELETE /user/:id
  app.delete('/users/:id', async (req, res) => {
    const { id } = req.params;
    const user = await prisma.user.delete({ where: { id: Number(id) } });
    res.json(user);
  });
}
