import type { Book } from "@prisma/client";
import prisma from "$server/utils/prisma";
import cleanupSections from "./cleanupSections";

async function destroyBook(id: Book["id"]) {
  try {
    await prisma.$transaction([
      ...cleanupSections(id),
      prisma.ltiResourceLink.deleteMany({ where: { bookId: id } }),
      prisma.authorship.deleteMany({ where: { bookId: id } }),
      prisma.book.deleteMany({ where: { id } }),
      prisma.keyword.deleteMany({ where: { books: { every: { id } } } }),
    ]);
  } catch {
    return;
  }
}

export default destroyBook;
