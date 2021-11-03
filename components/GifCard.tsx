import React from "react";
import Image from "next/image";

import {Gif} from "../types/ApiResponse";

interface Props {
  image: Gif;
}

const GifCard: React.FC<Props> = ({image}) => {
  return (
    <div className="card">
      <p>{image.title}</p>
      <Image
        alt={image.title}
        height={image.images.downsized_large.height}
        src={image.images.downsized_large.url}
        width={image.images.downsized_large.width}
      />
    </div>
  );
};

export default GifCard;
