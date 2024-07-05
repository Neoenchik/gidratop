'use client'

import React, { useState} from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import styles from "./Promotions.module.scss";

const NextArrow = (props:any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", alignItems: "center", justifyContent: "center"}}
      onClick={onClick}
    >
      <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 1.59473L13 12.2998L2 22.4101" stroke="#4798DE" strokeWidth="3"/>
      </svg>
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", alignItems: "center", justifyContent: "center"}}
      onClick={onClick}
    >
      <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)">
        <path d="M2 1.59473L13 12.2998L2 22.4101" stroke="#4798DE" strokeWidth="3" />
      </svg>
    </div>
  );
};

const promotions = [
    {
        image: "/Assets/Promotion/promotion1.png",
        link: "#"
    },
    {
        image: "/Assets/Promotion/promotion2.png",
        link: "#"
    },
    {
        image: "/Assets/Promotion/promotion3.png",
        link: "#"
    },
    {
        image: "/Assets/Promotion/promotion1.png",
        link: "#"
    },
    {
        image: "/Assets/Promotion/promotion2.png",
        link: "#"
    },
    {
        image: "/Assets/Promotion/promotion3.png",
        link: "#"
    },
    {
        image: "/Assets/Promotion/promotion1.png",
        link: "#"
    },
    {
        image: "/Assets/Promotion/promotion2.png",
        link: "#"
    },
    {
        image: "/Assets/Promotion/promotion3.png",
        link: "#"
    },
];

function Responsive() {
  const [currentSlide, setCurrentSlide] = useState(0); 
  var settings = {
    arrows: true,
    dots: true, // Показать навигационные точки
    infinite: true, // Бесконечная прокрутка
    speed: 500, // Скорость анимации в миллисекундах
    slidesToShow: 4, // Показывать по 4 слайда
    slidesToScroll: 4, // Прокручивать по 4 слайда
    initialSlide: 0, // Начальный слайд
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots: any) => (
      <ul className={styles["custom-dots"]}> {dots} </ul>
    ),
    customPaging: function (i: number) {
      return (
        <div className={i === currentSlide ? styles["custom-dot-active"] : styles["custom-dot"]} />
      );
    },
    afterChange: function (current: number) { setCurrentSlide(current); },
    /*customPaging: function(i: number) {
      return (
        <div style={{
          width: '20px',
          height: '7px',
          backgroundColor: i === currentSlide ? '#4798DE' : '#F1F2F6',
          borderRadius: '5px',
        }}/>
      );
    },
    afterChange: function(current:number) { setCurrentSlide(current); },*/
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {promotions.map((promotion, index) => (
            <div key={index} className={styles.slide}>
                <Link href={promotion.link}>
                    <Image width={410} height={208} src={promotion.image} alt="promotion" />
                </Link>
            </div>
        ))}
      </Slider>
    </div>
  );
}

export default Responsive;
