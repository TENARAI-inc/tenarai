import { Express } from 'express';
import { PrismaClient } from '../generated/prisma/client.js';

export default function ItemImg(app: Express, prisma: PrismaClient) {
  // GET
  app.get('/api/itemimgs', async (req, res) => {
    const itemImgs = await prisma.itemImg.findMany();
    res.json(itemImgs);
  });

  app.get('/api/itemimgs/:id', async (req, res) => {
    const { id } = req.params;
    const itemImg = await prisma.itemImg.findUnique({
      where: { id: Number(id) },
    });
    res.json(itemImg);
  });

  // POST
  app.post('/api/itemimgs', async (req, res) => {
    const params = req.body;

    const itemImg = await prisma.itemImg.create({ data: params });
    res.json(itemImg);
  });

  // PUT
  app.put('/api/itemimgs/:id', async (req, res) => {
    const { id } = req.params;
    const prams = req.body;
    const itemImg = await prisma.itemImg.update({
      where: { id: Number(id) },
      data: prams,
    });
    res.json(itemImg);
  });

  // DELETE
  app.delete('/api/itemimgs/:id', async (req, res) => {
    const { id } = req.params;
    const itemImg = await prisma.itemImg.delete({ where: { id: Number(id) } });
    res.json(itemImg);
  });
}
