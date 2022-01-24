import Link from "next/link";
import React from "react";

const ModalHistory = ({
  history,
  isOpen,
  closeModal,
}: {
  history: string[];
  isOpen: boolean;
  closeModal: () => void;
}) => {
  return (
    <div className="modal-background">
      <div className="modal-container">
        <button className="closemodal" onClick={closeModal}>
          X
        </button>
        <h2 className="modal-title">History</h2>
        <ul className="modal-list">
          {history.map((search) => (
            <li key={search}>
              <Link as={`/search/${search}`} href="/search/[keyword]">
                <a className="modal-links">{search}</a>
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
            padding: 20px;
            background-color: #04293a;
            height: calc(100% - 40px);
          }
          .closemodal {
            position: absolute;
            top: 0;
            right: 0;
            border: none;
            background-color: transparent;
            color: #fff;
            font-size: 1.5rem;
            font-weight: bold;
            cursor: pointer;
          }
          .modal-title {
            font-size: 1.5rem;
            font-weight: bold;
            color: #fff;
            text-align: center;
          }
          .modal-list {
            list-style: none;
            padding: 0;
            margin: 0;
          }
          .modal-links {
            color: #fff;
            text-decoration: none;
            font-size: 1.2rem;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 2px;
            transition: 0.5s;
            -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
          }
          .modal-links:hover,
          .modal-links:focus,
          .modal-links:active {
            background: #bc13fe;
            color: #050801;
            box-shadow: 0 0 5px #bc13fe, 0 0 25px #bc13fe, 0 0 50px #bc13fe, 0 0 200px #bc13fe;
          }
          @keyframes animate1 {
            0% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-100px);
            }
            100% {
              transform: translateY(0);
            }
          }
          @keyframes animate2 {
            0% {
              transform: translateX(0);
            }

            50% {
              transform: translateX(-100px);
            }

            100% {
              transform: translateX(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default ModalHistory;
