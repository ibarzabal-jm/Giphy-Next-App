import React, {useState} from "react";

interface Props {
  onSubmit: (keyword: string, limit: number) => void;
}

const SearchForm: React.FC<Props> = ({onSubmit}) => {
  const [keyword, setKeyword] = useState<string>("");
  const [limit, setLimit] = useState<number>(10);

  const handleSetKeyword = ({target}: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(target.value);
  };

  const handleLimitChange = ({target}: React.ChangeEvent<HTMLInputElement>) => {
    setLimit(Math.max(1, parseInt(target.value) || 0));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (keyword === "") return;
    onSubmit(keyword, limit);
    setKeyword("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Searching Gif..."
        type="text"
        value={keyword}
        onChange={handleSetKeyword}
      />
      <input min={1} type="number" value={limit} onChange={handleLimitChange} />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default SearchForm;
