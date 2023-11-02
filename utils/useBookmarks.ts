import { api } from "./api";
import useSWR from "swr";

import type { BookmarkSchema } from "$server/models/bookmark";
import type { BookmarkQuery } from "$server/validators/bookmarkQuery";

const key = "/api/v2/bookmark";

async function fetchBookmarks({
  topicId,
  isAllUsers,
}: {
  key: typeof key;
  topicId: BookmarkQuery["topicId"];
  isAllUsers: BookmarkQuery["isAllUsers"];
}): Promise<{ bookmark: BookmarkSchema[] }> {
  const res = await api.apiV2BookmarksGet({ topicId, isAllUsers });

  return res as unknown as { bookmark: BookmarkSchema[] };
}

function useBookmarks({
  topicId,
  isAllUsers = false,
}: {
  topicId: BookmarkQuery["topicId"];
  isAllUsers?: BookmarkQuery["isAllUsers"];
}) {
  const { data, isLoading } = useSWR(
    { key, topicId, isAllUsers },
    fetchBookmarks
  );
  return { bookmarks: data?.bookmark || [], isLoading };
}

export default useBookmarks;
