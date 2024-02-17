/*
  Warnings:

  - You are about to drop the `CategoriesOnBooks` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "CategoriesOnBooks";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "categories_on_books" (
    "book_id" TEXT NOT NULL,
    "category_id" TEXT NOT NULL,

    PRIMARY KEY ("book_id", "category_id"),
    CONSTRAINT "categories_on_books_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "books" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "categories_on_books_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE INDEX "categories_on_books_book_id_idx" ON "categories_on_books"("book_id");

-- CreateIndex
CREATE INDEX "categories_on_books_category_id_idx" ON "categories_on_books"("category_id");
