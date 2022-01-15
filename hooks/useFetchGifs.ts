import {useCallback, useEffect, useState} from "react";

import {api} from "../api/api";
import {Gif} from "../types/ApiResponse";

interface useFetchGifsArgs {
  keyword: string;
  immediate?: boolean;
  limit?: number;
}

export const useFetchGif = ({keyword, immediate = true, limit = 12}: useFetchGifsArgs) => {
  const [status, setStatus] = useState<"idle" | "pending" | "resolved" | "rejected">("idle");
  const [isEnd, setIsEnd] = useState<boolean>(false);
  const [gifs, setGifs] = useState<Gif[] | null>(null);
  const [page, setPage] = useState<number>(0);

  const nextPage = useCallback(() => {
    setPage((prev) => prev + 1);
  }, []);

  const execute = useCallback((keyword: string, limit = 12, offset = 0) => {
    setStatus("pending");

    return api.getListGif(keyword, limit, offset).then(
      (data) => {
        setGifs(data);
        setStatus("resolved");
        data.length < limit && setIsEnd(true);
      },
      (error) => {
        setStatus("rejected");
        alert(error);
      },
    );
  }, []);

  useEffect(() => {
    if (immediate || page > 0) {
      execute(keyword, limit, limit * page);
    }
  }, [execute, immediate, keyword, limit, page]);

  return {status, gifs, execute, nextPage, isEnd};
};
