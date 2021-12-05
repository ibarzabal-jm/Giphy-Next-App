import React from "react";
import Image from "next/image";

import {Gif} from "../../types/ApiResponse";

import styles from "./GifCard.module.scss";

interface Props {
  image: Gif;
  height?: string;
  width?: string;
}

const GifCard: React.FC<Props> = ({image, height, width}) => {
  return (
    <div className={styles.card}>
      <Image
        alt={image.title}
        height={height ? height : image.images.downsized_medium.height}
        layout="responsive"
        objectFit="cover"
        src={image.images.downsized_medium.url}
        width={width ? width : image.images.downsized_medium.width}
      />
    </div>
  );
};

export default GifCard;
