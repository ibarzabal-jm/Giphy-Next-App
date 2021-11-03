import React, {useEffect, useState} from "react";

import {api} from "../api/api";
import {Gif} from "../types/ApiResponse";

import GifCard from "./GifCard";

interface Props {
  keyword: string;
}

const ListOfGifs: React.FC<Props> = ({keyword}) => {
  const [gifs, setGifs] = useState<Gif[] | []>([]);

  useEffect(() => {
    api.getListGif(keyword).then((gifs) => setGifs(gifs));
  }, [keyword]);

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
