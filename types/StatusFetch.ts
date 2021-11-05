import {Gif} from "./ApiResponse";

export interface StatusFetch {
  loading: boolean;
  gifs: Gif[];
  keyword: string | null;
}
