import Image from "next/image";
import Link from 'next/link';
import styles from "./page.module.scss";
import ProductList from "@/components/ProductList";
import Slider from "@/slider";
import CategoriesList from "@/components/CategoriesList";
import NewsList from "@/components/NewsList";
<<<<<<< HEAD
import Responsive from "@/components/MainPage/Promotions";

=======
>>>>>>> 4eeb21f1e0cda3fa53c7d71910b5f25ccd2a7ac7

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.banner}>
        <Image
          src="/Assets/images/Banner.png"
          alt="banner"
          width={1440}
          height={600}
          className={styles.bannerImage}
        />
        <div className={styles.leftArrow}>
          <div className={styles.arrowContainer}>
            <Image width={45} height={45} src="/Assets/icons/Bannerbutton/Rectangle.svg" alt="rectangle"/>
            <Image width={11} height={20} src="/Assets/icons/Bannerbutton/Vector.svg" alt="vector" className={styles.vectorImage}/>
          </div>
        </div>
        <div className={styles.rightArrow}>
          <div className={styles.arrowContainer}>
            <Image width={45} height={45} src="/Assets/icons/Bannerbutton/Rectangle.svg" alt="rectangle"/>
            <Image width={11} height={20} src="/Assets/icons/Bannerbutton/Vector.svg" alt="vector"/>
          </div>
        </div>
        <div className={styles.slider}>
          <Image width={20} height={7} src="/Assets/icons/RectangleSliderBlue.svg" alt="rectangle"/>
          <Image width={20} height={7} src="/Assets/icons/RectangleSlider.svg" alt="rectangle"/>
          <Image width={20} height={7} src="/Assets/icons/RectangleSlider.svg" alt="rectangle"/>
          <Image width={20} height={7} src="/Assets/icons/RectangleSlider.svg" alt="rectangle"/>
          <Image width={20} height={7} src="/Assets/icons/RectangleSlider.svg" alt="rectangle"/>
          <Image width={20} height={7} src="/Assets/icons/RectangleSlider.svg" alt="rectangle"/>
        </div>
      </div>
      <div className={styles.promotions}>
        <div className={styles.title}>
          <div>Акции</div>
          <Link href="/">Все Акции</Link>
        </div>
<<<<<<< HEAD
        <Responsive/>
=======
        <div className={styles.promotionbanners}>
          <Image width={410} height={208} src="/Assets/images/promotion1.png" alt="promotion"/>
          <Image width={410} height={208} src="/Assets/images/promotion2.png" alt="promotion"/>
          <Image width={410} height={208} src="/Assets/images/promotion3.png" alt="promotion"/>
        </div>
>>>>>>> 4eeb21f1e0cda3fa53c7d71910b5f25ccd2a7ac7
        <Slider/>
        <div className={styles.buttons}>
          <div className={styles.up}>
            <button>ХИТЫ ПРОДАЖ</button>
            <button>НОВИНКИ</button>
            <button>% СКИДКИ</button>
          </div>
          <div className={styles.down}>
            <button>Все</button>
            <button>Ванны</button>
            <button>Душ</button>
            <button>Душевые углы и ограждения</button>
            <button>Мебель для ванных комнат</button>
            <button>Полотенцесушители</button>
            <button>Санфаянс</button>
            <button>Смесители</button>
            <button>Аксессуары</button>
            <button>Системы инсталяции</button>
          </div>
        </div>
        <div className={styles.productCards}>
          <ProductList/>
          <button className={styles.downloadMore}>ЗАГРУЗИТЬ ЕЩЕ</button>
        </div>
        
      </div>
      <Image src="/Assets/images/background.png"
        alt="background"
        width={2880}
        height={1010}
        className={styles.background}
        />
      <div className={styles.menuBar}>
        <div className={styles.promo}>
          <Image width={190} height={200} src="/Assets/images/menuBar/Frame 5.png" alt="menubar"/>
          <Image width={190} height={200} src="/Assets/images/menuBar/promotions.png" alt="menubar"/>
          <Image width={190} height={200} src="/Assets/images/menuBar/givegifts.png" alt="menubar"/>
          <Image width={190} height={200} src="/Assets/images/menuBar/pay.png" alt="menubar"/>
          <Image width={190} height={200} src="/Assets/images/menuBar/chooseBath.png" alt="menubar"/>
          <Image width={190} height={200} src="/Assets/images/menuBar/manufactures.png" alt="menubar"/>
        </div>
        <Slider/>
      </div>
      <div className={styles.popularCategories}>
        <div className={styles.title}>Популярные категории</div>
        <CategoriesList/>
      </div>
      <div className={styles.advert}>
        <div className={styles.banner}>
          <Link href="#">
            <Image width={630} height={320} src="/Assets/images/BannerARC.png" alt="adv"/>
          </Link>
          <Link href="#">
            <Image width={630} height={320} src="/Assets/images/BannerRiho.png" alt="adv"/>
          </Link>
        </div>
        <Slider/>
      </div>
      
      <div className={styles.recommendProduct}>
        <div className={styles.title}>Рекомендованные товары</div>
        <ProductList/>
        <Slider/>
      </div>

      <div className={styles.advert}>
        <div className={styles.banner}>
          <Link href="#">
            <Image width={630} height={320} src="/Assets/images/BannerJD.png" alt="adv"/>
          </Link>
          <Link href="#">
            <Image width={630} height={320} src="/Assets/images/BannerWK.png" alt="adv"/>
          </Link>
        </div>
        <Slider/>
      </div>
      <div className={styles.popularBrands}>
        <div className={styles.title}>
          <div>Популярные бренды</div>
          <Link href="/">Все бренды</Link>
        </div>
        <div className={styles.banner}>
          <Link href="#">
            <Image width={190} height={120} src="/Assets/images/Brands/Logo.png" alt="adv"/>
          </Link>
          <Link href="#">
            <Image width={190} height={120} src="/Assets/images/Brands/Logo1.png" alt="adv"/>
          </Link>
          <Link href="#">
            <Image width={190} height={120} src="/Assets/images/Brands/Logo2.png" alt="adv"/>
          </Link>
          <Link href="#">
            <Image width={190} height={120} src="/Assets/images/Brands/Logo3.png" alt="adv"/>
          </Link>
          <Link href="#">
            <Image width={190} height={120} src="/Assets/images/Brands/Logo4.png" alt="adv"/>
          </Link>
          <Link href="#">
            <Image width={190} height={120} src="/Assets/images/Brands/Logo5.png" alt="adv"/>
          </Link>
        </div>
        <Slider/>
      </div>

      <div className={styles.newsEvents}>
        <div className={styles.title}>Новости и события</div>
        <NewsList/>
        <Slider/>
      </div>
    </main>
  );
}
