
export interface Car {
  id: string;
  name: string;
  type: 'Sedan' | 'SUV' | 'Luxury' | 'Economical';
  price: string;
  image: string;
  features: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
