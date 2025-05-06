export type Product = {
  id?: string;
  name: string;
  category: 'salgados' | 'vacuo' | 'congelados';
  expDate: string[];
};

export type ProductContextType = {
  products: Product[];
  fetchProducts: () => void;
  registerProduct: (product: Product) => void;
  vacuo: Product[];
  salgados: Product[];
  congelados: Product[];
};

export const categoryNames: Record<string, string> = {
  salgado: "Salgados",
  vacuo: "Vácuo",
  congelado: "Congelados"
};