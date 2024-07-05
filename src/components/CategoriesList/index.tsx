// src/components/ProductList/ProductList.jsx
'use client';

import CategoriesCard from '../CategoriesCard';
import styles from './CategoriesList.module.scss';

import { Categories } from '@/types/product';

const products: Categories[] = [
  {
    image: '/Assets/images/Categories/sink.png',
    name: 'РАКОВИНЫ',
  },
  {
    image: '/Assets/images/Categories/toilet.png',
    name: 'УНИТАЗЫ',
  },
  {
    image: '/Assets/images/Categories/faucet.png',
    name: 'СМЕСИТЕЛИ',
  },
  {
    image: '/Assets/images/Categories/installation.png',
    name: 'СИСТЕМЫ ИНСТАЛЯЦИИ',
  },
  {
    image: '/Assets/images/Categories/bath.png',
    name: 'ВАННЫ',
  },
  {
    image: '/Assets/images/Categories/furniture.png',
    name: 'МЕБЕЛЬ ДЛЯ ВАННЫХ КОМНАТ',
  },
  {
    image: '/Assets/images/Categories/shower.png',
    name: 'ДУШЕВЫЕ УГЛЫ И ОГРАЖДЕНИЯ',
  },
  {
    image: '/Assets/images/Categories/accessories.png',
    name: 'АКСЕССУАРЫ ДЛЯ ВАННЫХ КОМНАТ',
  },
];

const CategoriesList = () => {
  return (
    <div className={styles.categoriesList}>
      {products.map((categories, index) => (
        <CategoriesCard key={index} categories={categories} />
      ))}
    </div>
  );
};

export default CategoriesList;
