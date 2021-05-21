import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import LearningStatusDot from "$atoms/LearningStatusDot";
import getLocaleEntries from "$utils/bookLearningActivity/getLocaleEntries";
import type { BookActivitySchema } from "$server/models/bookActivity";

const useStyles = makeStyles((theme) => ({
  button: {
    appearance: "none",
    border: "none",
    background: "transparent",
    padding: 0,
    cursor: "pointer",
  },
  descriptionList: {
    "& > div": {
      display: "flex",
      flexWrap: "wrap",
      margin: theme.spacing(0.5, 0),
    },
    "& dt, & dd": {
      margin: 0,
    },
  },
  delimiter: {
    marginRight: theme.spacing(0.5),
  },
}));

type Props = {
  activity: BookActivitySchema;
  onActivityClick?(activity: BookActivitySchema): void;
};

export default function LearnerActivityDot(props: Props) {
  const { activity, onActivityClick } = props;
  const classes = useStyles();
  const handleActivityClick = () => onActivityClick?.(activity);
  const items = getLocaleEntries(activity);
  return (
    <Tooltip
      title={
        <dl className={classes.descriptionList}>
          {items.map(([key, value], index) => (
            <div key={index}>
              <dt>
                {key}
                <span className={classes.delimiter} aria-hidden>
                  :
                </span>
              </dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      }
      arrow
    >
      <button className={classes.button} onClick={handleActivityClick}>
        <LearningStatusDot status={activity.status} size="large" />
      </button>
    </Tooltip>
  );
}
