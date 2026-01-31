import { BrowserRouter, Routes, Route } from "react-router";
import NavbarContainer from "./components/NavbarContainer.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import CartContainer from "./components/CartContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <>
    <ToastContainer />
      <BrowserRouter>
        <NavbarContainer />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/category/:categoryName" element={<ItemListContainer />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartContainer />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
