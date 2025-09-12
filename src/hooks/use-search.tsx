import React from "react";
import { ISearch } from "@/providers/use-search";

const useSearch = () => {
  return React.useContext(ISearch);
};

export default useSearch;
