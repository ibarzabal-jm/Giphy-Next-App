import React, {useEffect, useState} from "react";
import Loading from "@components/Loading/Loading";

import {useFetchGif} from "../../hooks/useFetchGifs";

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

  const handleUpdateDate = (indexToChange: number) => {
    setSearched(
      searched.map((search, i) => {
        if (i === indexToChange) {
          return {
            ...search,
            date: new Date(),
          };
        }

        return search;
      }),
    );
  };

  const onSubmit = (lastSearch: string, limit: number) => {
    let indexKeywordRepeated = searched.findIndex(
      (search) => search.keyword.toLowerCase() == lastSearch.toLowerCase(),
    );

    if (indexKeywordRepeated !== -1) return handleUpdateDate(indexKeywordRepeated);

    setLastSearch(lastSearch);
    execute(lastSearch, limit);
  };

  useEffect(() => {
    gifs && setSearched((prev) => [{keyword: lastSearch, gifs, date: new Date()}, ...prev]);
  }, [gifs]);

  return (
    <section className={styles.gifSearchComponent}>
      <SearchForm
        classButtonSearch={styles.buttonsearch}
        classForm={styles.formSearch}
        classLimit={styles.quantity}
        classSearch={styles.search}
        onSubmit={onSubmit}
      />

      {status === "pending" && (
        <div className={styles.loadingContainer}>
          <Loading />
        </div>
      )}
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
        {searched.length > 0 && (
          <button onClick={() => setMasonry(!masonry)}>
            <span>{masonry ? "Grid" : "Masonry"}</span>
          </button>
        )}
        {searched.length > 1 && (
          <button onClick={() => setSeparateToggle(!separateToggle)}>
            <span>{separateToggle ? "All" : "Separate"}</span>
          </button>
        )}
      </div>
    </section>
  );
};

export default GifSearchComponent;
