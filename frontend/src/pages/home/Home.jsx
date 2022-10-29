import GrayHeader from '../../components/grayHeader/GrayHeader';
import Header from '../../components/Header/Header';
import NewArrivals from '../../components/newArrivals/NewArrivals';
import SwiperHero from '../../components/swiper/SwiperHero';
import './home.scss';

const Home = () => {
  return (
    <div>
      <GrayHeader />
      <Header />
      <SwiperHero />

      <div className='grid-container'>
        <div className='first'>
          <div className='text'>
            <div className='small'>Top</div>
            <div className='big'>Jeans</div>
            <div className='extra-small'>30% OFF</div>
          </div>
        </div>
        <div className='second-container'>
          <div className='second'>2</div>
          <div className='third'>3</div>
          <div className='fourth'>4</div>
        </div>
      </div>

      <NewArrivals />
    </div>
  );
};

export default Home;
