import ButtonNeon from "@components/Layout/ButtonNeon";
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
      {searchs
        .sort((a, b) => b.date!.getTime() - a.date!.getTime())
        .map((search) => (
          <li key={search.keyword} className={styles.searchItem}>
            <ListOfGifs gifs={search.gifs} keyword={search.keyword} masonry={masonry} />
            <Link passHref href={`/search/${search.keyword}`}>
              <ButtonNeon Tag="a" className={styles.buttonNeon}>
                Ver más de {search.keyword}
              </ButtonNeon>
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default SeparateSearchLayout;
