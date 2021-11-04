import React, {useEffect} from "react";

import {Gif} from "../types/ApiResponse";

import GifCard from "./GifCard";

interface Props {
  keyword: string;
  gifs: Gif[];
}

const ListOfGifs: React.FC<Props> = ({keyword, gifs}) => {
  return (
    <div>
      <h3>{keyword}</h3>
      <div className="list">
        {gifs.map((gif) => (
          <GifCard key={gif.id} image={gif} />
        ))}
      </div>
    </div>
  );
};

export default ListOfGifs;
