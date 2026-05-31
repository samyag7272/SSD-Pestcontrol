export interface Service {
  id: string;
  name: string;
  shortName: string;
  description: string;
  benefits: string[];
}

export interface Location {
  id: string;
  name: string;
  phone: string;
  address?: string;
}
