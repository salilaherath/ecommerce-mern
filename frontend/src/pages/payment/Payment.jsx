import './payment.scss';
import GrayHeader from '../../components/grayHeader/GrayHeader';
import Header from '../../components/Header/Header';
import Footer from '../../components/footer/Footer';

const Payment = () => {
  return (
    <div className='payment-page'>
      <GrayHeader />
      <Header />

      <div className='payment-container'>
        <h2>PAYMENT</h2>

        <div className='container'>
          <div className='billing-details'>
            <h3>SHIPPING DETAILS</h3>
            <div className='shipping-details'></div>
            <div className='form'>
              <h4>YOUR CREDIT CARD</h4>
              <input type='text' placeholder='Card number' />
              <input type='text' placeholder='Name on card' />
              <input type='text' placeholder='Expiration (MM/YY)' />
              <input type='text' placeholder='Security code' />
            </div>
            <button className='cart-btn'>BACK TO CART</button>
            <button className='payment-btn'>PAY NOW</button>
          </div>
          <div className='order-details'>
            <h3>YOUR ORDER</h3>
            <div className='order-container'>
              <div className='order'>
                <img src={require('../../assets/products/product6.jpg')} alt='' />
                <div className='info'>
                  <p>Crew Neck T Shirt</p>
                  <p>Color : Navy Blue</p>
                  <p>Size : L</p>
                  <p className='price'>Rs. 1200.00</p>
                </div>
              </div>
              <div className='order'>
                <img src={require('../../assets/products/product6.jpg')} alt='' />
                <div className='info'>
                  <p>Crew Neck T Shirt</p>
                  <p>Color : Navy Blue</p>
                  <p>Size : L</p>
                  <p className='price'>Rs. 1200.00</p>
                </div>
              </div>
              <div className='hl'></div>
              <table>
                <tr>
                  <td>Subtotal</td>
                  <td>Rs.2400.00</td>
                </tr>
                <tr>
                  <td>Discounts</td>
                  <td>0</td>
                </tr>
                <tr className='total'>
                  <td>Total</td>
                  <td>Rs.2400.00</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Payment;
