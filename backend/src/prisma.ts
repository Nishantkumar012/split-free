// prisma.ts
import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

if (!(global as any).prisma) {
  (global as any).prisma = new PrismaClient();
}

prisma = (global as any).prisma;

export default prisma;



// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// export default prisma;