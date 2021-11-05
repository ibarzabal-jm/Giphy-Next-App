import {useEffect, useState} from "react";

import {api} from "../api/api";
import {Gif} from "../types/ApiResponse";

export const useFetchGif = (keyword: string | number, limit = 10) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [gifs, setGifs] = useState<Gif[]>([]);

  useEffect(() => {
    let mounted = true;

    setLoading(true);
    api.getListGif(keyword, limit).then((arrayGif) => mounted && setGifs(arrayGif));

    return () => {
      mounted = false;
    };
  }, [keyword, limit]);

  return {loading, gifs};
};
