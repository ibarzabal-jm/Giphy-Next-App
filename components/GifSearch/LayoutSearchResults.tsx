import Link from "next/link";
import TitleNeon from "@components/Layout/TitleNeon";

import ListOfGifs from "../ListOfGifs/ListOfGifs";

import {Search} from "./types";
import styles from "./LayoutSearchResults.module.scss";
interface Props {
  searchs: Search[];
  separate: boolean;
  masonry: boolean;
}

const LayoutSearchResults: React.FC<Props> = ({searchs, masonry, separate = true}) => {
  return (
    <div className={styles.SearchsContainer}>
      {separate ? (
        searchs.map((search) => (
          <div key={search.keyword} className={styles.SearchItem}>
            <ListOfGifs gifs={search.gifs} keyword={search.keyword} masonry={masonry} />
            <Link href={`/search/${search.keyword}`}>
              <a className={styles.buttonNeon}>
                <span />
                <span />
                <span />
                <span />
                Ver más de {search.keyword}
              </a>
            </Link>
          </div>
        ))
      ) : (
        <div>
          <div>
            <TitleNeon color="#acffaf" tag="h2" title={searchs[0].keyword} />
            History
          </div>
          <ListOfGifs
            gifs={searchs.flatMap((search) => search.gifs)}
            // keyword={searchs[0].keyword}
            masonry={masonry}
          />
        </div>
      )}
    </div>
  );
};

export default LayoutSearchResults;
