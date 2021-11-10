import {useCallback, useEffect, useState} from "react";

import {api} from "../api/api";
import {Gif} from "../types/ApiResponse";

export const useFetchGif = (keyword: string, immediate = true, limit = 10) => {
  const [status, setStatus] = useState<"idle" | "pending" | "resolved" | "rejected">("idle");
  const [gifs, setGifs] = useState<Gif[]>([]);

  const execute = useCallback((keyword: string, limit = 10) => {
    setStatus("pending");

    return api.getListGif(keyword, limit).then(
      (data) => {
        setGifs(data);
        setStatus("resolved");
      },
      (error) => {
        console.log(error);
        setStatus("rejected");
      },
    );
  }, []);

  useEffect(() => {
    if (immediate) {
      execute(keyword, limit);
    }
  }, [execute, immediate, keyword, limit]);

  return {status, gifs, execute};
};
