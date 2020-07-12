import React from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

import Categories from './components/Categories.js';
import Products from './components/Products.js';

export default props => {
//   console.log('props in app : ', props);
  return (
        <>
        <Header />
        <Products />
        <Categories />
        <Footer />
        </>
  );
};