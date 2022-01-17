import {useContext} from "react";
import {FavContext} from "context/FavContext";

export function useFavs() {
  const {
    state: {favIds: favs},
    actions: {toggleFav, isFavorite},
  } = useContext(FavContext);

  return {favs, isFavorite, toggleFav};
}
