import { PrismaClient } from '../generated/prisma/client.js';

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});

(async () => {
  console.log('Starting bulk insert...');

  const result = (
    await Promise.all([bulkInsertUser(), bulkInsertItem(), bulkInsertItemImg()])
  ).every((result) => Boolean(result));
  if (result) {
    console.log('\nBulk insert completed successfully.\n');
  } else {
    console.log('\nFailed\n');
  }

  await prisma.$disconnect();
})();

/**
 * user
 */
async function bulkInsertUser() {
  const users = [
    { name: 'John Doe', email: 'john.doe@example.com' },
    { name: 'Pip Bird', email: 'pip.bird@example.com' },
    { name: 'Drew Owen', email: 'drew.owen@example.com' },
  ];

  try {
    await prisma.user.createMany({
      data: users,
      // skipDuplicates: true, // Skip duplicates
    });
  } catch (error) {
    console.error('Bulk insert failed: ', error);
    return false;
  }
  return true;
}

/**
 * item
 */
async function bulkInsertItem() {
  const items = [
    { name: 'アイテム1', price: 500, description: 'アイテム1の説明' },
    { name: 'アイテム2', price: 600, description: 'アイテム2の説明' },
    { name: 'アイテム3', price: 700, description: 'アイテム3の説明' },
  ];

  try {
    await prisma.item.createMany({
      data: items,
      // skipDuplicates: true, // Skip duplicates
    });
  } catch (error) {
    console.error('Bulk insert failed: ', error);
    return false;
  }
  return true;
}

/**
 * itemImg
 */
async function bulkInsertItemImg() {
  const itemImgs = [
    { itemId: 1, url: '/imgs/img01.png' },
    { itemId: 1, url: '/imgs/img02.png' },
    { itemId: 1, url: '/imgs/img03.png' },
    { itemId: 2, url: '/imgs/img04.png' },
    { itemId: 2, url: '/imgs/img05.png' },
    { itemId: 2, url: '/imgs/img06.png' },
  ];

  try {
    await prisma.itemImg.createMany({
      data: itemImgs,
      // skipDuplicates: true, // Skip duplicates
    });
  } catch (error) {
    console.error('Bulk insert failed: ', error);
    return false;
  }
  return true;
}
