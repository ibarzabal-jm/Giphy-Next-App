import {useCallback, useEffect, useState} from "react";

import {api} from "../api/api";
import {Gif} from "../types/ApiResponse";

export const useFetchGif = (keyword: string, immediate = true, limit = 10) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [gifs, setGifs] = useState<Gif[]>([]);

  const execute = useCallback(async (keyword: string, limit = 10) => {
    setLoading(true);
    console.log("holaa");

    const arrayGif = await api.getListGif(keyword, limit);

    setGifs(arrayGif);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (immediate) {
      execute(keyword, limit);
    }
  }, [execute, immediate, keyword, limit]);

  return {loading, gifs, execute};
};
