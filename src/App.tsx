import { useState } from "react";

import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./ui/Header";
import { Home } from "./ui/Home";
import { Footer } from "./ui/Footer/Footer";

import styles from "./App.module.css";

function App() {
  const [searchInput, setSearchInput] = useState<string>("");

  return (
    <Router>
      <div className={styles.App}>
        <Header setSearchInput={setSearchInput} />
        <Home searchInput={searchInput} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
