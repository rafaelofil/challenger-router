import React from 'react';
import Head from './Head';
import styles from './Products.module.css';

const Products = () => {
  return (
    <div className={styles.products}>
      <Head title="Products" />
      <h1>Products</h1>
    </div>
  );
};

export default Products;
