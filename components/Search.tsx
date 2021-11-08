import React, {useEffect, useState} from "react";

import {useFetchGif} from "../hooks/useFetchGifs";
import {StatusSearch} from "../types/StatusSearch";

interface Props {
  setSearched: React.Dispatch<React.SetStateAction<StatusSearch>>;
}

const Search: React.FC<Props> = ({setSearched}) => {
  const [keyword, setKeyword] = useState<string>("");
  const {loading, gifs: newGifs, execute} = useFetchGif(keyword, false);

  const handleChange = ({target}: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearched((prevState) => ({
      ...prevState,
      loading: true,
    }));
    execute();
  };

  useEffect(() => {
    setSearched((prevState) => ({
      ...prevState,
      lastSearch: keyword,
      historySearch: [keyword, ...prevState.historySearch],
      gifs: [...newGifs, ...prevState.gifs],
      loading,
    }));
  }, [newGifs]);

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Searching Gif..." type="text" value={keyword} onChange={handleChange} />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default Search;
