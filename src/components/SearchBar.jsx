// src/components/SearchBar.jsx

// Import the React library.
import React from "react";

// Define a functional component named SearchBar.
// It receives two props: 'searchTerm' (the current text in the search bar) and 'onSearch' (the function to call when the text changes).
const SearchBar = ({ searchTerm, onSearch }) => {
  // The component returns a single input element.
  return (
    <input
      // Sets the input type to text.
      type="text"
      // Placeholder text that appears when the input is empty.
      placeholder="Search products..."
      // This is the "controlled component" pattern. The input's displayed text is always dictated by the 'searchTerm' prop from the parent.
      value={searchTerm}
      // The event handler that fires on every keystroke.
      // It calls the 'onSearch' function (from props) and passes it the input's current value.
      onChange={(e) => onSearch(e.target.value)}
      // Applies inline styles using a JavaScript object.
      style={{
        padding: "10px",
        marginBottom: "20px",
        width: "300px",
        fontSize: "16px"
      }}
    />
  );
};

// Export the SearchBar component as the default export.
export default SearchBar;