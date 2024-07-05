'use client';

import Link from 'next/link';
import Image from 'next/image';

import styles from './NewsCard.module.scss';

import { News } from '@/types/product';

export default function NewsCard({ news }: { news: News }) {
    return (
        <div className={styles.newsCard}>
          <div className={styles.imageWrapper}>
            <Image width={408} height={273} src={news.image} alt="news"/>
            <button>Перейти в раздел</button>
          </div>
          <div className={styles.description}>
            <p className={styles.name}>{news.name}</p>
            <p className={styles.descr}>{news.str1}</p>
            <p className={styles.descr}>{news.str2}</p>
          </div>
        </div>
    );
}