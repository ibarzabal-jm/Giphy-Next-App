import {useCallback, useEffect, useState} from "react";

import {api} from "../api/api";
import {Gif} from "../types/ApiResponse";

interface useFetchGifsArgs {
  keyword: string;
  immediate?: boolean;
  limit?: number;
}

export const useFetchGif = ({keyword, immediate = true, limit = 10}: useFetchGifsArgs) => {
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
