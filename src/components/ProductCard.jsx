// src/components/ProductCard.jsx

// Import the React library.
import React from 'react';

// Define a functional component named ProductCard.
// It receives a single prop, 'product', which is an object containing all details for one product.
const ProductCard=({product})=>{
    // The component returns the JSX structure for a single product card.
    return (
        // The main container div for the card. It uses a CSS class for general styling and an inline style for specific rules.
        <div className="product-card" style={styles.card}>
            {/* An image tag to display the product's image. The 'src' and 'alt' attributes are populated from the product prop. */}
            <img src={product.image} alt={product.name} style={styles.image}/>
            {/* Displays the product's name. */}
            <h3 style={styles.name}>{product.name}</h3>
            {/* Displays the product's description. */}
            <p style={styles.description}>{product.description}</p>
            {/* Displays the product's price, formatted with the Rupee symbol. */}
            <p style={styles.price}>Price: ₹{product.price}</p>
            {/* Displays the product's rating using star emojis. */}
            {/* Note: This logic only works well for integer ratings. It creates an array of a specific length, fills it with stars, and joins them into a string. */}
            <p style={styles.rating}>Rating: {Array(product.rating).fill("⭐").join("")}</p>
        </div>
    );
    
};
// no return () is necessery for => ()  <- This comment is correct. If an arrow function has a single expression, the return is implicit if you don't use curly braces {}. However, since this one uses curly braces, the 'return' keyword IS necessary.

// If your file contains any JSX syntax (like <div...>, <h1>, <MyComponent/>), the file name must end in .jsx or .tsx. <- Correct.
// If your file contains only pure JavaScript (functions, objects, variables, logic) with zero JSX, you should name it .js. <- Correct.

// This is a JavaScript object that holds all the inline styles for this component.
// This approach keeps the JSX cleaner by separating the style definitions.
const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "12px",
    padding: "16px",
    width: "250px",
    textAlign: "center",
    margin: "10px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    background: "#fff"
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover", // Ensures the image covers the area without being distorted.
    borderRadius: "8px"
  },
  name: {
    fontSize: "18px",
    margin: "10px 0 5px"
  },
  description: {
    fontSize: "14px",
    color: "#555"
  },
  price: {
    fontWeight: "bold",
    margin: "10px 0"
  },
  rating: {
    color: "#f39c12"
  }
};

// Export the ProductCard component so it can be used in other files like App.jsx.
export default ProductCard;







// // This is readable and intuitive JSX
// <div className="product-card" style={styles.card}>
//   <img src={product.image} alt={product.name} style={styles.image}/>
//   <h3>{product.name}</h3>
// </div>

// If you named these files with a .js extension, Vite would not know how to handle the JSX syntax, and your application would crash. To make it work in a .js file, you would have to manually write the code that JSX compiles into, using the React.createElement() function.
// The React.createElement() syntax is:
// React.createElement(type, props, ...children)
// type: A string for an HTML tag ('div', 'h3') or a variable for another React component (ProductCard).
// props: A JavaScript object containing all the attributes like className, style, src, etc. If there are no props, you use null.
// children: The content inside the element. This can be a string, a number, or another React.createElement() call for nested elements.

// If you named these files with a .js extension, Vite would not know how to handle the JSX syntax, and your application would crash. To make it work in a .js file, you would have to manually write the code that JSX compiles into, using the React.createElement() function.
// The React.createElement() syntax is:
// React.createElement(type, props, ...children)
// type: A string for an HTML tag ('div', 'h3') or a variable for another React component (ProductCard).
// props: A JavaScript object containing all the attributes like className, style, src, etc. If there are no props, you use null.
// children: The content inside the element. This can be a string, a number, or another React.createElement() call for nested elements.











// if we want to use products.js
// const products = [
//   {
//     id: 1,
//     name: "Sony WH-1000XM5 Headphones",
//     image: "https://m.media-amazon.com/images/I/51pFYV7FHdL._UF350,350_QL80_.jpg",
//     description: "Industry-leading noise canceling headphones with up to 30 hours of battery life.",
//     price: 29999,
//     category: "Electronics",
//     rating: 5
//   },{id:2..},{id:3..}
  
// ];

// export default products;


//commensts are not allowed in .json files, so you can't write comments like this in products.js.
// If you want to use this data in your React components, you can import it like this
// import products from './data/products.js'; or import products from './data/products';  
