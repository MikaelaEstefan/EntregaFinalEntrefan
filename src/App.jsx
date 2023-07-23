import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import NavBar from "./componentes/NavBar/NavBar";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import Cart from './componentes/Cart/Cart';
import { CarritoProvider } from './context/CartContext'; 
import Checkout from './componentes/Checkout/Checkout';

const App = () => {
  return (
    <>
      <BrowserRouter>
      <CarritoProvider>
      <NavBar/>
      <Routes>
      {/* <ItemListContainer greeting = {"Step into a Galaxy Far, Far Away and Explore Our Star Wars Universe!"}/> */}
          <Route path='/' element={ <ItemListContainer/> } />
          <Route path='/categoria/:idCategoria' element={ <ItemListContainer greeting={'Productos por categoria'}/> }/>
          <Route path='/item/:idItem' element = { <ItemDetailContainer/> } />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout/>} />
      </Routes>
      </CarritoProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
