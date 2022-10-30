export interface Avo {
  name: string;
  id: string;
  sku: string;
  price: number;
  image: string;
  attributes: Attributes;
}

export interface Attributes {
  description: string;
  shape: string;
  hardiness: string;
  taste: string;
}
