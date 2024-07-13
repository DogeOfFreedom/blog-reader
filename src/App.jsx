import { useState } from "react";
import "./App.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import LoadingWheel from "./LoadingWheel";
import Posts from "./Posts";

function App() {
  return (
    <>
      <NavBar page="Home" />
      <Posts />
      <Footer />
    </>
  );
}

export default App;
