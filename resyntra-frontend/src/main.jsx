import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from "@/context/ThemeContext";
import { AuthProvider } from "@/context/AuthContext";
import { Toaster } from "react-hot-toast";
import { PaperProvider } from './context/PaperContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
    <AuthProvider>
      <PaperProvider>
    <App />
    <Toaster
        position="top-right"
    />
    </PaperProvider>
    </AuthProvider>
  </ThemeProvider>
  </React.StrictMode>,
  
)