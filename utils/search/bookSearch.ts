import type { BookSchema } from "$server/models/book";
import type { Query } from "./query";

function getTextContent(book: BookSchema): string {
  let str = book.name;

  for (const author of book.authors) {
    if (author.name) str += ` ${author.name}`;
  }
  for (const section of book.sections) {
    if (section.name) str += ` ${section.name}`;
    for (const topic of section.topics) {
      if (topic.name) str += ` ${topic.name}`;
      for (const author of topic.authors) {
        if (author.name) str += ` ${author.name}`;
      }
    }
  }

  return str.normalize("NFKD").toLowerCase();
}

/**
 * 検索クエリーによるブックの絞り込み
 * @deprecated
 * @param books ブックの配列
 * @param query 検索クエリー
 * @return 絞り込まれたブック
 */
function bookSearch(books: BookSchema[], query: Query): BookSchema[] {
  return books.filter((book) => {
    const text = getTextContent(book);
    const match =
      query.keywords.every((keyword) => text.includes(keyword)) &&
      query.ltiResourceLinks.every((a) =>
        book.ltiResourceLinks.some(
          (b) => a.consumerId === b.consumerId && a.contextId === b.contextId
        )
      );
    return match;
  });
}

export default bookSearch;
