import React from "react";
import { useState } from "react";
import styles from "./Search.module.css";
import searchIcon from "../../assets/search.png";

const Search = () => {
  const [showTrending, setShowTrending] = useState(false);
  const suggestions = ["Sarees", "Hoodies", "Jackets", "summer wear"];

  const handleInputChange = () => {
    setShowTrending(true);
  };

  const handleInputBlur = () => {
    setShowTrending(false);
  };

  const handleSuggestionClick = (suggestion) => {
    console.log(`Selected suggestion: ${suggestion}`);
    setShowTrending(false);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search..."
          onFocus={handleInputChange}
          onBlur={handleInputBlur}
        />
        <button className={styles.searchBtn}>
          <img src={searchIcon} alt="Search Icon" />
        </button>
      </div>

      {showTrending && (
        <div className={styles.trending}>
          <div>
            <h3>Latest Trends</h3>
          </div>

          <div className={styles.suggestions}>
            <p>Popular suggestions</p>
            <ul className={styles.suggestionsList}>
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
