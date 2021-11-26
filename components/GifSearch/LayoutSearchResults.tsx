import React from "react";

import ListOfGifs from "../ListOfGifs/ListOfGifs";

import {Search} from "./types";

interface Props {
  searchs: Search[];
  separate: boolean;
}

const LayoutSearchResults: React.FC<Props> = ({searchs, separate = true}) => {
  return (
    <div className="Busquedas">
      {separate ? (
        searchs.map((search) => (
          <ListOfGifs key={search.keyword} gifs={search.gifs} keyword={search.keyword} />
        ))
      ) : (
        <ListOfGifs gifs={searchs.flatMap((search) => search.gifs)} keyword={searchs[0].keyword} />
      )}
    </div>
  );
};

export default LayoutSearchResults;
