// src/main.jsx

// Import StrictMode from React, which helps find potential problems in an application by activating additional checks and warnings.
import { StrictMode } from 'react'
// Import createRoot from react-dom/client, which is the new API for rendering React applications.
import { createRoot } from 'react-dom/client'
// import './index.css' // The main CSS file is currently commented out.
// Import the main App component, which is the root of our React component tree.
import App from './App.jsx'

// createRoot tells React which DOM element to use as the main container for the app.
// document.getElementById('root') finds the HTML element with the ID 'root' in index.html.
createRoot(document.getElementById('root')).render(
  // The render method tells React what to display inside that root container.
  
  // StrictMode is a wrapper component that doesn't render any visible UI. It's used for highlighting potential problems.
  <StrictMode>
    {/* Here, we are telling React to render our main App component. */}
    <App />
  </StrictMode>,
)



// Since this file is responsible for rendering your root component with JSX, it should always be named .jsx.



// // main.js (hypothetical alternate)

// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import React from 'react'; // You would need to explicitly import React for createElement
// import App from './App.jsx';

// createRoot(document.getElementById('root')).render(
//   // The JSX <StrictMode><App /></StrictMode> becomes this:
//   React.createElement(
//     StrictMode,
//     null, // No props for StrictMode
//     React.createElement(App, null) // The App component is a child
//   )
// );