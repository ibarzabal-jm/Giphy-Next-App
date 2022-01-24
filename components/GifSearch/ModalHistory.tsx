import Link from "next/link";
import React from "react";

const ModalHistory = ({history, open}: {history: string[]; open: boolean}) => {
  return (
    <div className="neon-modal">
      <div className="modal-container">
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
          .neon-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 4;
            display: ${open ? "flex" : "none"};
          }
          .modal-container {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: #fff;
            border-radius: 5px;
            padding: 20px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
          }
          .modal-title {
            font-size: 1.5rem;
            font-weight: bold;
            margin-bottom: 20px;
          }
          .modal-list {
            list-style: none;
            padding: 0;
            margin: 0;
          }
          .modal-links {
            text-decoration: none;
            color: #000;
            font-size: 1.2rem;
            font-weight: bold;
            padding: 10px;
            margin: 0;
          }
          .modal-links:hover {
            background-color: #f5f5f5;
          }
        `}
      </style>
    </div>
  );
};

export default ModalHistory;
