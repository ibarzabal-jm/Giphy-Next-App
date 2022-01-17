import React from "react";

interface Props {
  title: string;
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";
  color?: string;
  textTransform?: "uppercase" | "lowercase" | "capitalize" | "none";
  size?: string;
}

const TitleNeon: React.FC<Props> = ({
  title,
  tag,
  color = "#ff4444",
  textTransform = "capitalize",
  size = "5rem",
}) => {
  const Tag = tag as keyof JSX.IntrinsicElements;

  return (
    <Tag aria-label={title} className="title" role="heading">
      {title.split("").map((char, index) => (
        <span key={index} aria-hidden="false">
          {char}
        </span>
      ))}
      <style jsx>
        {`
          .title {
            text-transform: ${textTransform};
            text-align: center;
            color: #fee;
            font-family: "Yellowtail", cursive;
            font-weight: 400;
            font-size: ${size};
            user-select: none;
            text-shadow: 0 0 10px #fee, 0 0 30px ${color}, 0 10px 3px #000;
          }
          span:nth-child(2n) {
            animation: blink linear infinite 3s;
          }
          span:nth-child(4n) {
            animation: blink linear infinite 2s;
          }
          @keyframes blink {
            78% {
              color: inherit;
              text-shadow: inherit;
            }
            79% {
              color: #333;
            }
            80% {
              text-shadow: none;
            }
            81% {
              color: inherit;
              text-shadow: inherit;
            }
            82% {
              color: #333;
              text-shadow: none;
            }
            83% {
              color: inherit;
              text-shadow: inherit;
            }
            92% {
              color: #333;
              text-shadow: none;
            }
            92.2% {
              color: inherit;
              text-shadow: inherit;
            }
          }
        `}
      </style>
    </Tag>
  );
};

export default TitleNeon;
