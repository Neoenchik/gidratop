'use client';

import Link from 'next/link';
import Image from 'next/image';

import styles from './ProductCard.module.scss';

import { Product } from '@/types/product';

export default function ProductCard({ product }: { product: Product }) {
    return (
        <div className={styles.productCard}>
          <div className={styles.imageWrapper}>
            <Image width={300} height={220} src={product.image} alt="product"/>
            <Image width={102} height={25} src="/Assets/images/HitOfSales.png" alt="HitOfSales" className={styles.HitOfSales}/>
          </div>
          <div className={styles.description}>
            <p className={styles.name}>{product.name}</p>
            <p className={styles.brand}>Бренд: {product.brand}</p>
            <p className={styles.country}>Страна: {product.country}</p>
            <p className={styles.availability}>В наличии {product.availability ? 
              <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 5.125L4.625 8.25L11.5 1.375" stroke="#4798DE" strokeLinecap="square" />
              </svg>
                : '❌'}</p>
            <p className={styles.price}>{product.price} ₽</p>
          </div>
        </div>
    );
}