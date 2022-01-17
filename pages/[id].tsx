import {GetServerSideProps, NextPage} from "next/types";
import NextHead from "@components/Layout/NextHead";
import TitleNeon from "@components/Layout/TitleNeon";
import {api} from "api/api";
import Image from "next/image";

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
  const {id, images, title, username} = gif;

  return (
    <div>
      <NextHead title={title} />
      <aside>
        {gif.source}
        {gif.source_post_url}
        {gif.user?.avatar_url}
      </aside>
      <main className="container">
        <TitleNeon color="#ffaaff" tag="h1" title={title} />
        <Image
          unoptimized
          alt={title}
          height={images.original.height}
          src={images.original.webp}
          width={images.original.width}
        />
      </main>
    </div>
  );
};

export default GifLandingPage;
