'use client';

import Image from 'next/image';
import Link from 'next/link';

import styles from './Header.module.scss';

function Header(){

    return(
        <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.wrapperUp}>
          <div className={styles.wrapperUpList}>
            <Link href='/' className={styles.logo}>
              <Image className={styles.image} width='190' height='51' src="/assets/images/left_big 1.png" alt='logo' />
            </Link>
          
            <Link href="/">О нас</Link>
            <Link href="/">Производители</Link>
            <Link href="/">Гарантии и возврат</Link>
            <Link href="/">Доставка</Link>
            <Link href="/">Оплата</Link>
            <Link href="/">Контакты</Link>
          </div>
          <Link href='/' className={styles.sign}>
            <Image className={styles.image} width='30' height='30' src="/assets/icons/user.svg" alt="user" />
            Вход / Регистрация
          </Link>
        </div>
        <hr className={styles.divider} />
        <div className={styles.wrapperDown}>
          <div className={styles.ProductCatalog}>
            <Image width={31} height={31} src ="/assets/icons/CatalogButton.svg" alt="catalog"/>
            <p>Каталог товаров</p>
          </div>
          <form className={styles.Search}>
            <input type="search"
            placeholder='Поиск товаров и брендов'/>
            <button>
              <Image width={40} height={40} src ="/assets/icons/search.svg" alt='search'/>
            </button>
          </form>
          <div className={styles.contact}>
            <Link href="tel:8(800)800-00-00" className={styles.number}>
              8-800-000-00-00
            </Link>
            <Link href="/" className={styles.callyou}>Вам Позвонить?</Link>
          </div>
          <div className={styles.buttons}>
            <Link href='/'>
              <Image width={30} height={30} src ="/assets/icons/favourite.svg" alt='favoutite'/>
              <span>Избранное</span>
            </Link>
            <Link href='/'>
              <Image width={30} height={30} src ="/assets/icons/poll.svg" alt='poll'/>
              <span>Сравнение</span>
            </Link>
            <Link href='/'>
              <Image width={30} height={30} src ="/assets/icons/cart.svg" alt='cart'/>
              <span>Корзина</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
    );
}

export default Header;