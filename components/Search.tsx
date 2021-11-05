import React, {useState} from "react";

import {useFetchGif} from "../hooks/useFetchGifs";
import {StatusFetch} from "../types/StatusFetch";

interface Props {
  setSearchs: React.Dispatch<React.SetStateAction<StatusFetch[]>>;
}

const Search: React.FC<Props> = ({setSearchs}) => {
  const [keyword, setKeyword] = useState<string>("");
  const {loading: loadingLastGif, gifs} = useFetchGif(keyword);

  const handleChange = ({target}: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // execute fetch
  };

  useEffect(() => {
    !loadingLastGif && setSearchs((prevGifs) => [{keyword: keyword, loading, gifs}, ...prevGifs]);
  }, [loadingLastGif]);

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Searching Gif..." type="text" value={keyword} onChange={handleChange} />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default Search;
