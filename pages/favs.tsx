import type {NextPage, GetServerSideProps} from "next";
import NextHead from "@components/Layout/NextHead";
import ListOfGifs from "@components/ListOfGifs/ListOfGifs";
import {Gif} from "@customTypes/ApiResponse";
import TitleNeon from "@components/Layout/TitleNeon";

import {api} from "../api/api";

// get serverside props cookie
export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookie = context.req.headers.cookie;

  const cookieFav = cookie?.split(";").find((cookie) => cookie.includes("favs="));

  let arrayFavs: string[] = [];

  if (cookieFav) {
    arrayFavs = JSON.parse(cookieFav.split("=")[1]) || [];
  }

  const gifs = await Promise.all(arrayFavs.map((id) => api.getSingleGif(id)));

  return {
    props: {favsGifs: gifs || []},
  };
};

const FavPage: NextPage<{favsGifs: Gif[]}> = ({favsGifs}) => {
  return (
    <div>
      <NextHead title="My Favs" />
      <main className="container">
        <TitleNeon tag="h1" title="My Favourites Gifs" />
        <ListOfGifs masonry gifs={favsGifs} />
      </main>
    </div>
  );
};

export default FavPage;
