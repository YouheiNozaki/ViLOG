import { useState } from "react";
import type { Filter } from "$types/filter";

const useFilter = () => useState<Filter>("self");

export default useFilter;
