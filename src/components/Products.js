import React from 'react'
import Product from "./Product"
import './Products.css';

const Products = () => {
  return (
    <>
    <div className='products_row'>
    <Product 
    id='1'
    title="MSI A520M-A Pro AMD AM4 mATX Gaming Motherboard"
    image='https://m.media-amazon.com/images/I/81sffemYJJS._AC_UL640_FMwebp_QL65_.jpg'
    rating={4}
    price={59.99}
    />
    <Product 
    id='1234567'
    title="Genius 31330007400 Slimstar C126 USB Keyboard and Mouse Combo, Black"
    image="https://m.media-amazon.com/images/I/416+N+9TYTL._AC_UL640_FMwebp_QL65_.jpg"
    rating='4'
    price={269}
    />
    </div>
    <div className='products_row'>
    <Product 
    id='12334567'
    title="Meetion USB Wired Keyboard, Black"
    image="https://m.media-amazon.com/images/I/41ZCiorbf0L._AC_UL640_FMwebp_QL65_.jpg"
    rating={5}
    price={136}
    />
    <Product 
    id='12344567'
    title="Redragon H220 THEMIS Wired Gaming Headset, Black"
    image="https://m.media-amazon.com/images/I/51WcbdgjiSL._AC_UL640_FMwebp_QL65_.jpg"
    rating={5}
    price={269}
    />
    <Product 
    id='12345567'
    title="Thermaltake Versa H15 M-ATX Gaming Chassis"
    image="https://m.media-amazon.com/images/I/71J6B8kRqdL._AC_UL640_FMwebp_QL65_.jpg"
    rating={4}
    price={679}
    />  
    </div>
    <div className='products_row'>
    <Product 
    id='123456667'
    title="Genius Scorpion K220 keyboard, Black"
    image="https://m.media-amazon.com/images/I/61CmHwiHXaL._AC_UL640_FMwebp_QL65_.jpg"
    rating={3}
    price={288}
    />   
    </div>
    </>
  
  );
};

export default Products
