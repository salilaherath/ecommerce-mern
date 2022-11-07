import ProductCard from '../productCard/ProductCard';
import './newArrivals.scss';
import { useState } from 'react';

const NewArrivals = () => {
  const [products, setProducts] = useState([
    { image: 'product1', name: 'Jogger Pant', price: '2350.00', id: 1 },
    { image: 'product2', name: 'Cascais Shirt', price: '2350.00', id: 2 },
    { image: 'product3', name: 'Vila Nova Shirt', price: '2350.00', id: 3 },
    { image: 'product4', name: 'Cotton Shorts', price: '2350.00', id: 4 },
    { image: 'product5', name: 'Denim Shorts', price: '2350.00', id: 5 },
    { image: 'product6', name: 'Sports T-Shirt', price: '2350.00', id: 6 },
    { image: 'product2', name: 'Cascais Shirt', price: '2350.00', id: 7 },
    { image: 'product1', name: 'Jogger Pant', price: '2350.00', id: 8 },
  ]);
  return (
    <div className='newArrival'>
      <div className='title'>NEW ARRIVALS</div>
      <div className='categories'>
        <ul>
          <li className='item'>Men</li>
          <li className='item'>Women</li>
          <li className='item'>Kids</li>
          <li className='item'>Sale</li>
        </ul>
      </div>
      <div className='hl'></div>
      <ProductCard products={products} />
    </div>
  );
};

export default NewArrivals;
