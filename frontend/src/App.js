import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import ProductList from './pages/productList/ProductList';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Product from './pages/product/Product';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<ProductList />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/product' element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
