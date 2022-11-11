import './checkout.scss';
import GrayHeader from '../../components/grayHeader/GrayHeader';
import Header from '../../components/Header/Header';
import Footer from '../../components/footer/Footer';

const Checkout = () => {
  return (
    <div className='checkout-page'>
      <GrayHeader />
      <Header />
      <div className='checkout-container'>
        <h2>CHECKOUT</h2>

        <div className='container'>
          <div className='billing-details'>
            <h3>BILLING DETAILS</h3>
            <div className='form'>
              <input type='text' placeholder='First name' />
              <input type='text' placeholder='Last name' />
              <input type='text' placeholder='Shipping address line 1' />
              <input type='text' placeholder='Shipping address line 2' />
              <input type='text' placeholder='Contact no' />
              <input type='text' placeholder='Email' />
            </div>
            <button className='shopping-btn'>BACK TO SHOPPING</button>
            <button className='payment-btn'>PAYMENT</button>
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

export default Checkout;
