import React from "react";
import { useSearchStore } from "../../store/searchStore";

const SearchResults= () => {
  const searchText = useSearchStore((state) => state.searchText);

  return (
    <div>
      <h1>Search Results</h1>
      <p>You searched for: <strong>{searchText}</strong></p>
    </div>
  );
};

export default SearchResults;
