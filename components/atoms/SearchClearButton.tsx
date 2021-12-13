import IconButton from "$atoms/IconButton";
import CloseIcon from "@mui/icons-material/Close";

type Props = Omit<Parameters<typeof IconButton>[0], "tooltipProps">;

export default function SearchClearButton({ ...other }: Props) {
  return (
    <IconButton
      size="small"
      color="secondary"
      {...other}
      tooltipProps={{ title: `検索を解除` }}
    >
      <CloseIcon />
    </IconButton>
  );
}
