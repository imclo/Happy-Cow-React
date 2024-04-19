import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar, faSearch } from "@fortawesome/free-solid-svg-icons";
library.add(faStar, faSearch);

// import components
import Header from "../components/Header";

// import pages
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Restaurant from "../pages/Restaurant";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/restaurant/:placeId" element={<Restaurant />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
