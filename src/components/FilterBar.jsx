// src/components/FilterBar.jsx

// Import the React library, which is necessary for creating components and using JSX.
import React from "react";

// Define a functional component named FilterBar.
// It uses object destructuring in its parameters to directly access the props passed from its parent component.
// - selectedCategory: The currently selected category value (e.g., "all", "Electronics").
// - onCategoryChange: A function passed from the parent to be called when the user selects a new category.
// - categories: An array of strings representing all available category options.
const FilterBar = ({ selectedCategory, onCategoryChange, categories }) => {
  // The component returns a JSX structure, which looks like HTML.
  return (
    // A standard HTML <select> element, which creates a dropdown menu.
    <select
      // This is the "controlled component" pattern. The value displayed in the dropdown is always controlled by the parent's state, via this prop.
      value={selectedCategory}
      // This is the event handler that fires when the user chooses a new option.
      // It's an inline arrow function that receives the browser's event object ('e').
      // It calls the onCategoryChange function (from props) and passes it the value of the newly selected option (e.g., 'e.target.value').
      onChange={(e) => onCategoryChange(e.target.value)}
      // This applies inline CSS styles. In JSX, the 'style' attribute takes a JavaScript object.
      // CSS properties are written in camelCase (e.g., 'marginBottom') instead of kebab-case.
      style={{
        padding: "10px",
        marginBottom: "20px",
        marginLeft: "20px",
        fontSize: "16px"
      }}
    >
      {/* A hardcoded default option for the dropdown. Its value is an empty string, representing the "all" state. */}
      <option value="">All Categories</option>
      
      {/* This is where the dynamic options are created. We use the .map() method to iterate over the 'categories' array passed in via props. */}
      {/* For each category ('cat') in the array, it creates an <option> element. 'index' is the position of the item in the array. */}
      {categories.map((cat, index) => (
        // Each element in a list needs a unique 'key' prop for React to efficiently manage updates. The index is used here.
        // The 'value' attribute is the actual value that will be used when this option is selected.
        <option key={index} value={cat}>
          {/* This is the text that the user sees in the dropdown menu. */}
          {cat}
        </option>
      ))}
    </select>
  );
};

// This line makes the FilterBar component available for other files to import. It's a "default export".
export default FilterBar;