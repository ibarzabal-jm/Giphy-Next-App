import Loading from "@components/Loading/Loading";
import Link from "next/link";

interface Props {
  trendingTerms: string[];
}

const TrendingTerms: React.FC<Props> = ({trendingTerms}) => {
  const colorBackground: Array<string> = [
    "#ffff00",
    "#76ff03",
    "#f06292",
    "#4fc3f7",
    "#ba68c8",
    "#f57c00",
    "#673ab7",
  ];

  return (
    <ul className="trending-list">
      {trendingTerms.map((term, index) => {
        return (
          <Trending key={term} color={colorBackground[index % colorBackground.length]}>
            <li>
              <Link href={`/search/${term}`}>
                <a>{term}</a>
              </Link>
            </li>
          </Trending>
        );
      })}
      <style jsx>{`
        .trending-list {
          list-style: none;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 12px;
          grid-auto-rows: 1fr;
        }
      `}</style>
    </ul>
  );
};

export default TrendingTerms;

const Trending: React.FC<{color: string}> = ({color, children}) => {
  return (
    <div className="trending-item">
      {children}
      <style jsx>
        {`
          .trending-item {
            display: grid;
            place-items: center;
            text-align: center;
            box-sizing: border-box;
            font-weight: bold;
            padding: 4px;
            background: ${color};
          }
          .trending-item:hover {
            background: #f5f5f5;
          }
        `}
      </style>
    </div>
  );
};
