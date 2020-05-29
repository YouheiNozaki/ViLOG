import { useVideos } from "components/hooks";
import { useDispatch } from "components/state";
import { VideosTable } from "components/VideosTable";
import { ShowVideo, ShowVideoProps } from "components/ShowVideo";
import { useRouter } from "components/hooks";
import { Link } from "components/theme";
import { useAppState } from "components/state";
import { Divider } from "@material-ui/core";
import { ShowSession } from "components/ShowSession";

type Query = Partial<ShowVideoProps> & { action?: "edit" | "new" };

function Index() {
  const title = "ビデオの管理";
  const dispatch = useDispatch();
  const { data, error } = useVideos();

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  dispatch((s) => ({
    ...s,
    title,
    videos: data.contents.map(({ id }) => id),
  }));

  return (
    <div>
      <h1>{title}</h1>
      <VideosTable
        data={data.contents.map(({ id, name, description }) => ({
          id,
          name,
          description,
          editable: true,
        }))}
      />
    </div>
  );
}

function Show(props: ShowVideoProps) {
  const videos = useAppState().videos;
  const { prev, next } = videos.reduce(
    (acc, id, index, array) => {
      if (index <= array.length - 2 && id === props.id)
        return { prev: array[index - 1], next: array[index + 1] };
      return { ...acc };
    },
    { prev: null, next: null } as any
  );

  return (
    <div>
      <ShowVideo id={props.id} />
      <Divider />
      {prev && (
        <Link href={{ pathname: "/videos", query: { id: prev } }}>前</Link>
      )}
      {prev && next && " | "}
      {next && (
        <Link href={{ pathname: "/videos", query: { id: next } }}>次</Link>
      )}
    </div>
  );
}

const Edit = ShowVideo;
const New = ShowSession;

function Router() {
  const router = useRouter();
  const query: Query = router.query;

  if (!query.id) {
    switch (query.action) {
      default:
        return <Index />;
      case "new":
        return <New />;
    }
  }

  switch (query.action) {
    default:
      return <Show id={query.id} />;
    case "edit":
      return <Edit id={query.id} />;
  }
}

export default Router;
