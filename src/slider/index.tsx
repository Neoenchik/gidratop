'use client';

import Link from 'next/link';
import Image from 'next/image';

import styles from './slider.module.scss';

export default function Slider() {
    return (<div className={styles.slider}>
          <Image width={11} height={20} src="/Assets/icons/Bannerbutton/Vector.svg" alt="vector" className={styles.leftArrow}/>
          <Image width={20} height={7} src="/Assets/icons/RectangleSliderBlue.svg" alt="rectangle"/>
          <Image width={20} height={7} src="/Assets/icons/RectangleSlider.svg" alt="rectangle"/>
          <Image width={20} height={7} src="/Assets/icons/RectangleSlider.svg" alt="rectangle"/>
          <Image width={20} height={7} src="/Assets/icons/RectangleSlider.svg" alt="rectangle"/>
          <Image width={20} height={7} src="/Assets/icons/RectangleSlider.svg" alt="rectangle"/>
          <Image width={20} height={7} src="/Assets/icons/RectangleSlider.svg" alt="rectangle"/>
          <Image width={11} height={20} src="/Assets/icons/Bannerbutton/Vector.svg" alt="vector" className={styles.rightArrow}/>
        </div>  );
}
