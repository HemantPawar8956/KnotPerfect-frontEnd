import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { MdClear } from "react-icons/md";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (event) => {
    setQuery(event.target.value);
    if (onSearch) {
      onSearch(event.target.value);
    }
  };

  const handleClear = () => {
    setQuery("");
    if (onSearch) {
      onSearch("");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "8px 12px",
        maxWidth: "500px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
      }}>
      <FiSearch color="#1976d2" size={20} style={{ marginRight: "8px" }} />
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleSearch}
        style={{
          flex: 1,
          border: "none",
          outline: "none",
          fontSize: "16px",
        }}
      />
      {query && (
        <MdClear
          color="#d32f2f"
          size={20}
          style={{ cursor: "pointer" }}
          onClick={handleClear}
        />
      )}
    </div>
  );
};
export default SearchBar;
