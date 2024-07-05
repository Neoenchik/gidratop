// src/types/product.ts
export interface ProductCard {
    id: number;
    imageUrl: string;
    name: string;
    brand: string;
    country: string;
    availability: boolean;
    price: string;
  }

export interface Categories {
  image: string;
  name: string;
}

export interface News {
  image: string;
  name: string;
  str1: string;
  str2: string;
}

export interface Promotions{
  image: string;
  link: string;
}  