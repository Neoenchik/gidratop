// src/components/ProductList/ProductList.jsx
'use client';

import NewsCard from '../NewsCard';
import styles from './NewsList.module.scss';

import { News } from '@/types/product';

const products: News[] = [
  {
    image: '/Assets/images/News/news1.png',
    name: 'Новые поступления ванных.',
    str1: "Что может быть лучше расслабляющей ванны после тяжолого рабочего дня?",
    str2: "У нас новые постепления, найдется ванна на любой вкус."
  },
  {
    image: '/Assets/images/News/news1.png',
    name: 'Новые поступления ванных.',
    str1: "Что может быть лучше расслабляющей ванны после тяжолого рабочего дня?",
    str2: "У нас новые постепления, найдется ванна на любой вкус."
  },
  {
    image: '/Assets/images/News/news1.png',
    name: 'Новые поступления ванных.',
    str1: "Что может быть лучше расслабляющей ванны после тяжолого рабочего дня?",
    str2: "У нас новые постепления, найдется ванна на любой вкус."
  },
];

const NewsList = () => {
  return (
    <div className={styles.newsList}>
      {products.map((news, index) => (
        <NewsCard key={index} news={news} />
      ))}
    </div>
  );
};

export default NewsList;
