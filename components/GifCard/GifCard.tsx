import React from "react";
import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {faHeart as faRegHeart} from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";

import {Gif} from "../../types/ApiResponse";
import {useFavs} from "../../hooks/useFavs";

import {backgroundCardsColors} from "./types";
import styles from "./GifCard.module.scss";
import CheckSvg from "./CheckSvg";

interface Props {
  image: Gif;
  height?: string;
  width?: string;
  color?: backgroundCardsColors;
  priority?: boolean;
}

const shimmer = (w: string, h: string): string => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#111" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#111" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#111" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined" ? Buffer.from(str).toString("base64") : window.btoa(str);

const GifCard: React.FC<Props> = ({
  image,
  height: heightProp,
  width: widthProp,
  color = "orange-red-blue",
  priority = false,
}) => {
  const {
    title,
    images: {original: imageMain},
    user,
    id,
  } = image;

  const {isFavorite, toggleFav} = useFavs();

  return (
    <Link href={`/${id}`}>
      <a className={`${styles.card} ${styles[color]}`}>
        <div className={styles.main_image}>
          <button className={styles.favButton} onClick={() => toggleFav(image)}>
            {isFavorite(image) ? (
              <FontAwesomeIcon aria-label="Fav" color="#f00" icon={faHeart} size="lg" />
            ) : (
              <FontAwesomeIcon aria-label="NoFavorite" icon={faRegHeart} size="lg" />
            )}
          </button>
          <Image
            alt={title}
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(
                widthProp ? widthProp : imageMain.width,
                heightProp ? heightProp : imageMain.height,
              ),
            )}`}
            height={heightProp ? heightProp : imageMain.height}
            layout="responsive"
            objectFit="cover"
            placeholder="blur"
            priority={priority}
            src={imageMain.url}
            unoptimized={true}
            width={widthProp ? widthProp : imageMain.width}
          />
        </div>
        {user && (
          <div className={styles.user}>
            <div className={styles.userimage}>
              <Image alt={user.username} height={32} src={user?.avatar_url} width={32} />
            </div>
            <div className={styles.username}>
              <p>{user.display_name}</p>
              {user.is_verified && <CheckSvg />}
            </div>
          </div>
        )}
      </a>
    </Link>
  );
};

export default GifCard;
