import React, {useEffect, useRef, useState} from "react";

import {useFetchGif} from "../../hooks/useFetchGifs";
import ListOfGifs from "../ListOfGifs/ListOfGifs";

function Trending() {
  const {gifs, status} = useFetchGif({keyword: "trending", immediate: true});

  return <div>{status === "resolved" && <ListOfGifs gifs={gifs} keyword="Trending" />}</div>;
}

// TODO: REALIZAR LAZY LOADING
const LazyTrending = () => {
  const [show, setShow] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onChange = (entries: IntersectionObserverEntry[]) => {
      const el = entries[0];

      if (el.isIntersecting) {
        setShow(true);
      }
    };
    const observer = new IntersectionObserver(onChange, {rootMargin: "100px"});

    observer.observe(elementRef.current!);
  }, []);

  return <div ref={elementRef}>{show ? <Trending /> : null}</div>;
};

export default LazyTrending;
