import React from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import StateNewsPage from "./pages/StateNewsPage";
import CityNewsPage from "./pages/CityNewsPage";

const App: React.FC = () => {
  return (
      <MainLayout>
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/category/:category" element={<CategoryPage />} />

          <Route path="/usa/:state" element={<StateNewsPage />} />

          <Route path="/usa/:state/:city" element={<CityNewsPage />} />

        </Routes>
      </MainLayout>
  );
};

export default App;