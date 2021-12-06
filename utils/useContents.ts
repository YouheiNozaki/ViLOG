import useSWR, { mutate } from "swr";
import { useDebounce } from "use-debounce";
import type {
  ApiV2SearchGetFilterEnum,
  ApiV2SearchGetSortEnum,
  ApiV2SearchGetTypeEnum,
} from "$openapi";
import type { SortOrder } from "$server/models/sortOrder";
import type { AuthorFilterType } from "$server/models/authorFilter";
import type { SearchResultSchema } from "$server/models/search";
import { api } from "./api";
import { revalidateBook } from "./book";
import { revalidateTopic } from "./topic";

const key = "/api/v2/search";

/** リクエストを間引くための間隔 (ms) */
const wait = 500;

async function fetchContents(
  _: typeof key,
  type: "book" | "topic",
  q: string,
  filter: AuthorFilterType,
  sort: SortOrder,
  perPage: number,
  page: number
): Promise<SearchResultSchema> {
  const res: SearchResultSchema = (await api.apiV2SearchGet({
    type: type as ApiV2SearchGetTypeEnum,
    q,
    filter: filter as ApiV2SearchGetFilterEnum,
    sort: sort as ApiV2SearchGetSortEnum,
    perPage,
    page,
  })) as unknown as SearchResultSchema;
  await Promise.all(
    res.contents.map(async (c) => {
      switch (c.type) {
        case "book":
          return await revalidateBook(c.id, c);
        case "topic":
          return await revalidateTopic(c.id, c);
      }
    })
  );
  return res;
}

function useContents({
  type,
  q,
  filter,
  sort,
  perPage,
  page,
}: {
  type: "none" | "book" | "topic";
  q: string;
  filter: AuthorFilterType;
  sort: SortOrder;
  perPage: number;
  page: number;
}) {
  const [debouncedQuery] = useDebounce(q, wait);
  const { data, isValidating } = useSWR(
    type === "none"
      ? null
      : [key, type, debouncedQuery, filter, sort, perPage, page],
    fetchContents
  );
  const contents = data?.contents ?? [];
  const loading = isValidating && data != null;
  const hasNextPage = contents.length === perPage;
  return { ...data, contents, loading, hasNextPage };
}

export default useContents;

export function revalidateContents({
  type,
  q,
  filter,
  sort,
  perPage,
  page,
}: {
  type: "none" | "book" | "topic";
  q: string;
  filter: AuthorFilterType;
  sort: SortOrder;
  perPage: number;
  page: number;
}): Promise<SearchResultSchema> {
  return mutate([key, type, q, filter, sort, perPage, page]);
}
