import './App.css';
import Admin from './Components/Admin.js';
import Book from './Components/Book';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { render } from "react-dom";


function App() {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/book" element={<Book />} />
      </Routes>
    </BrowserRouter>,
    document.getElementById("root")
  );
};



export default App;
