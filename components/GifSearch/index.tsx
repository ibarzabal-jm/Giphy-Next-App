import React, {useEffect, useState} from "react";

import {useFetchGif} from "../../hooks/useFetchGifs";

import LayoutSearchResults from "./LayoutSearchResults";
import SearchForm from "./SearchForm";
import {Search} from "./types";

interface Submit {
  limit: number;
  keyword: boolean;
}

const GifSearchComponent: React.FC = () => {
  const [lastSearch, setLastSearch] = useState<string>("");
  const [searched, setSearched] = useState<Search[]>([]);
  const [separateToggle, setSeparateToggle] = useState(true);
  const {status, gifs, execute} = useFetchGif({
    keyword: "",
    immediate: false,
  });

  const onSubmit = (lastSearch: string, limit: number) => {
    setLastSearch(lastSearch);
    execute(lastSearch, limit);
  };

  useEffect(() => {
    status === "resolved" && setSearched((prev) => [{keyword: lastSearch, gifs}, ...prev]);
  }, [status]);

  console.log(searched);

  return (
    <div>
      <SearchForm onSubmit={onSubmit} />
      <button onClick={() => setSeparateToggle(!separateToggle)}>
        {separateToggle ? "Masonry" : "Separate"}
      </button>
      {status === "pending" && <p>Cargando...{lastSearch} </p>}
      {searched.length > 0 && <LayoutSearchResults searchs={searched} separate={separateToggle} />}
    </div>
  );
};

export default GifSearchComponent;
