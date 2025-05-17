import { PrismaClient } from '../generated/prisma/client.js';

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});

/**
 * Bulk insert script
 */
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
  const items = Array.from({ length: 100 }, (_, i) => ({
    name: `アイテム${i + 1}`,
    price: (i + 1) * 100,
    description: `アイテム${i + 1}の説明`,
  }));

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
  let colors: string[] = [];

  const itemImgs = Array.from({ length: 100 }, (_, i) => {
    if (colors.length === 0) {
      colors = shuffle(['ed5a5a', 'db4e4e']);
    }

    const color = colors.pop();
    return {
      itemId: i + 1,
      url: `https://fakeimg.pl/640x360/${color}/fff?text=${String(
        i + 1
      ).padStart(3, '0')}.png`,
    };
  });

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

function shuffle(colors: string[]) {
  return colors.sort(() => Math.random() - 0.5);
}
