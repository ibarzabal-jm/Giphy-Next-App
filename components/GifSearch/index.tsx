import React, {useEffect, useState} from "react";

import {useFetchGif} from "../../hooks/useFetchGifs";
import {Gif} from "../../types/ApiResponse";
import {StatusSearch} from "../../types/StatusSearch";
import ListOfGifs from "../ListOfGifs";

import Search from "./Search";

const GifSearchComponent: React.FC = () => {
  const [historySearch, setHistorySearch] = useState<string[]>([]);
  const [gifsSearched, setGifsSearched] = useState<Gif[]>([]);
  const {loading, gifs, execute} = useFetchGif("", false);

  const handleSetHistory = (lastSearch: string) => {
    setHistorySearch((prev) => [lastSearch, ...prev]);
    execute(lastSearch);
  };

  useEffect(() => {
    setGifsSearched((prev) => [...gifs, ...prev]);
  }, [gifs]);

  console.log(gifsSearched);

  return (
    <div>
      <Search setKeyword={handleSetHistory} />
      {loading && <p>Cargando...</p>}
      <ListOfGifs gifs={gifsSearched} keyword={historySearch[0]} />
    </div>
  );
};

export default GifSearchComponent;
