// src/components/ProductList/ProductList.jsx
'use client';

import ProductCard from '../ProductCard';
import styles from './ProductList.module.scss';

import { Product } from '@/types/product';

const products: Product[] = [
  {
    image: '/Assets/images/Products/2020_insta-IZI_1 1.png',
    name: 'Продукт 1',
    brand: 'Бренд 1',
    country: 'Страна 1',
    availability: true,
    price: '15000',
  },
  {
    image: '/Assets/images/Products/Duofix 1.png',
    name: 'Продукт 2',
    brand: 'Бренд 2',
    country: 'Страна 2',
    availability: true,
    price: '15000',
  },
  {
    image: '/Assets/images/Products/image004 1.png',
    name: 'Продукт 2',
    brand: 'Бренд 2',
    country: 'Страна 2',
    availability: true,
    price: '15000',
  },
  {
    image: '/Assets/images/Products/Sigma10 1.png',
    name: 'Продукт 2',
    brand: 'Бренд 2',
    country: 'Страна 2',
    availability: true,
    price: '15000',
  },
];

const ProductList = () => {
  return (
    <div className={styles.productList}>
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
