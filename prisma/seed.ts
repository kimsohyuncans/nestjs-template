import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.example.upsert({
    where: { id: 'template-example-id' },
    update: {},
    create: {
      id: 'template-example-id',
      name: 'Seeded Example',
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
