import React, {useState, createContext, useEffect} from "react";

import {Gif} from "../types/ApiResponse";

export interface Context {
  state: {
    favIds: string[];
  };
  actions: {
    toggleFav: (gif: Gif) => void;
    isFavorite: (gif: Gif) => boolean;
  };
}

const FavContext = createContext<Context>({} as Context);

const FavProvider: React.FC = ({children}) => {
  const [favs, setFavs] = useState<string[]>([]);

  const toggleFav = (gif: Gif) => {
    const gifInFav = favs.find((fav) => fav === gif.id);

    gifInFav ? setFavs(favs.filter((fav) => fav !== gif.id)) : setFavs([...favs, gif.id]);
  };

  const isFavorite = (gif: Gif) => favs.includes(gif.id);

  useEffect(() => {
    const favsCookie = document.cookie.split(";").find((cookie) => cookie.includes("favs="));

    if (favsCookie) {
      const favs = JSON.parse(favsCookie.split("=")[1]);

      setFavs(favs);
    }
  }, []);

  // save cookie with array of favs
  useEffect(() => {
    document.cookie = `favs=${JSON.stringify(favs)}; max-age=31536000`;
  }, [favs]);

  const state: Context["state"] = {
    favIds: favs,
  };

  const actions: Context["actions"] = {
    toggleFav,
    isFavorite,
  };

  return <FavContext.Provider value={{state, actions}}>{children}</FavContext.Provider>;
};

export {FavProvider, FavContext};
