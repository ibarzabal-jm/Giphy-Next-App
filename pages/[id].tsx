import NextHead from "@components/Layout/NextHead";
import {api} from "api/api";
import {GetServerSideProps, NextPage} from "next/types";

import {Gif} from "../types/ApiResponse";

export const getServerSideProps: GetServerSideProps = async ({params}) => {
  const id = params?.id as string;
  const gif = await api.getSingleGif(id);

  // redirect to 404 if gif not found
  if (!gif.id) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }

  return {
    props: {
      gif,
    },
  };
};

const GifLandingPage: NextPage<{gif: Gif}> = ({gif}) => {
  const {id, images, title, username, bitly_gif_url} = gif;

  return (
    <div>
      <NextHead title={title} />
      <main className="container">{title}</main>
    </div>
  );
};

export default GifLandingPage;
