import React from "react";

import {Gif} from "../../types/ApiResponse";
import GifCard from "../GifCard";

import styles from "./ListGifs.module.scss";

interface Props {
  keyword: string | null;
  gifs: Gif[];
  className?: string;
  style?: React.CSSProperties;
}

const ListOfGifs: React.FC<Props> = ({keyword, gifs, className, style}) => {
  return (
    <div className={`${styles.container} ${className}`} style={style}>
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
