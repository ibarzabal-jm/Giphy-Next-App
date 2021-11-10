import React, {useEffect, useState} from "react";

import {useFetchGif} from "../../hooks/useFetchGifs";

import LayoutSearchResults from "./LayoutSearchResults";
import InputSearch from "./Search";
import {Search} from "./types";

const GifSearchComponent: React.FC = () => {
  const [lastSearch, setLastSearch] = useState<string>("");
  const [searched, setSearched] = useState<Search[]>([]);
  const {status, gifs, execute} = useFetchGif("", false);

  const handleSearch = (lastSearch: string) => {
    setLastSearch(lastSearch);
    execute(lastSearch);
  };

  useEffect(() => {
    status === "resolved" && setSearched((prev) => [{keyword: lastSearch, gifs}, ...prev]);
  }, [status]);

  return (
    <div>
      <InputSearch setKeyword={handleSearch} />
      {status === "pending" && <p>Cargando...{lastSearch} </p>}
      {searched.length > 0 && <LayoutSearchResults searchs={searched} separate={false} />}
    </div>
  );
};

export default GifSearchComponent;
