import { Express } from 'express';
import { PrismaClient } from '../generated/prisma/client.js';

export default function Item(app: Express, prisma: PrismaClient) {
  // GET
  app.get('/items', async (req, res) => {
    const items = await prisma.item.findMany({
      include: {
        itemimg: true,
      },
    });
    res.json(items);
  });

  app.get('/items/:id', async (req, res) => {
    const { id } = req.params;
    const item = await prisma.item.findUnique({ where: { id: Number(id) } });
    res.json(item);
  });

  // POST
  app.post('/items', async (req, res) => {
    const params = req.body;
    const item = await prisma.item.create({
      data: params,
    });
    res.json(item);
  });

  // PUT
  app.put('/items/:id', async (req, res) => {
    const { id } = req.params;
    const prams = req.body;
    const item = await prisma.item.update({
      where: { id: Number(id) },
      data: prams,
    });
    res.json(item);
  });

  // DELETE
  app.delete('/items/:id', async (req, res) => {
    const { id } = req.params;
    const item = await prisma.item.delete({ where: { id: Number(id) } });
    res.json(item);
  });
}
