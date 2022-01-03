import React from "react";

interface Props {
  title: string;
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  color?: string;
}

const TitleNeon: React.FC<Props> = ({title, tag, color = "#ff4444"}) => {
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
            text-transform: capitalize;
            text-align: center;
            margin: 0 0 12px;
            font-weight: 800;
            font-size: 24px;
            color: #fee;
            user-select: none;
            font: 400 8vh "Yellowtail";
            text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em ${color}, 0 0 0.5em ${color},
              0 0 0.1em ${color}, 0 10px 3px #000;
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
