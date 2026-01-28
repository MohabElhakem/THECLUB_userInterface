import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login.jsx";
import MainCategoriesPage from "./pages/mainCategories.jsx";
import NewCategory from "./pages/newCategory.jsx";
import ServerIssue from "./pages/serverIssue.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/categories" element={<MainCategoriesPage />} />
        <Route path="/test2" element={ <NewCategory/>} />
        <Route path="/server/issue" element = {<ServerIssue/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;