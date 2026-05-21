import prisma from "../../db/prisma";

export async function resetDb() {
  await prisma.$transaction([
    prisma.sum.deleteMany(),
  ])
}   
