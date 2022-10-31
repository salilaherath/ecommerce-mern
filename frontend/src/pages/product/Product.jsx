import './product.scss';
import GrayHeader from '../../components/grayHeader/GrayHeader';
import Header from '../../components/Header/Header';
import Footer from '../../components/footer/Footer';

import StarIcon from '@mui/icons-material/Star';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Product = () => {
  return (
    <div className='productDetails'>
      <GrayHeader />
      <Header />

      <div className='product'>
        <div className='image'>
          <div className='img1'>
            <img src={require('../../assets/products/product3.jpg')} alt='' />
          </div>
          <div className='img2'>
            <img src={require('../../assets/products/product3.1.jpg')} alt='' />
          </div>
          <div className='img3'>
            <img src={require('../../assets/products/product3.2.jpg')} alt='' />
          </div>
          <div className='img4'>
            <img src={require('../../assets/products/product3.3.jpg')} alt='' />
          </div>
        </div>

        <div className='details'>
          <div className='title'>VILA NOVA SHIRT</div>
          <div className='stock'>In Stock</div>
          <div className='noItems'>Only 4 Left</div>
          <div className='rate'>
            <StarIcon className='star' />
            <StarIcon className='star' />
            <StarIcon className='star' />
            <StarIcon className='star' />
            <StarIcon className='star' />
            <div className='reviews'>5 reviews</div>
          </div>
          <div className='price'>Rs. 2250.00</div>
          <div className='hl'></div>
          <div className='sizeText'>Size</div>
          <div className='sizeBtn'>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
          </div>
          <div className='colorText'>Color</div>
          <div className='color'>
            <div></div>
          </div>
          <div className='description'>
            <div className='text'>Product Details</div>
            <div className='para'>
              Hot Juice Vila Nova Shirt. This beautiful piece is a part of Hot Juice's new stylish
              collection especially designed with modest beauty in mind, count on them to take you
              through the season with stylish ease. We make limited quantities for exclusivity in
              fabrics that are specially printed or sourced for our collections in small rolls.
            </div>
          </div>
          <div className='hl'></div>
          <div className='quantity'>
            <div className='dec'>-</div>
            <div className='quan'>2</div>
            <div className='inc'>+</div>
          </div>
          <div className='addToCartBtn'>
            <button>
              <ShoppingCartOutlinedIcon className='icon' /> <span>ADD TO CART</span>
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Product;
