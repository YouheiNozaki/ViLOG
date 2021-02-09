export default { title: "organisms/AppBar" };

import AppBar from "./AppBar";
import { session } from "$samples";

export const Default = () => (
  <AppBar
    position="sticky"
    session={session}
    onBooksClick={console.log}
    onTopicsClick={console.log}
    onDashboardClick={console.log}
  />
);
