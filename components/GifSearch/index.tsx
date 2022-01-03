import React, {useEffect, useState} from "react";

import {useFetchGif} from "../../hooks/useFetchGifs";

import LayoutSearchResults from "./SearchLayout";
import SearchForm from "./SearchForm";
import {Search} from "./types";
import styles from "./index.module.scss";
import SeparateSearchLayout from "./SeparateSearchLayout";
import SearchLayout from "./SearchLayout";

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
    if (searched.find((search) => search.keyword === lastSearch)) return;
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

      {status === "pending" && <p>Cargando...{lastSearch} </p>}
      {searched.length > 0 && (
        <div className={styles.SearchContainer}>
          {separateToggle ? (
            <SeparateSearchLayout masonry={masonry} searchs={searched} />
          ) : (
            <SearchLayout masonry={masonry} searchs={searched} />
          )}
        </div>
      )}

      <div className={styles.buttonsWrap}>
        <button onClick={() => setSeparateToggle(!separateToggle)}>
          <span>{separateToggle ? "All" : "Separate"}</span>
        </button>
        <button onClick={() => setMasonry(!masonry)}>
          <span>{masonry ? "Grid" : "Masonry"}</span>
        </button>
      </div>
    </section>
  );
};

export default GifSearchComponent;
