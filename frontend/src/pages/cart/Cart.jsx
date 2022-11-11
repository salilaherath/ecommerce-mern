import './cart.scss';
import GrayHeader from '../../components/grayHeader/GrayHeader';
import Header from '../../components/Header/Header';
import Footer from '../../components/footer/Footer';

const Cart = () => {
  return (
    <div className='cart-page'>
      <GrayHeader />
      <Header />

      <div className='cart'>
        <h2>CART</h2>

        <table className='table'>
          <tr className='header'>
            <th>IMAGE</th>
            <th>PRODUCT</th>
            <th>PRICE</th>
            <th>QTY</th>
            <th>TOTAL</th>
          </tr>
          <tr className='row'>
            <td>
              <img className='product-image' src={require('../../assets/products/product6.jpg')} />
            </td>
            <td>
              Crew Neck Tshirt <br /> Color: Navy Blue <br /> Size: L
            </td>
            <td>Rs.1200.00</td>
            <td>1</td>
            <td>Rs.1200.00</td>
          </tr>
          <tr className='row'>
            <td>
              <img className='product-image' src={require('../../assets/products/product6.jpg')} />
            </td>
            <td>
              Crew Neck Tshirt <br /> Color: Navy Blue <br /> Size: L
            </td>
            <td>Rs.1200.00</td>
            <td>1</td>
            <td>Rs.1200.00</td>
          </tr>
          <tr className='last'>
            <td colspan='3'></td>
            <td>Total</td>
            <td>Rs.2400.00</td>
          </tr>
        </table>
      </div>

      <div className='bottom'>
        <div className='voucher'>
          <h2>VOUCHER</h2>
          <p>Enter your coupon code if you have one.</p>
          <input type='text' name='' id='code' placeholder='Voucher code' className='input-code' />
          <br />
          <button className='apply-btn'>Apply</button>
        </div>

        <div className='checkout'>
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
          <button className='checkout-btn'>CHECKOUT</button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
