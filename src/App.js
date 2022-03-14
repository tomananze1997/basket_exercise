import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomepageComponent } from "./pages/homepage.component";
import { HeaderComponent } from "./components/header.component";
import { FooterComponent } from "./components/footer.component";

function App() {
  return (
    <div className="h-screen">
      <Router>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<HomepageComponent />} />{" "}
        </Routes>{" "}
        <FooterComponent />
      </Router>{" "}
    </div>
  );
}

export default App;
