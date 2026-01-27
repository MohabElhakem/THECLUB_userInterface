import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login.jsx";
import MainCategoriesPage from "./pages/mainCategories.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/test" element={<MainCategoriesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;