import React, {useState} from "react";

interface Props {
  onSubmit: (keyword: string, limit: number) => void;
  classSearch?: string;
  classForm?: string;
  classLimit?: string;
  classButtonSearch?: string;
}

const SearchForm: React.FC<Props> = ({onSubmit, ...props}) => {
  const [keyword, setKeyword] = useState<string>("");
  const [limit, setLimit] = useState<number>(10);

  const handleSetKeyword = ({target}: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(target.value);
  };

  const handleLimitChange = ({target}: React.ChangeEvent<HTMLInputElement>) => {
    let value = Math.min(parseInt(target.value) || 0, 50);

    setLimit(Math.max(1, value));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (keyword === "") return;
    onSubmit(keyword, limit);
    setKeyword("");
  };

  return (
    <form className={props.classForm} onSubmit={handleSubmit}>
      <input
        className={props.classSearch}
        placeholder="Searching Gif..."
        type="text"
        value={keyword}
        onChange={handleSetKeyword}
      />
      <input
        className={props.classLimit}
        min={1}
        type="number"
        value={limit}
        onChange={handleLimitChange}
      />
      <button className={props.classButtonSearch} type="submit">
        Buscar
      </button>
    </form>
  );
};

export default SearchForm;
