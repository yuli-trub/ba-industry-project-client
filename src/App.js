import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import { useState } from "react";

=======
>>>>>>> develop
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SearchPage from "./pages/SearchPage/SearchPage";
import ListPage from "./pages/ListPage/ListPage";
import "./App.scss";

function App() {
  const [isFirstHovered, setIsFirstHovered] = useState(false);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route
          path="/flight"
          element={
            <ListPage
              isFirstHovered={isFirstHovered}
              setIsFirstHovered={setIsFirstHovered}
            />
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
