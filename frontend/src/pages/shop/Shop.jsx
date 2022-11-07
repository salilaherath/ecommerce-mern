import './shop.scss';
import GrayHeader from '../../components/grayHeader/GrayHeader';
import Header from '../../components/Header/Header';
import ProductCard from '../../components/productCard/ProductCard';
import { useState } from 'react';
import React from 'react';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

import { ThemeProvider, createTheme } from '@mui/material/styles';
const theme = createTheme({
  palette: {
    primary: {
      main: '#FF4E00',
    },
    secondary: {
      main: '#494c7d',
    },
  },
});

function valuetext(value) {
  return `${value}`;
}

const Shop = () => {
  const [products, setProducts] = useState([
    { image: 'product1', name: 'Jogger Pant', price: '2350.00', id: 1 },
    { image: 'product2', name: 'Cascais Shirt', price: '2350.00', id: 2 },
    { image: 'product3', name: 'Vila Nova Shirt', price: '2350.00', id: 3 },
    { image: 'product4', name: 'Cotton Shorts', price: '2350.00', id: 4 },
    { image: 'product5', name: 'Denim Shorts', price: '2350.00', id: 5 },
    { image: 'product6', name: 'Sports T-Shirt', price: '2350.00', id: 6 },
    { image: 'product2', name: 'Cascais Shirt', price: '2350.00', id: 7 },
    { image: 'product1', name: 'Jogger Pant', price: '2350.00', id: 8 },
    { image: 'product3', name: 'Vila Nova Shirt', price: '2350.00', id: 9 },
    { image: 'product4', name: 'Cotton Shorts', price: '2350.00', id: 10 },
    { image: 'product5', name: 'Denim Shorts', price: '2350.00', id: 11 },
    { image: 'product6', name: 'Sports T-Shirt', price: '2350.00', id: 12 },
  ]);

  const [value, setValue] = React.useState([1000, 5000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='shop'>
      <GrayHeader />
      <Header />

      <div className='shop-container'>
        <div className='filters'>
          <div className='categories'>
            <h3>SHOP BY CATEGORIES</h3>
            <ul>
              <li>
                <ArrowForwardIcon className='icon' />
                T-Shirts
              </li>
              <li>
                <ArrowForwardIcon className='icon' />
                Casual Shirts
              </li>
              <li>
                <ArrowForwardIcon className='icon' />
                Formal Shirts
              </li>
              <li>
                <ArrowForwardIcon className='icon' />
                Trousers
              </li>
              <li>
                <ArrowForwardIcon className='icon' />
                Shorts
              </li>
              <li>
                <ArrowForwardIcon className='icon' />
                Accessories
              </li>
              <li>
                <ArrowForwardIcon className='icon' />
                Underwear & Socks
              </li>
              <li>
                <ArrowForwardIcon className='icon' />
                Footwears
              </li>
            </ul>
          </div>
          <div className='price-range'>
            <h3>FILTER PRICE</h3>
            <ThemeProvider theme={theme}>
              <Box sx={{ width: 200 }}>
                <Slider
                  getAriaLabel={() => 'Price Range'}
                  value={value}
                  onChange={handleChange}
                  valueLabelDisplay='auto'
                  getAriaValueText={valuetext}
                  min={1000}
                  max={9000}
                  step={100}
                />
              </Box>
            </ThemeProvider>
          </div>
          <div className='colors'>
            <h3>COLOR</h3>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox style={{ paddingBottom: 0, paddingTop: 0 }} />}
                label='BLACK'
              />
              <FormControlLabel
                control={<Checkbox style={{ paddingBottom: 0, paddingTop: 0 }} />}
                label='GREY'
              />
              <FormControlLabel
                control={<Checkbox style={{ paddingBottom: 0, paddingTop: 0 }} />}
                label='RED'
              />
              <FormControlLabel
                control={<Checkbox style={{ paddingBottom: 0, paddingTop: 0 }} />}
                label='BLUE'
              />
              <FormControlLabel
                control={<Checkbox style={{ paddingBottom: 0, paddingTop: 0 }} />}
                label='YELLOW'
              />
              <FormControlLabel
                control={<Checkbox style={{ paddingBottom: 0, paddingTop: 0 }} />}
                label='GREEN'
              />
            </FormGroup>
          </div>
          <div className='brand'>
            <h3>BRAND</h3>
            <ul>
              <li>
                <ArrowForwardIcon className='icon' />
                All
              </li>
              <li>
                <ArrowForwardIcon className='icon' />
                Anationz
              </li>
              <li>
                <ArrowForwardIcon className='icon' />
                Hot Juice
              </li>
              <li>
                <ArrowForwardIcon className='icon' />
                Denzo
              </li>
            </ul>
          </div>
        </div>

        <div className='products'>
          <ProductCard products={products} />
        </div>
      </div>
    </div>
  );
};

export default Shop;
