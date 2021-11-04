import React from "react";
import Image from "next/image";

import {Gif} from "../types/ApiResponse";

interface Props {
  image: Gif;
}

const GifCard: React.FC<Props> = ({image}) => {
  return (
    <div className="card">
      <Image
        alt={image.title}
        height={image.images.downsized_medium.height}
        layout="responsive"
        src={image.images.downsized_medium.url}
        width={image.images.downsized_medium.width}
      />
    </div>
  );
};

export default GifCard;
