import NextHead from "@components/Layout/NextHead";
import TitleNeon from "@components/Layout/TitleNeon";

const Custom404 = () => {
  return (
    <div className="Container404">
      <NextHead title="404" />
      <TitleNeon color="#0fa" tag="h1" title="404" />
      <TitleNeon color="#0fa" tag="h2" textTransform="none" title="Page not Found" />
      <style jsx>{`
        .Container404 {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
        }
        .Container404 h1 {
          font-size: 5rem;
          margin: 0;
        }
        .Container404 h2 {
          font-size: 2rem;
          margin: 0;
          text-transform: none;
        }
      `}</style>
    </div>
  );
};

export default Custom404;
