// src/components/ProductList/ProductList.jsx
'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { ProductCard as ProductCardType } from '@/types/product';
import ProductCard from '../ProductCard';
import styles from './ProductList.module.scss';

/*const products: Product[] = [
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
];*/

const ProductList = () => {
  const [productCards, setProductCards] = useState<ProductCardType[]>([]);

  useEffect(() => {
    const fetchProductCards = async()=> {
      try{
        const response = await axios.get("https://localhost:7196/api/ProductsCard");
        setProductCards(response.data);
      }catch(error)
      {
        console.error('Error fetching product cards:', error);
      }
    };
    fetchProductCards();
  }, []);
  return (
    <div className={styles.productList}>
      {productCards.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
