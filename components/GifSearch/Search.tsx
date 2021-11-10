import React, {useState} from "react";

interface Props {
  setKeyword: (keyword: string) => void;
}

const Search: React.FC<Props> = ({setKeyword}) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = ({target}: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setKeyword(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Searching Gif..."
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default Search;
