/*
  Warnings:

  - Added the required column `preferredName` to the `Mapping` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Mapping" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "inciName" TEXT NOT NULL,
    "preferredName" TEXT NOT NULL,
    "uniiCode" TEXT NOT NULL
);
INSERT INTO "new_Mapping" ("id", "inciName", "uniiCode") SELECT "id", "inciName", "uniiCode" FROM "Mapping";
DROP TABLE "Mapping";
ALTER TABLE "new_Mapping" RENAME TO "Mapping";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
