import TitleNeon from "@components/Layout/TitleNeon";

import ListOfGifs from "../ListOfGifs/ListOfGifs";

import {Search} from "./types";
import styles from "./SearchLayout.module.scss";
interface Props {
  searchs: Search[];
  masonry: boolean;
}

const SearchLayout: React.FC<Props> = ({searchs, masonry}) => {
  return (
    <div className={styles.SearchLayout}>
      <header className={styles.header}>
        <TitleNeon color="#acffaf" tag="h2" title={searchs[0].keyword} />
        <button className={styles.buttonNeon}>
          <span />
          <span />
          <span />
          <span />
          History
        </button>
      </header>
      <ListOfGifs gifs={searchs.flatMap((search) => search.gifs)} masonry={masonry} />
    </div>
  );
};

export default SearchLayout;
