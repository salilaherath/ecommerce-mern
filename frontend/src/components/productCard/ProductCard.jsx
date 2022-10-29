import './productCard.scss';
import { useState } from 'react';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import StarIcon from '@mui/icons-material/Star';

const ProductCard = () => {
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
    <div className='cards'>
      {products.map((product) => (
        <div className='card' key={product.id}>
          <div className='image'>
            <img src={require('../../assets/products/' + product.image + '.jpg')} alt='' />
          </div>
          <div className='fRow'>
            <div className='name'>{product.name}</div>
            <ShoppingCartOutlinedIcon className='cart' />
          </div>

          <div className='price'>Rs. {product.price}</div>

          <div className='rate'>
            <StarIcon className='star' />
            <StarIcon className='star' />
            <StarIcon className='star' />
            <StarIcon className='star' />
            <StarIcon className='star' />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
