import React, { FC, FormEvent, useState } from "react";
import "./SearchBar.css";
import { useQuery } from "@tanstack/react-query";
import { Trail } from "../../../types/types";
import { fetchSearchSuggestions } from "../../../api/api";
import { debounce } from "lodash";
import { useNavigate } from "react-router-dom";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const {
    data: suggestions,
    isError,
    error,
  } = useQuery(
    ["searchSuggestions", query],
    () => fetchSearchSuggestions(query),

    {
      enabled: query.length > 0,
      refetchOnWindowFocus: false,
    }
  );

  // Debounced function to trigger the query
  const debouncedSearch = debounce((newQuery: string) => {
    setQuery(newQuery);
  }, 100);

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim() === "") return;

    onSearch(query);
  };
  const handleSuggestionClick = (id: string) => {
    navigate(`/trails/${id}`);
  };

  return (
    <div className="search-wrapper bg-blue-100 ">
      <div className="search-container">
        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            name="search"
            value={query}
            onChange={(e) => debouncedSearch(e.target.value)}
            placeholder="Search for trails"
            className="search-input"
            autoComplete="off" 
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>

      {/* Error Message */}
      {isError && (
        <div className="text-red-500">{(error as Error).message}</div>
      )}

      {/* Suggestions List */}
      {suggestions && suggestions.length > 0 && (
        <ul className="suggestions-dropdown w-[18rem]">
          {suggestions.slice(0, 3).map((suggestion: Trail) => (
            <li
              key={suggestion.id}
              className="flex items-center px-4 py-3 border-b last:border-none cursor-pointer hover:bg-gray-200 transition duration-200"
              onClick={() => handleSuggestionClick(suggestion.id)} 
            >
              <img
                src={suggestion.imageUrl}
                alt={suggestion.name}
                className="w-16 h-16 rounded-md object-cover mr-4"
              />
              <div className="flex-1">
                <p className="font-semibold text-gray-800">{suggestion.name}</p>
                <p className="text-sm text-gray-600">{suggestion.location}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
