-- AlterTable
ALTER TABLE "Collection" ADD COLUMN     "images" TEXT[] DEFAULT ARRAY[]::TEXT[];
