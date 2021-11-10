import {Gif} from "./ApiResponse";

export interface StatusSearch {
  loading: boolean;
  gifs: Gif[];
  lastSearch: string | null;
  historySearch: string[];
}
