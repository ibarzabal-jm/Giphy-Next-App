import React, {useEffect, useRef, useState} from "react";

import {useFetchGif} from "../../hooks/useFetchGifs";
import ListOfGifs from "../ListOfGifs/ListOfGifs";
import {useNearScreen} from "../../hooks/useNearScreen";

function Trending() {
  const {gifs, status} = useFetchGif({keyword: "trending", immediate: true});

  return <div>{status === "resolved" && <ListOfGifs gifs={gifs} keyword="Trending" />}</div>;
}

// TODO: REALIZAR LAZY LOADING
const LazyTrending = () => {
  const {isNearScreen, fromRef} = useNearScreen();

  return <div ref={fromRef}>{isNearScreen ? <Trending /> : "Loading..."}</div>;
};

export default LazyTrending;
