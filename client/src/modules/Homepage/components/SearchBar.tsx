import React, { FC, FormEvent } from "react";
import "./SearchBar.css";
import { useSearchStore } from "../../../store/searchStore";
import { useNavigate } from "react-router-dom";

interface SearchBarProps {
  onSearch: (query: string) => void; // Callback to handle search input
}

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  const setSearchText = useSearchStore((state) => state.setSearchText);
  const navigate = useNavigate();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = e.currentTarget.elements.namedItem(
      "search"
    ) as HTMLInputElement;
    //onSearch(query.value)
    setSearchText(query.value);
    query.value = "";
    navigate("/search");
  };

  return (
    <div className="search-container">
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          name="search"
          placeholder="Search..."
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
