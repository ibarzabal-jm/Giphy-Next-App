import React, {RefObject} from "react";

interface Props {
  tag: "a" | "button";
  children: React.ReactNode;
  className?: string;
  color?: string;
  onClick?: () => void;
  href?: string;
}

const ButtonNeon = React.forwardRef<HTMLAnchorElement | HTMLButtonElement, Props>(
  ({tag, children, className, color = "#03e9f4", onClick, href, ...props}, ref) => {
    const Tag = tag as "a" | "button";

    return (
      <Tag
        ref={ref as any}
        className={`neonButton ${className}`}
        href={href}
        onClick={onClick}
        {...props}
      >
        <span />
        <span />
        <span />
        <span />
        {children}
        <style jsx>
          {`
            .neonButton {
              position: relative;
              display: inline-block;
              padding: 8px;
              cursor: pointer;
              color: ${color};
              border: none;
              background: none;
              font-size: 12px;
              text-decoration: none;
              text-transform: uppercase;
              overflow: hidden;
              transition: 0.5s;
              letter-spacing: 2px;
              -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
            }
            .neonButton:hover,
            .neonButton:focus,
            .neonButton:active {
              background: ${color};
              color: #050801;
              box-shadow: 0 0 5px ${color}, 0 0 25px ${color}, 0 0 50px ${color}, 0 0 200px ${color};
            }
            span {
              position: absolute;
              display: block;
            }
            span:nth-child(1) {
              top: 0;
              left: 0;
              width: 100%;
              height: 2px;
              background: linear-gradient(90deg, transparent, ${color});
              animation: animate1 1s linear infinite;
            }

            span:nth-child(2) {
              top: -100px;
              right: 0;
              width: 2px;
              height: 100%;
              background: linear-gradient(180deg, transparent, ${color});
              animation: animate2 1s linear infinite;
              animation-delay: 0.25s;
            }

            span:nth-child(3) {
              bottom: 0;
              right: -100%;
              width: 100%;
              height: 2px;
              background: linear-gradient(270deg, transparent, ${color});
              animation: animate3 1s linear infinite;
              animation-delay: 0.5s;
            }

            span:nth-child(4) {
              bottom: -100%;
              left: 0;
              width: 2px;
              height: 100%;
              background: linear-gradient(360deg, transparent, ${color});
              animation: animate4 1s linear infinite;
              animation-delay: 0.75s;
            }

            @keyframes animate1 {
              0% {
                left: -100%;
              }
              50%,
              100% {
                left: 100%;
              }
            }

            @keyframes animate2 {
              0% {
                top: -100%;
              }
              50%,
              100% {
                top: 100%;
              }
            }

            @keyframes animate3 {
              0% {
                right: -100%;
              }
              50%,
              100% {
                right: 100%;
              }
            }

            @keyframes animate4 {
              0% {
                bottom: -100%;
              }
              50%,
              100% {
                bottom: 100%;
              }
            }
          `}
        </style>
      </Tag>
    );
  },
);

ButtonNeon.displayName = "ButtonNeon";

export default ButtonNeon;
