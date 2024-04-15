export interface IProduct {
  id: number;
  name: string;
  brand: string;
  description?: string;
  photo: string;
  price: number;
  inCart?: number;
}