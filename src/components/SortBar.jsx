// src/components/SortBar.jsx

// Import the React library.
import React from "react";

// Define a functional component named SortBar.
// Props: 'sortOrder' (the current sort value), 'onSortChange' (function to call on change), 'sortOptions' (array of available options).
const SortBar=({sortOrder ,onSortChange , sortOptions})=>{
    // The component returns a dropdown menu for sorting.
    return (
        <select
            // The displayed value is controlled by the parent's 'sortOrder' state.
            value={sortOrder}
            // When the user selects a new option, call the parent's 'onSortChange' function with the new value.
            onChange={(e)=>onSortChange(e.target.value)}
            // Applies inline styling.
            style={{
                padding: "10px",
                marginBottom: "20px",
                marginLeft: "20px",
                fontSize: "16px"
            }}
        >
            {/* A disabled, non-selectable default option to act as a label. */}
            <option value="" selected disabled>Sort By</option>
            {/* Maps over the 'sortOptions' array to dynamically create the list of sort options. */}
            {sortOptions.map((option)=>(
                // Each option needs a unique key. The 'value' property of the option object is a good choice.
                // The 'value' attribute is the programmatic value (e.g., 'price-asc').
                <option key={option.value} value={option.value}>
                    {/* The 'label' is the human-readable text shown to the user (e.g., 'Price: Low to High'). */}
                    {option.label}
                </option>
            ))}
        </select>
    );
};

// Export the SortBar component as the default export.
export default SortBar;