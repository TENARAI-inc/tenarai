/*
  Warnings:

  - Added the required column `item_id` to the `ItemImg` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ItemImg" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "item_id" INTEGER NOT NULL,
    "url" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_ItemImg" ("created_at", "id", "url") SELECT "created_at", "id", "url" FROM "ItemImg";
DROP TABLE "ItemImg";
ALTER TABLE "new_ItemImg" RENAME TO "ItemImg";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
