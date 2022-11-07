import './productCard.scss';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import StarIcon from '@mui/icons-material/Star';

const ProductCard = (props) => {
  const products = props.products;

  return (
    <div className='cards'>
      {products?.map((product) => (
        <div className='card' key={product.id}>
          <div className='image'>
            <img src={require('../../assets/products/' + product.image + '.jpg')} alt='' />
          </div>
          <div className='fRow'>
            <div className='name'>{product.name}</div>
            <ShoppingCartOutlinedIcon className='cart' />
          </div>

          <div className='sRow'>
            <div className='price'>Rs. {product.price}</div>

            <div className='rate'>
              <StarIcon className='star' />
              <StarIcon className='star' />
              <StarIcon className='star' />
              <StarIcon className='star' />
              <StarIcon className='star' />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
