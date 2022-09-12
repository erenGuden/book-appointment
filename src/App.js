import "./App.css";
import Admin from "./Components/Admin.js";
import Book from "./Components/Book";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { render } from "react-dom";
import Home from "./Components/Home";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  render(
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/book" element={<Book />} />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>,
    document.getElementById("root")
  );
}

export default App;
