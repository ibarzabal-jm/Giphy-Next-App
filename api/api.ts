import {ApiResponse, Gif} from "../types/ApiResponse";

export const api = {
  getListGif: async (keyword: string, limit = 10): Promise<Gif[]> => {
    return await fetch(`https://api.giphy.com/v1/gifs/search?api_key=ePoEafBUZMXHRZ7n5TS0zC8ICn2wn0kC&q=${keyword}&limit=${limit}&offset=0&rating=g&lang=es
    `)
      .then((res) => res.json())
      .then((response: ApiResponse) => response.data);
  },
};
