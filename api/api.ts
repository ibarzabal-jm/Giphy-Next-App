import {ApiResponse, Gif} from "../types/ApiResponse";

export const api = {
  getListGif: async (keyword: string, limit = 10, offset = 0): Promise<Gif[]> => {
    return await fetch(`https://api.giphy.com/v1/gifs/search?api_key=ePoEafBUZMXHRZ7n5TS0zC8ICn2wn0kC&q=${keyword}&limit=${limit}&offset=${offset}&rating=g&lang=es
    `)
      .then((res) => res.json())
      .then((response: ApiResponse) => response.data);
  },

  getTrendingGif: async (limit = 10, offset = 0): Promise<Gif[]> => {
    return await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=ePoEafBUZMXHRZ7n5TS0zC8ICn2wn0kC&limit=${limit}&offset=${offset}&rating=g&lang=es
    `)
      .then((res) => res.json())
      .then((response: ApiResponse) => response.data);
  },

  getSingleGif: async (id: string): Promise<Gif> => {
    return await fetch(`https://api.giphy.com/v1/gifs/${id}?api_key=ePoEafBUZMXHRZ7n5TS0zC8ICn2wn0kC&rating=g&lang=es
    `)
      .then((res) => res.json())
      .then((response: ApiResponse) => response.data[0]);
  },

  getRandomGif: async (): Promise<Gif> => {
    return await fetch(`https://api.giphy.com/v1/gifs/random?api_key=ePoEafBUZMXHRZ7n5TS0zC8ICn2wn0kC&rating=g&lang=es
    `)
      .then((res) => res.json())
      .then((response: ApiResponse) => response.data[0]);
  },
};
