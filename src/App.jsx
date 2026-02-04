import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login.jsx";
import MainCategoriesPage from "./pages/mainCategories.jsx";
import ServerIssue from "./pages/serverIssue.jsx";
import SingleCategory from "./pages/singleCategory.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/categories" element={<MainCategoriesPage />} />
        <Route path="/server/issue" element = {<ServerIssue/>}/>
        <Route path="/categories/:id" element={<SingleCategory/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;