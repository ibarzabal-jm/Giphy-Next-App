import ListOfGifs from "@components/ListOfGifs/ListOfGifs";
import Link from "next/link";

import styles from "./SearchLayout.module.scss";
import {Search} from "./types";

interface Props {
  searchs: Search[];
  masonry: boolean;
}

const SeparateSearchLayout: React.FC<Props> = ({searchs, masonry}) => {
  return (
    <ul className={styles.listSearch}>
      {searchs.map((search) => (
        <li key={search.keyword} className={styles.searchItem}>
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
        </li>
      ))}
    </ul>
  );
};

export default SeparateSearchLayout;
