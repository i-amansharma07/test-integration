/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Sum" (
    "id" SERIAL NOT NULL,
    "a" INTEGER NOT NULL,
    "b" INTEGER NOT NULL,
    "result" INTEGER NOT NULL,

    CONSTRAINT "Sum_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Sum_a_key" ON "Sum"("a");
