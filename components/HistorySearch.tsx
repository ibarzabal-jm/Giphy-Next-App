import Link from "next/link";

interface Props {
  history: string[];
}

const HistorySearch: React.FC<Props> = ({history}) => {
  return (
    <div className="Busquedas">
      <h2>History</h2>
      <ul>
        {history.map((search) => (
          <li key={search}>
            <Link as={`/search/${search}`} href="/search/[keyword]">
              <a>{search}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistorySearch;
