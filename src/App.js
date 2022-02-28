import AppNavbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartDummy from './components/CartDummy';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './context/CartContext'
import './App.css';
 
function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <AppNavbar title='Best-Planes-On-Sale' />
        <Routes>
          <Route path='/' element={ <ItemListContainer /> } />
          <Route path='/category/:categoryName' element={ <ItemListContainer /> } />
          <Route path='/product/:productId' element={ <ItemDetailContainer /> } />
          <Route path='/cart/' element={ <CartDummy /> } />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;