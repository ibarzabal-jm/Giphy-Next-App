import {GetServerSideProps, NextPage} from "next/types";
import NextHead from "@components/Layout/NextHead";
import TitleNeon from "@components/Layout/TitleNeon";
import {api} from "api/api";
import Image from "next/image";
import ListOfGifs from "@components/ListOfGifs/ListOfGifs";

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

  const [relatedGifs, suggestions] = await Promise.allSettled([
    api.getRelatedGifs(gif.id),
    api.getSearchSuggestions(gif.title),
  ]);

  return {
    props: {
      gif,
      relatedGifs: relatedGifs.status === "fulfilled" ? relatedGifs.value : [],
      suggestions: suggestions.status === "fulfilled" ? suggestions.value : [],
    },
  };
};

const GifLandingPage: NextPage<{
  gif: Gif;
  relatedGifs: Gif[];
  suggestions: string[];
}> = ({gif, relatedGifs, suggestions}) => {
  const {images, title, user} = gif;

  return (
    <div>
      <NextHead title={title} />
      <div className="container">
        <aside>
          {user ? (
            <a className="user" href={user.profile_url}>
              <Image alt={user.username} height={50} src={user.avatar_url} width={50} />
              <div>
                @{user.username}
                {user.is_verified && "verificado"}
              </div>
              <div>{user.description}</div>
            </a>
          ) : null}
          <div>
            <p>{gif.source_post_url}</p>
            <p>Rating: {gif.rating}</p>
            <p>Source:{gif.source}</p>
            <p>Imported at : {gif.import_datetime}</p>
          </div>
        </aside>

        <main>
          <div>
            <TitleNeon color="#ffaaff" size="48px" tag="h1" textTransform="none" title={title} />
            <Image
              unoptimized
              alt={title}
              height={images.original.height}
              src={images.original.webp}
              width={images.original.width}
            />
          </div>
          <div className="suggestions">
            {suggestions.map((suggest) => (
              <a key={suggest} href={`/search/${suggest}`}>
                #{suggest}
              </a>
            ))}
          </div>
          <div>
            <TitleNeon size="32px" tag="h3" title="Related Gif" />
            <ListOfGifs gifs={relatedGifs} masonry={false} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default GifLandingPage;
