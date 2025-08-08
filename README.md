# React Dynamic Product Listing Page

This document provides a complete guide for setting up and building a dynamic product listing page using React.js. It covers project creation with both **Vite** and **Create React App (CRA)**, instructions for running a cloned project, and a step-by-step guide.

## Objective

The goal is to create a functional and responsive single-page application that displays a list of products. The application should allow users to interact with the product list by searching, filtering, and sorting the items.

## Core Concepts Covered

This assignment will help you practice and demonstrate your understanding of fundamental React concepts, including:

*   **Project Setup:** Initializing a React project with modern build tools.
*   **Component-Based Architecture:** Breaking down the UI into reusable components.
*   **State Management:** Using the `useState` hook to manage dynamic data.
*   **Props:** Passing data from parent to child components.
*   **Conditional Rendering:** Displaying UI elements based on the application's state.
*   **Handling Events:** Responding to user input like typing and clicks.
*   **Side Effects:** Using the `useEffect` hook to run logic in response to state changes.
*   **List Rendering:** Using the `.map()` method to display lists of data.

---

## Part 1: Project Setup

Choose **one** of the following methods to create your project. Vite is recommended for its speed.

### Method A: Creating a New Project with Vite (Recommended)

#### Prerequisites

Ensure you have **Node.js** installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

#### Initialization Steps

1.  **Open Your Terminal:** Navigate to the directory where you want to create your project.
2.  **Run the Vite Create Command:**
    ```bash
    npm create vite@latest
    ```
3.  **Follow the Prompts:**
    *   **Project name:** Enter a name for your project (e.g., `react-product-listing`).
    *   **Select a framework:** Choose **React**.
    *   **Select a variant:** Choose **JavaScript**.
4.  **Install Dependencies and Run:**
    ```bash
    # Navigate into your new project folder
    cd react-product-listing

    # Install the necessary packages
    npm install

    # Start the development server
    npm run dev
    ```

### Method B: Creating a New Project with Create React App (CRA)

1.  **Open Your Terminal.**
2.  **Run the Create React App Command:**
    ```bash
    npx create-react-app react-product-listing
    ```
3.  **Install Dependencies and Run:**
    ```bash
    # Navigate into your new project folder
    cd react-product-listing

    # Start the development server
    npm start
    ```

---

## Part 2: How to Use This Project from My Repository

If you have cloned this project from a repository, follow these simple steps to get it running on your local machine.

1.  **Clone the Repository (if you haven't already):**
    ```bash
    git clone https://github.com/YernintiRevathi/vite-react-product-listing-NDV4-WEB.git
    ```
2.  **Navigate into the Project Directory:**
    ```bash
    cd name-of-the-project-folder
    ```
3.  **Install Dependencies:** This command reads the `package.json` file and downloads all the required packages into the `node_modules` folder.
    ```bash
    npm install
    ```
4.  **Start the Development Server:** This command will launch the application and open it in your default web browser.
    ```bash
    # If the project was built with Vite
    npm run dev

    # If the project was built with Create React App
    npm start
    ```

---

## Part 3: Step-by-Step Guide to Building the Application

This guide breaks the assignment down into manageable phases.

### Phase 1: Foundation and Initial Setup

1.  **Clean the Project:** Remove the boilerplate content from `src/App.js` (or `App.jsx`) and its associated CSS file.
2.  **Create Data Source:**
    *   In the `src` folder, create a new directory named `data`.
    *   Inside `data`, create a file named `products.json`.
    *   Populate `products.json` with an array of at least 10 product objects. Each object must have properties like `id`, `name`, `price`, `category`, `rating`, and `image`.
3.  **Organize Components:**
    *   In the `src` folder, create a new directory named `components`.
    *   Create empty files for your components inside this folder: `ProductCard.jsx`, `SearchBar.jsx`, `FilterBar.jsx`, and `SortBar.jsx`.

### Phase 2: Displaying the Product List

1.  **Build the `ProductCard` Component:** This component's only job is to receive a single `product` object via props and display its information (image, name, price, etc.) in a nicely formatted way.
2.  **Render Products in `App.jsx`:**
    *   Import your `productData` from `products.json` into `App.jsx`.
    *   Create a state variable using `useState` to hold the list of products.
    *   Use the `.map()` method on this state variable to render a `<ProductCard />` for each product in the array. Pass the product data down to each card using props.

### Phase 3: Implementing Search and Filters

1.  **Manage Filter State:** In `App.jsx`, create `useState` hooks to track the current value for each user input: `searchTerm`, `selectedCategory`, `priceRange`, and `sortOrder`.
2.  **Build the UI Controls:** Implement the `SearchBar`, `FilterBar`, and other filter components. These should be "controlled components" that receive their value and an `onChange` function from `App.jsx` via props.
3.  **Create the Filtering Logic:**
    *   Use a `useEffect` hook in `App.jsx`. This hook should have all your filter state variables in its dependency array.
    *   Inside the `useEffect`, create a new temporary variable that holds a copy of the original product list.
    *   Apply your filters sequentially to this temporary list. For example, filter by search term first, then filter the *result* by category, and so on.
    *   Create one final state variable, such as `filteredProducts`, and use its setter function to store the final, processed list.
    *   Make sure your render logic maps over `filteredProducts` to display the results.

### Phase 4: Implementing Sorting and Final Touches

1.  **Add Sorting:** Inside the same `useEffect`, after all filtering logic is complete, add a conditional block to handle sorting. Use the `.sort()` method on your temporary product array based on the `sortOrder` state.
2.  **Styling:** Use inline styles or a separate `.css` file to style your application. Use Flexbox or CSS Grid to ensure the layout is responsive and looks good on various screen sizes.
3.  **Bonus Features:** If you have time, implement bonus features like adding a modal to show detailed product views or enhancing the rating display.

## Evaluation Criteria

Your submission will be evaluated based on:

*   **Proper use of React concepts:** Components, props, and state are used correctly.
*   **Functionality:** All filtering, searching, and sorting features work as expected.
*   **Responsiveness and UI Design:** The application is user-friendly and looks good on mobile and desktop.
*   **Code Readability and Structure:** The code is well-organized, clean, and easy to understand.

  with 💟 By **Revathi**
