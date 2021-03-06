
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import Cart from './components/Cart/Cart';
import Form from './components/Form/Form';
import { CartContexProvider } from './context/CartContext';

function App() {
  return (
    <div className="App">
      <CartContexProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/marca/:marcaId' element={<ItemListContainer/>}/>
            <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element= {<Cart/>}/>
            <Route path='/form' element={<Form/>}/>
          </Routes>
        </BrowserRouter>
      </CartContexProvider>
    </div>
  );
}

export default App;