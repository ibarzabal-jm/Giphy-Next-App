import React from "react";
import Image from "next/image";

import {Gif} from "../../types/ApiResponse";

import styles from "./GifCard.module.scss";
import {backgroundCardsColors} from "./types";

interface Props {
  image: Gif;
  height?: string;
  width?: string;
  color?: backgroundCardsColors;
}

const GifCard: React.FC<Props> = ({image, height, width, color = "orange-red-blue"}) => {
  return (
    <div className={`${styles.card} ${styles[color]}`}>
      <div className={styles.main_image}>
        <Image
          alt={image.title}
          height={height ? height : image.images.downsized_medium.height}
          layout="responsive"
          objectFit="cover"
          src={image.images.downsized_medium.url}
          width={width ? width : image.images.downsized_medium.width}
        />
      </div>
      {image.user && (
        <div className={styles.user}>
          <div className={styles.userimage}>
            <Image alt={image.user.username} height={32} src={image.user?.avatar_url} width={32} />
          </div>
          <div className={styles.username}>
            <p>{image.user?.display_name}</p>
            <svg
              className="giphy-verified-badge css-1cps2xv"
              height="14px"
              viewBox="0 0 19 17"
              width="19px"
            >
              <path
                className="giphy-verified-checkmark"
                d="M9.32727273,9.44126709 L9.32727273,3.03016561 L6.55027155,3.03016561 L6.55027155,10.8150746 L6.55027155,12.188882 L12.1042739,12.188882 L12.1042739,9.44126709 L9.32727273,9.44126709 Z"
                fill="#15CDFF"
                transform="translate(9.327273, 7.609524) scale(-1, 1) rotate(-45.000000) translate(-9.327273, -7.609524) "
              />
              <g fill="white" transform="translate(-532.000000, -466.000000)">
                <g transform="translate(141.000000, 235.000000)">
                  <g transform="translate(264.000000, 0.000000)">
                    <g transform="translate(10.000000, 224.000000)">
                      <g transform="translate(114.000000, 2.500000)">
                        <path d="M15.112432,4.80769231 L16.8814194,6.87556817 L19.4157673,7.90116318 L19.6184416,10.6028916 L21.0594951,12.9065042 L19.6184416,15.2101168 L19.4157673,17.9118452 L16.8814194,18.9374402 L15.112432,21.0053161 L12.4528245,20.3611511 L9.79321699,21.0053161 L8.02422954,18.9374402 L5.48988167,17.9118452 L5.28720734,15.2101168 L3.84615385,12.9065042 L5.28720734,10.6028916 L5.48988167,7.90116318 L8.02422954,6.87556817 L9.79321699,4.80769231 L12.4528245,5.4518573 L15.112432,4.80769231 Z M17.8163503,10.8991009 L15.9282384,9.01098901 L11.5681538,13.3696923 L9.68115218,11.4818515 L7.81302031,13.3499833 L9.7011322,15.2380952 L11.5892441,17.1262071 L17.8163503,10.8991009 Z" />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default GifCard;
