"use client"

import Image from "next/image";
import Link from 'next/link';
import styles from "./Delivery.module.scss";
import { useState } from "react";


export default function Delivery() {
  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (index:number) => {
    setActiveButton(index);
  };
  return (
    <div className={styles.delivery}>
      <div className={styles.types}>
        <button 
              onClick={() => handleButtonClick(0)}
              className={activeButton === 0 ? styles.active : ''}>
          <div>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 21.2502H2.5V8.75024H18.75V21.2502H10" stroke="#4798DE" strokeWidth="2" strokeLinecap="square"/>
              <path d="M25 21.25H27.5V15.6945L25 11.25H18.75V21.25H20" stroke="#4798DE" strokeWidth="2" strokeLinecap="square"/>
              <path d="M7.5 23.75C8.88071 23.75 10 22.6307 10 21.25C10 19.8693 8.88071 18.75 7.5 18.75C6.11929 18.75 5 19.8693 5 21.25C5 22.6307 6.11929 23.75 7.5 23.75Z" stroke="#4798DE" strokeWidth="2" strokeLinecap="square"/>
              <path d="M22.5 23.75C23.8807 23.75 25 22.6307 25 21.25C25 19.8693 23.8807 18.75 22.5 18.75C21.1193 18.75 20 19.8693 20 21.25C20 22.6307 21.1193 23.75 22.5 23.75Z" stroke="#4798DE" strokeWidth="2" strokeLinecap="square"/>
            </svg>
            <span>
                Доставка по городу Краснодар и Краснодарскому краю
            </span>
          </div>
        </button>
        <button
              onClick={() => handleButtonClick(1)}
              className={activeButton === 1 ? styles.active : ''}>
            <div>
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 2.49976L26.25 8.74976V21.2498L15 27.4998L3.75 21.2498V8.74976L15 2.49976Z" stroke="#F1F2F6" strokeWidth="2" strokeLinecap="square"/>
                <path d="M3.75 8.75024L15 15.0002L26.25 8.75024" stroke="#F1F2F6" strokeWidth="2" strokeLinecap="round"/>
                <path d="M15 15V27.5" stroke="#F1F2F6" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span>
                  Доставка по России и в регионы
              </span>
            </div>
        </button>
        <button
              onClick={() => handleButtonClick(2)}
              className={activeButton === 2 ? styles.active : ''}>
          <div>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 21.2498H22.5M6.25 13.7498L8.75 6.24976H21.25L23.75 13.7498H6.25ZM6.25 13.7498H23.75H6.25ZM6.25 13.7498V21.2498V13.7498ZM23.75 13.7498V21.2498V13.7498ZM6.25 21.2498V23.7498H7.5V21.2498H6.25ZM6.25 21.2498H7.5H6.25ZM23.75 21.2498V23.7498H22.5V21.2498H23.75ZM23.75 21.2498H22.5H23.75Z" stroke="#F1F2F6" strokeWidth="2" strokeLinecap="square"/>
              <path d="M10 18.7502C10.6904 18.7502 11.25 18.1906 11.25 17.5002C11.25 16.8099 10.6904 16.2502 10 16.2502C9.30964 16.2502 8.75 16.8099 8.75 17.5002C8.75 18.1906 9.30964 18.7502 10 18.7502Z" stroke="#F1F2F6" strokeWidth="2" strokeLinecap="square"/>
              <path d="M20 18.7502C20.6904 18.7502 21.25 18.1906 21.25 17.5002C21.25 16.8099 20.6904 16.2502 20 16.2502C19.3096 16.2502 18.75 16.8099 18.75 17.5002C18.75 18.1906 19.3096 18.7502 20 18.7502Z" stroke="#F1F2F6" strokeWidth="2" strokeLinecap="square"/>
            </svg>
            <span>
                Пункт самовывоза товаров
            </span>
          </div>
        </button>
      </div>
      <div className={activeButton === 2 ? styles.hidden : styles.deliverysCost}>
        <div className={styles.left}>
          <h3>Стоимость доставки</h3>
          <div className={activeButton === 0 ? styles.deliveryInfo : styles.hidden}>
              <p>Доставка за пределы города Краснодар оплачиваются из расчета + 30 ₽ за 1 км к стоимости доставки по городу</p>
              
              <p>БЕСПЛАТНО доставка осуществляется при условии, если покупателем приобретен крупногабаритный товар или при сумме заказа свыше 20 000 ₽.</p>
              
              <p className={styles.green}>БЕСПЛАТНО доставка осуществляется только в черте города Краснодар.</p>
          </div>
          <div className={activeButton === 1 ? styles.deliveryInfo : styles.hidden}>
              <p>Доставка в города России осуществляется транспортной компанией на ваш выбор.</p>
          </div>
          <table>
            <thead className={activeButton === 0 ? "" : styles.hidden}>
              <th>Категория товаров</th>
              <th>Стоимость по г. Краснодар</th>
              <th>Стоимость за пределы г. Краснодар</th>
            </thead>
            <thead className={activeButton === 1 ? "" : styles.hidden}>
              <th>Категория товаров</th>
              <th>Стоимость доставки до 
              терминала ТК в г. Краснодар</th>
            </thead>
            <tbody>
              <tr> 
                <td className={styles.one}>
                  <span>Крупногабаритный товар</span> (ванны,душевые кабины, душевые боксы, душевые ограждения, душевые поддоны, сауны, мебель для ванной)
                </td>
                <td>900 ₽</td>
                <td className={activeButton === 0 ? "" : styles.hidden}>900 ₽ + 30 ₽ за 1 км</td>
              </tr>
              <tr> 
                <td className={styles.one}>
                  <span>Среднегабаритный товар</span> (инсталляции, раковины, унитазы, биде, писсуары, биотуалеты, кухонные мойки, полотенцесушители, душевые панели, душевые системы)
                </td>
                <td>700 ₽</td>
                <td className={activeButton === 0 ? "" : styles.hidden}>700 ₽ + 30 ₽ за 1 км</td>
              </tr>
              <tr> 
                <td className={styles.one}>
                  <span>Мелкогабаритный товар</span> (смесители, душевые гарнитуры, душевые трапы и лотки, гигиенические души, верхние души, аксессуары для ванной, аксессуары для общественных санузлов, комплектующие)
                </td>
                <td>500 ₽</td>
                <td className={activeButton === 0 ? "" : styles.hidden}>500 ₽ + 30 ₽ за 1 км</td>
              </tr>
            </tbody>
          </table>
          <p className={activeButton === 1 ? styles.green : styles.hidden}>БЕСПЛАТНО доставка осуществляется при условии, если покупателем приобретен крупногабаритный товар или при сумме заказа свыше 20 000 руб.</p>
        </div>
        <div className={styles.right}>
          <Image width={505} height={486} alt="photo" src="/Assets/Delivery/photo1.png"/>
        </div>
      </div>
    </div>
  );
}
