import type {NextPage} from "next";
import Head from "next/head";
import {useState} from "react";

import ListOfGifs from "../components/ListOfGifs";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(keyword);
  };
  const handleChange = ({target}: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(target.value);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Giphy By Juanma</title>
        <meta content="App Giphy creado por Juan Manuel Ibarzabal" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main>
        <h1>Giphy Next App</h1>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Searching Gif..."
            type="text"
            value={keyword}
            onChange={handleChange}
          />
          <button type="submit">Buscar</button>
        </form>
      </main>
    </div>
  );
};

export default Home;
