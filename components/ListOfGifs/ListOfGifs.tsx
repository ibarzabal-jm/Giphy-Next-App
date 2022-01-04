import Link from "next/link";
import Masonry from "react-masonry-css";
import TitleNeon from "@components/Layout/TitleNeon";

import {Gif} from "../../types/ApiResponse";
import GifCard from "../GifCard/GifCard";

import styles from "./ListGifs.module.scss";

interface Props {
  gifs: Gif[];
  keyword?: string;
  className?: string;
  style?: React.CSSProperties;
  masonry?: boolean;
}

const arrayBgGradient: Array<"red-blue" | "orange-red" | "blue-red" | "green-cyan"> = [
  "red-blue",
  "orange-red",
  "blue-red",
  "green-cyan",
];

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

const ListOfGifs: React.FC<Props> = ({keyword, gifs, className, style, masonry = true}) => {
  return (
    <div className={`${styles.container} ${className}`} style={style}>
      {keyword && (
        <Link href={`/search/${keyword}`}>
          <a className={styles.link}>
            <TitleNeon tag="h3" title={keyword} />
          </a>
        </Link>
      )}
      {masonry ? (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className={styles.masonry_grid}
          columnClassName={styles.masonry_grid_column}
        >
          {gifs.map((gif, index) => (
            <GifCard
              key={gif.id}
              color={arrayBgGradient[index % arrayBgGradient.length]}
              image={gif}
            />
          ))}
        </Masonry>
      ) : (
        <div className={styles.grid}>
          {gifs.map((gif, index) => (
            <GifCard
              key={gif.id}
              color={arrayBgGradient[index % arrayBgGradient.length]}
              height={masonry ? undefined : "300px"}
              image={gif}
              width={masonry ? undefined : "300px"}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ListOfGifs;
