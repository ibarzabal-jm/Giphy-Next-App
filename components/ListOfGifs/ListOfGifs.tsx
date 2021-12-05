import React from "react";

import {Gif} from "../../types/ApiResponse";
import GifCard from "../GifCard/GifCard";

import styles from "./ListGifs.module.scss";

interface Props {
  gifs: Gif[];
  keyword?: string;
  className?: string;
  style?: React.CSSProperties;
  masonry: boolean;
}

const ListOfGifs: React.FC<Props> = ({keyword, gifs, className, style, masonry = true}) => {
  return (
    <div className={`${styles.container} ${className}`} style={style}>
      {keyword && <h3 className={styles.title}>{keyword}</h3>}
      <div className={masonry ? styles.masonry : styles.grid}>
        {gifs.map((gif) => (
          <GifCard
            key={gif.id}
            height={masonry ? undefined : "400px"}
            image={gif}
            width={masonry ? undefined : "400px"}
          />
        ))}
      </div>
    </div>
  );
};

export default ListOfGifs;
