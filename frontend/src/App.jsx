// src/App.jsx
import React from "react";
import Header from "./components/Header.jsx";
import NavBar from "./components/NavBar.jsx";
import Home from "./pages/Home.jsx";
import SocialLinks from "./components/SocialLinks.jsx";

export default function App() {
  return (
    <div className="app">
      <Header />
      <NavBar />
      <main className="container">
        <Home />
      </main>
      <footer className="footer">
        <p>&copy; 2025 Kayoni Graphics and Branding | All Rights Reserved</p>
        <SocialLinks />
      </footer>
    </div>
  );
}
