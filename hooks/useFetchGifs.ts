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
  const [page, setPage] = useState<number>(0);

  const nextPage = () => {
    setPage((prev) => prev + 1);
  };

  const execute = useCallback((keyword: string, limit = 10, offset = 0) => {
    setStatus("pending");

    return api.getListGif(keyword, limit, offset).then(
      (data) => {
        setGifs(data);
        setStatus("resolved");
      },
      (error) => {
        setStatus("rejected");
        console.log(error);
      },
    );
  }, []);

  useEffect(() => {
    if (immediate) {
      execute(keyword, limit, limit * page);
    }
  }, [execute, immediate, keyword, limit, page]);

  return {status, gifs, execute, nextPage};
};
