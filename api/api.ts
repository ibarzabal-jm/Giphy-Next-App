import {ApiResponse, Gif} from "../types/ApiResponse";

const APIKEY = "ePoEafBUZMXHRZ7n5TS0zC8ICn2wn0kC";

export const api = {
  getListGif: async (keyword: string, limit = 10, offset = 0): Promise<Gif[]> => {
    return await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${keyword}&limit=${limit}&offset=${offset}&rating=g&lang=es
    `)
      .then((res) => res.json())
      .then((response: ApiResponse) => response.data);
  },

  getTrendingGif: async (limit = 10, offset = 0): Promise<Gif[]> => {
    return await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${APIKEY}&limit=${limit}&offset=${offset}&rating=g&lang=es
    `)
      .then((res) => res.json())
      .then((response: ApiResponse) => response.data);
  },

  getSingleGif: async (id: string): Promise<Gif> => {
    return await fetch(`https://api.giphy.com/v1/gifs/${id}?api_key=${APIKEY}&rating=g&lang=es
    `)
      .then((res) => res.json())
      .then((response: ApiResponse) => response.data[0]);
  },

  getRandomGif: async (): Promise<Gif> => {
    return await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${APIKEY}&rating=g&lang=es
    `)
      .then((res) => res.json())
      .then((response: ApiResponse) => response.data[0]);
  },

  getTredingTerms: async (): Promise<string[]> => {
    return await fetch(`https://api.giphy.com/v1/trending/searches?api_key=${APIKEY}&limit=12&rating=g&lang=es
    `)
      .then((res) => res.json())
      .then((response) => response.data);
  },
};
