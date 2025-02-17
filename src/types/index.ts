export interface ProductResponse {
  status: string;
  message: string;
  products: Product[];
}

export interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  brand: string;
  model: string;
  color: string;
  category: Category;
  popular?: boolean;
  discount: number;
}

export enum Category {
  TV = "tv",
  AUDIO = "audio",
  LAPTOP = "laptop",
  MOBILE = "mobile",
  GAMING = "gaming",
  APPLIANCES = "appliances",
}
