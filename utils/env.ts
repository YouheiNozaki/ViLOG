import yn from "yn";

const NEXT_PUBLIC_API_BASE_PATH = process.env.NEXT_PUBLIC_API_BASE_PATH ?? "";
const NEXT_PUBLIC_BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const NEXT_PUBLIC_ACTIVITY_LTI_CONTEXT_ONLY =
  yn(process.env.NEXT_PUBLIC_ACTIVITY_LTI_CONTEXT_ONLY) ?? false;
const NEXT_PUBLIC_ACTIVITY_SEND_INTERVAL = Number(
  process.env.NEXT_PUBLIC_ACTIVITY_SEND_INTERVAL ?? 10
);
const NEXT_PUBLIC_VIDEO_MAX_HEIGHT =
  process.env.NEXT_PUBLIC_VIDEO_MAX_HEIGHT ?? "60vh";
const NEXT_PUBLIC_NO_EMBED = yn(process.env.NEXT_PUBLIC_NO_EMBED) ?? false;

export {
  NEXT_PUBLIC_API_BASE_PATH,
  NEXT_PUBLIC_BASE_PATH,
  NEXT_PUBLIC_ACTIVITY_SEND_INTERVAL,
  NEXT_PUBLIC_ACTIVITY_LTI_CONTEXT_ONLY,
  NEXT_PUBLIC_VIDEO_MAX_HEIGHT,
  NEXT_PUBLIC_NO_EMBED,
};
