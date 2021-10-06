import { UserSchema } from "$server/models/user";
import { BookProps, BookSchema } from "$server/models/book";
import prisma from "$server/utils/prisma";
import aggregateTimeRequired from "./aggregateTimeRequired";
import findBook from "./findBook";
import sectionCreateInput from "./sectionCreateInput";

async function createBook(
  creatorId: UserSchema["id"],
  book: BookProps
): Promise<BookSchema | undefined> {
  const timeRequired = await aggregateTimeRequired(book);
  const sectionsCreateInput = book.sections?.map(sectionCreateInput) ?? [];

  const { id } = await prisma.book.create({
    data: {
      ...book,
      timeRequired,
      details: {},
      creator: { connect: { id: creatorId } },
      sections: { create: sectionsCreateInput },
    },
  });

  return findBook(id);
}

export default createBook;
