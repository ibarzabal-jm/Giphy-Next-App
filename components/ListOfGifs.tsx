import React, {useEffect} from "react";

import {Gif} from "../types/ApiResponse";
import styles from "../styles/ListGifs.module.scss";

import GifCard from "./GifCard";

interface Props {
  keyword: string | null;
  gifs: Gif[];
}

const ListOfGifs: React.FC<Props> = ({keyword, gifs}) => {
  return (
    <div className={styles.container}>
      {keyword && <h3 className={styles.title}>{keyword}</h3>}
      <div className={styles.list}>
        {gifs.map((gif) => (
          <GifCard key={gif.id} image={gif} />
        ))}
      </div>
    </div>
  );
};

export default ListOfGifs;
