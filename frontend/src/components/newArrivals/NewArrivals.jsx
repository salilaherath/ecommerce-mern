import ProductCard from '../productCard/ProductCard';
import './newArrivals.scss';

const NewArrivals = () => {
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
      <ProductCard />
    </div>
  );
};

export default NewArrivals;
