import TitleNeon from "@components/Layout/TitleNeon";
import ButtonNeon from "@components/Layout/ButtonNeon";
import {useState} from "react";

import ListOfGifs from "../ListOfGifs/ListOfGifs";

import {Search} from "./types";
import styles from "./SearchLayout.module.scss";
import ModalHistory from "./ModalHistory";
interface Props {
  searchs: Search[];
  masonry: boolean;
}

const SearchLayout: React.FC<Props> = ({searchs, masonry}) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className={styles.SearchLayout}>
      <header className={styles.header}>
        <TitleNeon color="#acffaf" tag="h2" title={searchs[0].keyword} />
        <ButtonNeon className={styles.buttonNeon} tag="button" onClick={() => setOpenModal(true)}>
          History
        </ButtonNeon>
      </header>
      <ListOfGifs gifs={searchs.flatMap((search) => search.gifs)} masonry={masonry} />
      <ModalHistory
        closeModal={() => setOpenModal(false)}
        history={searchs.flatMap((search) => search.keyword)}
        isOpen={openModal}
      />
    </div>
  );
};

export default SearchLayout;
