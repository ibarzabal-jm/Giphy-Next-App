import TitleNeon from "@components/Layout/TitleNeon";
import ButtonNeon from "@components/Layout/ButtonNeon";

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
        <ButtonNeon Tag="button" className={styles.buttonNeon}>
          History
        </ButtonNeon>
      </header>
      <ListOfGifs gifs={searchs.flatMap((search) => search.gifs)} masonry={masonry} />
    </div>
  );
};

export default SearchLayout;
