import GrayHeader from '../../components/grayHeader/GrayHeader';
import Header from '../../components/Header/Header';
import NewArrivals from '../../components/newArrivals/NewArrivals';
import SwiperHero from '../../components/swiper/SwiperHero';
import Footer from '../../components/footer/Footer';
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
          <div className='second'>
            <div className='text'>
              <div className='small'>Up to</div>
              <div className='big'>30%</div>
              <div className='medium'>Off</div>
            </div>
          </div>
          <div className='third'>
            <div className='text'>
              <div className='small'>Up to</div>
              <div className='big'>20%</div>
              <div className='medium'>Off</div>
            </div>
          </div>
          <div className='fourth'>
            <div className='text'>
              <div className='small'>Up to</div>
              <div className='big'>10% Off</div>
              <div className='medium'>Sneakers</div>
            </div>
          </div>
        </div>
      </div>

      <NewArrivals />

      <Footer />
    </div>
  );
};

export default Home;
