import React from "react";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import TitleNeon from "@components/Layout/TitleNeon";

import useOutside from "../../hooks/useOutside";

const ModalHistory = ({
  history,
  isOpen,
  closeModal,
}: {
  history: string[];
  isOpen: boolean;
  closeModal: () => void;
}) => {
  const domeNode = useOutside(closeModal);

  return (
    <div className="modal-background">
      <div ref={domeNode} className="modal-container">
        <button className="closemodal" onClick={closeModal}>
          <FontAwesomeIcon color="#bc13fe" icon={faTimesCircle} />
        </button>
        <div className="modal-header">
          <TitleNeon color="#00d0ff" tag="h2" title="history" />
        </div>
        <ul className="modal-list">
          {history.map((search) => (
            <li key={search}>
              <Link as={`/search/${search}`} href="/search/[keyword]">
                <a className="modal-links">
                  <TitleNeon align="left" size="3rem" tag="h3" title={search} />
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <style jsx>
        {`
          .modal-background {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 4;
            display: ${isOpen ? "flex" : "none"};
          }
          .modal-container {
            border: 0.2rem solid #fff;
            border-radius: 2rem;
            padding: 0.4em;
            box-shadow: 0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem #bc13fe, 0 0 0.8rem #bc13fe,
              0 0 2.8rem #bc13fe, inset 0 0 1.3rem #bc13fe;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 5px;
            padding: 48px;
            width: 520px;
            background-color: #04293a;
            animation: fadein 0.5s, pulsate 1.5s infinite;
          }
          .closemodal {
            position: absolute;
            top: 2%;
            right: 2%;
            border: none;
            background-color: transparent;
            color: #fff;
            font-size: 1.5rem;
            font-weight: bold;
            cursor: pointer;
          }
          .modal-header {
            margin-bottom: 48px;
          }
          .modal-list {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 6px;
            width: 100%;
          }
          .modal-container:hover {
            animation-play-state: paused;
          }
          @keyframes fadein {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          @keyframes pulsate {
            0% {
              box-shadow: 0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem #bc13fe, 0 0 0.8rem #bc13fe,
                0 0 2.8rem #bc13fe, inset 0 0 1.3rem #bc13fe;
            }
            50% {
              box-shadow: 0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem #bc13fe, 0 0 0.8rem #bc13fe;
            }
            100% {
              box-shadow: 0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem #bc13fe, 0 0 0.8rem #bc13fe,
                0 0 2.8rem #bc13fe, inset 0 0 1.3rem #bc13fe;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ModalHistory;
