import React from "react";
import {GetServerSideProps, NextPage} from "next";

import ListOfGifs from "../components/ListOfGifs";
import {api} from "../api/api";
import {Gif} from "../types/ApiResponse";

export const getServerSideProps: GetServerSideProps = async ({params}) => {
  const keyword = params?.id as string;
  const gifs = await api.getListGif(keyword, 10);

  return {
    props: {keyword, gifs},
  };
};

interface Props {
  gifs: Gif[];
  keyword: string;
}

const LandingList: NextPage<Props> = ({gifs, keyword}) => {
  return <ListOfGifs gifs={gifs} keyword={keyword} />;
};

export default LandingList;
