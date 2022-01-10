import React from "react";

const NeonSeparateBar = ({color = "#03e9f4", height = "4px", barWidth = "250px"}) => {
  return (
    <div className="neon-separate-bar-container">
      <div className="neon-separate-bar" />
      <style jsx>
        {`
          .neon-separate-bar-container {
            position: relative;
            height: ${height};
            width: 100%;
            overflow: hidden;
          }
          .neon-separate-bar {
            width: ${barWidth};
            position: absolute;
            left: -50%;
            height: 100%;
            background: linear-gradient(90deg, transparent, ${color});
            animation: move 2s linear infinite;
          }
          @keyframes move {
            to {
              left: 100%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default NeonSeparateBar;
