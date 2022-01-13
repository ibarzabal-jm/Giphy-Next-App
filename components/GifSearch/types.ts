import {Gif} from "../../types/ApiResponse";

export interface Search {
  gifs: Gif[];
  keyword: string;
  date?: Date;
}
