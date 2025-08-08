// vite.config.js

// Imports the defineConfig function from Vite, which provides IntelliSense and type-checking for the configuration.
import { defineConfig } from 'vite'
// Imports the official React plugin for Vite.
import react from '@vitejs/plugin-react'

// https://vite.dev/config/ <-- A link to the official Vite configuration documentation.

// This is the main configuration object for Vite.
// 'export default' makes this configuration available to the Vite command-line tool.
export default defineConfig({
  // The 'plugins' array is where you add Vite plugins to extend its functionality.
  plugins: [
    // react() is the plugin that enables Vite to understand and process React code.
    // It handles things like JSX transformation, Fast Refresh (Hot Module Replacement), and other optimizations for React development.
    react()
  ],
})