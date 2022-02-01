import type { Book } from "@prisma/client";
import type { BookProps, BookSchema } from "$server/models/book";
import type { SectionProps } from "$server/models/book/section";
import prisma from "$server/utils/prisma";
import aggregateTimeRequired from "./aggregateTimeRequired";
import findBook from "./findBook";
import sectionCreateInput from "./sectionCreateInput";
import cleanupSections from "./cleanupSections";
import keywordsConnectOrCreateInput from "$server/utils/keyword/keywordsConnectOrCreateInput";
import keywordsDisconnectInput from "$server/utils/keyword/keywordsDisconnectInput";

function upsertSections(bookId: Book["id"], sections: SectionProps[]) {
  const sectionsCreateInput = sections.map(sectionCreateInput);
  return sectionsCreateInput.map((input, order) => {
    return prisma.section.create({
      data: { ...input, order, book: { connect: { id: bookId } } },
    });
  });
}

async function updateBook({
  id,
  ...book
}: Pick<Book, "id"> & BookProps): Promise<BookSchema | undefined> {
  const timeRequired = await aggregateTimeRequired(book);
  const cleanup = cleanupSections(id);
  const { sections, ...other } = book;
  const upsert = upsertSections(id, sections ?? []);
  const keywords = await prisma.keyword.findMany({
    where: { books: { every: { id } } },
  });
  const update = prisma.book.update({
    where: { id },
    data: {
      ...other,
      timeRequired,
      keywords: {
        ...keywordsConnectOrCreateInput(book.keywords ?? []),
        ...keywordsDisconnectInput(keywords, book.keywords ?? []),
      },
      updatedAt: new Date(),
    },
  });

  await prisma.$transaction([...cleanup, ...upsert, update]);

  return findBook(id);
}

export default updateBook;
