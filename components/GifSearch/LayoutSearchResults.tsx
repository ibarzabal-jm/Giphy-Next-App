import Link from "next/link";
import React, {useState} from "react";

import ListOfGifs from "../ListOfGifs/ListOfGifs";

import {Search} from "./types";

interface Props {
  searchs: Search[];
  separate: boolean;
  masonry: boolean;
}

const LayoutSearchResults: React.FC<Props> = ({searchs, masonry, separate = true}) => {
  return (
    <div className="Busquedas">
      {separate ? (
        searchs.map((search) => (
          <div key={search.keyword}>
            <ListOfGifs gifs={search.gifs} keyword={search.keyword} masonry={masonry} />
            <Link href={`/search/${search.keyword}`}>
              <a>Ver más de {search.keyword}</a>
            </Link>
          </div>
        ))
      ) : (
        <div>
          <ListOfGifs
            gifs={searchs.flatMap((search) => search.gifs)}
            keyword={searchs[0].keyword}
            masonry={masonry}
          />
        </div>
      )}
    </div>
  );
};

export default LayoutSearchResults;
