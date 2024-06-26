'use client';

import Link from 'next/link';
import Image from 'next/image';

import styles from './CategoriesCard.module.scss';

import { Categories } from '@/types/product';

export default function CategoriesCard({ categories }: { categories: Categories }) {
    return (
        <div className={styles.categoriesCard}>
            <div className={styles.imageWrapper}>
                <Image width={260} height={200} src={categories.image} alt="categories"/>
            </div>
            <p className={styles.name}>{categories.name}</p>
        </div>
    );
}