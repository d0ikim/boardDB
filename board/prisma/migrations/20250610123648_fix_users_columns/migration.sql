/*
  Warnings:

  - You are about to drop the column `nickname` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `users` table. All the data in the column will be lost.
  - Added the required column `name` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `nickname`,
    DROP COLUMN `password`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;
