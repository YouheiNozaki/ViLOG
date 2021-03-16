import clsx from "clsx";
import { TopicSchema } from "$server/models/topic";
import { format, formatDuration, intervalToDuration } from "date-fns";
import { ja } from "date-fns/locale";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Video from "$organisms/Video";
import Item from "$atoms/Item";
import languages from "$utils/languages";

function formatInterval(start: Date | number, end: Date | number) {
  const duration = intervalToDuration({ start, end });
  return formatDuration(duration, { locale: ja });
}

const useStyles = makeStyles((theme) => ({
  video: {
    marginTop: theme.spacing(-2),
    marginRight: theme.spacing(-3),
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(-3),
    "&$sticky": {
      position: "sticky",
      top: theme.spacing(-2),
    },
  },
  sticky: {},
  title: {
    marginBottom: theme.spacing(2),
  },
  items: {
    "& > *": {
      display: "inline-block",
      marginRight: theme.spacing(1.75),
      marginBottom: theme.spacing(1),
    },
  },
  description: {
    whiteSpace: "pre-wrap",
  },
}));

type Props = {
  topic: TopicSchema;
  onEnded?: () => void;
  top?: number;
  sticky?: boolean;
};

export default function TopicViewerContent(props: Props) {
  const { topic, onEnded, sticky = false } = props;
  const classes = useStyles();
  return (
    <>
      {"providerUrl" in topic.resource && (
        <Video
          className={clsx(classes.video, { [classes.sticky]: sticky })}
          {...topic.resource}
          onEnded={onEnded}
          autoplay
        />
      )}
      <Typography className={classes.title} variant="h5">
        {topic.name}
      </Typography>
      <div className={classes.items}>
        <Typography className={classes.title} variant="h6">
          学習時間 {formatInterval(0, topic.timeRequired * 1000) || "10秒未満"}
        </Typography>
        <Typography className={classes.title} variant="h6">
          {languages[topic.language]}
        </Typography>
        {/* TODO: トピックがライセンスをプロパティに持つようになったら表示してください
        <Typography className={classes.title} variant="h6">
          ライセンス
        </Typography>
        */}
      </div>
      <div className={classes.items}>
        <Item itemKey="作成日" value={format(topic.createdAt, "yyyy.MM.dd")} />
        <Item itemKey="更新日" value={format(topic.updatedAt, "yyyy.MM.dd")} />
        <Item itemKey="作成者" value={topic.creator.name} />
      </div>
      <p className={classes.description}>{topic.description}</p>
    </>
  );
}
