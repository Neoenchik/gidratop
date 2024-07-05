'use client';

import Link from 'next/link';
import Image from 'next/image';

import styles from './Footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.we}>
                <Image width='190' height='50' src="/assets/images/left_big 1.png" alt="logo"/>
                <div className={'social'}>
                    <p>Мы в социальных сетях</p>
                    <div className={styles.images}>
                        <Link href="https://vk.com">
                        
                            <Image width='35' height='35' src="/assets/images/VK_Blue_Logo_t.png" alt="VK Logo"/>
                        
                        </Link>
                        <Link href="https://www.instagram.com">
                        
                            <Image width='35' height='35' src="/assets/images/instagram-png-instagram-png-logo-1455.png" alt="Instagram Logo" />
                        
                        </Link>
                        <Link href="https://www.facebook.com">
                        
                            <Image width='35' height='35' src="/assets/images/pngwing.png" alt="Facebook Logo" />
                        
                        </Link>
                    </div>
                </div>
                <div className={styles.payment}>
                    <p>Мы принимаем</p>
                    <div className={styles.images}>
                        <Image width='50' height='30' src="/assets/icons/Visa.svg" alt="Visa"/>
                        <Image width='50' height='30' src="/assets/icons/MC.svg" alt="MC" />
                        <Image width='50' height='30' src="/assets/icons/Mir.svg" alt="Mir" />
                    </div>
                </div>
            </div>
            <div className={styles.buyer}>
                <h3>Покупателю</h3>
                <Link href="/delivery">
                    Доставка
                </Link>
                <Link href="/payment">
                    Оплата
                </Link>
                <Link href="/guarantees-and-returns">
                    Гарантии и возврат
                </Link>
                <Link href="/manufacturers">
                    Производители
                </Link>
                <Link href="/articles">
                    Статьи
                </Link>
            </div>
            <div className={styles.company}>
                <h3>Покупателю</h3>
                <Link href="/about">
                    О нас
                </Link>
                <Link href="/contacts">
                    Контакты
                </Link>
                <Link href="/user-agreement">
                    Пользовательское соглашение
                </Link>
                <Link href="/privacy-policy">
                    Политика конфиденциальности
                </Link>
                <Link href="/feedback">
                    Обратная связь
                </Link>
            </div>
            <div className={styles.contacts}>
                <h3>Контакты</h3>
                <Link href="tel:8(800)800-00-00">
                    
                        <Image width='16' height='16' src="/assets/icons/Phone.svg" alt="phone" />
                        8(800)800-00-00
                    
                </Link>
                <Link href="mailto:zakaz@gidratop.ru">
                    
                        <Image width='16' height='16' src="/assets/icons/Email.svg" alt="email" />
                        zakaz@gidratop.ru
                    
                </Link>
                <Link href="https://yandex.ru/maps/-/CDfpbBka">
                    
                        <Image width='16' height='16' src="/assets/icons/PhoneContacts.svg" alt="address" />
                        г. Санкт-Петербург, пр-кт. Невский, д.39
                    
                </Link>
            </div>
            <div className={styles.subscription}>
                <form>
                    <input 
                    type="email" 
                    placeholder="Введите e-mail"
                    />
                    <button type="submit">ПОДПИСАТЬСЯ</button>
                </form>
                <p>Станьте нашим подписчиком, чтобы быть в курсе информации о новинках и специальных предложениях.</p>
            </div>
        </footer>
    );
}