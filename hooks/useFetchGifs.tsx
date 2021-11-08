import {useCallback, useEffect, useRef, useState} from "react";

import {api} from "../api/api";
import {Gif} from "../types/ApiResponse";

export const useFetchGif = (keyword: string, immediate = true, limit = 10) => {
  const isMounted = useRef(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [gifs, setGifs] = useState<Gif[]>([]);

  const execute = useCallback(() => {
    setLoading(true);
    console.log(keyword);

    return api
      .getListGif(keyword, limit)
      .then((arrayGif) => isMounted.current && (setGifs(arrayGif), setLoading(false)));
  }, [limit, keyword]);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate, keyword]);

  return {loading, gifs, execute};
};
