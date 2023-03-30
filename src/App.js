import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SearchPage from "./pages/SearchPage/SearchPage";
import ListPage from "./pages/ListPage/ListPage";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/flight" element={<ListPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
