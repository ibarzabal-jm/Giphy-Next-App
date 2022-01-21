import Head from "next/head";

interface Props {
  title: string;
  image?: string;
  desc?: string;
  url?: string;
}

const NextHead: React.FC<Props> = ({
  title,
  image = "/giphyDemo.png",
  url = "https://juanma-neongiphy.vercel.app/",
  desc = "Giphy Neon App created with Next.js and TypeScript with love by @ibarzabal-jm (Juan Manuel Ibarzabal Salles) .",
}) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />

      <title>{title} - Juanma NeonGiphy</title>
      <meta content={desc} name="description" />
      <meta content="Juan Manuel Ibarzabal Salles" name="author" />
      <link href="/piojito.ico" rel="icon" />
      <link href="/piojito.ico" rel="apple-touch-icon" />

      {/* !-- Open Graph / Facebook --> */}
      <meta content="website" property="og:type" />
      <meta content={url} property="og:url" />
      <meta content={title} property="og:title" />
      <meta content={desc} property="og:description" />
      <meta content={image} property="og:image" />

      {/* <!-- Twitter card ojo--> */}
      <meta content="summary_large_image" name="twitter:card" />
      <meta content="Juanma PokedexApp" name="twitter:title" />
      <meta content={url} name="twitter:url" />
      <meta content={desc} name="twitter:description" />
      <meta content="@JuanmaPiojoso" name="twitter:creator" />
      <meta content={`https://juanma-neongiphy.vercel.app/${image}`} name="twitter:image:src" />
    </Head>
  );
};

export default NextHead;
