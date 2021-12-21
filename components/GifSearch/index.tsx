import React, {useEffect, useState} from "react";

import {useFetchGif} from "../../hooks/useFetchGifs";

import LayoutSearchResults from "./LayoutSearchResults";
import SearchForm from "./SearchForm";
import {Search} from "./types";
import styles from "./index.module.scss";

const GifSearchComponent: React.FC = () => {
  const [lastSearch, setLastSearch] = useState<string>("");
  const [searched, setSearched] = useState<Search[]>([]);
  const [separateToggle, setSeparateToggle] = useState<boolean>(true);
  const [masonry, setMasonry] = useState<boolean>(true);
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

  return (
    <section className={styles.gifSearchComponent}>
      <SearchForm
        classButtonSearch={styles.buttonsearch}
        classForm={styles.formSearch}
        classLimit={styles.quantity}
        classSearch={styles.search}
        onSubmit={onSubmit}
      />
      <button onClick={() => setSeparateToggle(!separateToggle)}>
        {separateToggle ? "All" : "Separate"}
      </button>
      <button onClick={() => setMasonry(!masonry)}>{masonry ? "Grid" : "Masonry"}</button>

      {status === "pending" && <p>Cargando...{lastSearch} </p>}
      {searched.length > 0 && (
        <LayoutSearchResults masonry={masonry} searchs={searched} separate={separateToggle} />
      )}
    </section>
  );
};

export default GifSearchComponent;
