import './shop.scss';
import GrayHeader from '../../components/grayHeader/GrayHeader';
import Header from '../../components/Header/Header';
import ProductCard from '../../components/productCard/ProductCard';

const Shop = () => {
  return (
    <div className='shop'>
      <GrayHeader />
      <Header />

      <div className='shop-container'>
        <div className='filters'></div>

        <div className='products'>
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default Shop;
