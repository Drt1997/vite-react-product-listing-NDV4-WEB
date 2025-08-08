// src/App.jsx

// Import React hooks: useEffect for side-effects (like filtering) and useState for managing component state.
import React, { useEffect, useState } from 'react';
// Import the raw product data from a local JSON file.
import productData from './data/products.json';
// Import all the child components needed for the UI.
import ProductCard from './components/ProductCard';
import SearchBar from './components/SearchBar';
import FilterBar from './components/FilterBar';
import SortBar from './components/SortBar';
// import './App.css'; // The App.css file is currently commented out.

// Define the main App component, which acts as the container for the entire application.
function App() {
  // === STATE MANAGEMENT ===
  // State to hold the original, unmodified list of all products. Initialized with the data from the JSON file.
  const [products] = useState(productData);
  // State to hold the list of products that are currently visible after filtering and sorting. Also initialized with all products.
  const [filteredProducts, setFilteredProducts] = useState(productData);
  // State to hold the current text from the search bar. Initialized as an empty string.
  const [searchTerm, setSearchTerm] = useState("");
  // State to hold the currently selected category. Initialized as "all".
  const [selectedCategory, setSelectedCategory] = useState("all");
  // A derived constant that creates an array of unique category names from the product data.
  // It maps over all products to get their category, then uses a Set to ensure uniqueness, and finally spreads it back into an array.
  const categories =[...new Set(products.map((p)=>p.category))];
  // State to hold the current price range for filtering, represented as an array [min, max].
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  // A hardcoded array of objects defining the options for the price filter dropdown.
  const priceOptions = [
    { label: "All", value: [0, 100000] },
    { label: "Under 1000", value: [0, 1000] },
    { label: "1000 - 5000", value: [1000, 5000] },
    { label: "5000 - 10000", value: [5000, 10000] },
    { label: "10000 - 20000", value: [10000, 20000] },
    { label: "20000-50000", value:[20000, 50000]},
    { label: "Above 50000", value: [50000, 1000000] }
  ]
  // State to hold the current sorting order. Initialized as "default".
  const [sortOrder, setSortOrder] = useState("default");
  // A hardcoded array of objects defining the options for the sorting dropdown.
  //label is what the user sees, value is what the app uses to sort.
  const sortOptions = [
    { value: 'default', label: 'Default' },
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' },
    { value: 'name-az', label: 'Name: A to Z' },
    { value: 'rating', label: 'Rating' }
  ];

  // === FILTERING & SORTING LOGIC ===
  // The useEffect hook runs a function whenever any of its dependencies (the array at the end) change.
  // This is where all the filtering and sorting magic happens.
  useEffect(() => {
    // Start with a fresh copy of the original product list for each run.
    let tempProducts = [...products];
    
    // --- SEARCH LOGIC ---
    let searchProducts = tempProducts; // Initialize with the full list.
    // If the search term is not empty, filter the list.
    if (searchTerm) {
      searchProducts = tempProducts.filter(product =>
        // Check if the lowercase product name includes the lowercase search term.
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // --- CATEGORY LOGIC ---
    let categoryProducts = searchProducts; // Start with the result from the search filter.
    // If a category is selected and it's not the "all" option...
    if (selectedCategory && selectedCategory !== "all") {
      // ...filter the current list to only include products of that category.
      categoryProducts = searchProducts.filter(product =>
        product.category === selectedCategory
      );
    }
    
    // --- PRICE LOGIC ---
    // Start with the result from the category filter and apply the price range filter.
    let priceProducts = categoryProducts.filter(product =>
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // --- SORTING LOGIC ---
    // Apply sorting to the final filtered list.
    if (sortOrder === 'price-asc') {
      // The sort() method modifies the array in place. For numbers, (a - b) sorts in ascending order.
      priceProducts.sort((a, b) => a.price - b.price);
    }
    else if (sortOrder === 'price-desc') {
      // (b - a) sorts in descending order.
      priceProducts.sort((a, b) => b.price - a.price);
    }
    else if (sortOrder === 'name-az') {
      // localeCompare is the standard way to sort strings alphabetically.
      priceProducts.sort((a, b) => a.name.localeCompare(b.name));
    }
    else if (sortOrder === 'rating') {
      // Sorts by rating in ascending order.
      priceProducts.sort((a, b) => a.rating - b.rating);
    }

    // After all filtering and sorting, update the 'filteredProducts' state with the final result.
    // This will cause React to re-render the component and display the new list.
    setFilteredProducts(priceProducts);

  // The dependency array: this entire useEffect function will re-run if any of these state variables change.
  }, [searchTerm, selectedCategory, priceRange, sortOrder, products]);

  // === JSX RENDER ===
  // This is what gets rendered to the screen.
  return (
    <div className="container" style={styles.container}>
      <header style={styles.heading}>
        <h1>Product Listing</h1>
      </header>

      <main>
        {/* A container for all the filter and sort controls. */}
        <div style={styles.filterControl}>
          {/* Render the SearchBar component, passing the current searchTerm and the state setter function as props. */}
          <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm}/>
          {/* Render the FilterBar component, passing the relevant state and functions. */}
          <FilterBar 
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            categories={categories}
          />

          {/* This is the custom dropdown for price ranges. */}
          <select
            // The value is a string, so we join the priceRange array (e.g., [0, 1000] becomes "0,1000").
            value={priceRange.join(",")} 
            // When changed, split the value string ("0,1000") back into an array of strings (["0", "1000"]) and then map them to numbers ([0, 1000]).
            onChange={(e) => setPriceRange(e.target.value.split(",").map(Number))}
            //setPriceRange(...): You are calling the state updater function you got from useState and passing it the new text. This updates the priceRange state, causing a re-render.
            // Apply inline styles.
            style={{
              padding: "10px",
              marginBottom: "20px",
              marginLeft: "20px",
              fontSize: "16px"
            }} 
          >
            {/* Map over the hardcoded price options to create the dropdown list. */}
            {priceOptions.map((option) => (
              <option key={option.value.join(',')} value={option.value.join(',')}>
                {option.label}
              </option>
            ))}
          </select>

          {/* Render the SortBar component, passing its required state and functions. */}
          <SortBar
            sortOrder={sortOrder}
            onSortChange={setSortOrder}
            sortOptions={sortOptions}
          />
          
        </div>

        {/* This is the grid container where the product cards will be displayed. */}
        <div style={styles.grid}>
            {/* Map over the 'filteredProducts' state array (the one that has been processed). */}
            {/* For each `product` object in the `filteredProducts` array, this arrow function is executed and we render a ProductCard component. */}
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
        {/*This is where the results of all your filtering and sorting logic are displayed.
        *   `{ ... }`: The curly braces in JSX are an "escape hatch" that lets you write JavaScript expressions 
        directly inside your markup.

        *   **`filteredProducts.map(...)`**: You are using the standard JavaScript `.map()` function. 
        You are iterating over the `filteredProducts` array (the one that was just calculated in your `useEffect` logic). 
        The `.map` function creates a new array.

        *   **`product => (...)`**: For each `product` object in the `filteredProducts` array, 
        this arrow function is executed.

        *   **`<ProductCard ... />`**: The function returns a `ProductCard` component for each product. 
        This is how you generate the list of cards dynamically.

        *   **`product={product}`**: This is called a **prop**. 
        You are passing the entire `product` object as a piece of data from this parent component (`App`) down to the child component (`ProductCard`). 
        The `ProductCard` can then use this data to display the product's name, price, image, etc.

        *   **`key={product.id}`**: This is **essential** for React's performance. 
        When rendering a list of items, React uses the `key` to uniquely identify each element. 
        This allows React to be much smarter about updating the list. For example, 
        if you just re-sort the list, React sees the keys have just moved and can reorder the existing components instead of destroying and recreating all of them. 
        The key must be a unique and stable string or number for each item in the list (`product.id` is perfect for this).

        */}

      </main>
    </div>
  );
}


// A JavaScript object to hold all the inline styles for the App component.
const styles = {
  // .container {
  //   padding: "20px",
  //   backgroundColor: "#f9f9f9",
  //   minHeight: "100vh"
  // }, this can't be done ,to style using classes we should write them in css file <- This comment is correct.
  container : {
    padding: "20px",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh"
  },
  heading: {
    textAlign: "center",
    fontSize: "32px",
    marginBottom: "30px"
  },
  grid: {
    display: "flex",
    flexWrap: "wrap", // Allows items to wrap to the next line if the container is too narrow.
    justifyContent: "center", // Centers the items horizontally.
    gap: "20px" // Adds space between the grid items.
  },
  filterControl: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20px"
  }
};

// Export the App component as the default export of this file.
export default App;