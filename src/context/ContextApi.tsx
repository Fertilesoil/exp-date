import React from "react";
import { Product, ProductContextType } from "../types/Types";
import { ApiCalls } from "../http/Calls";


const ProductContext = React.createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const [products, setProducts] = React.useState<Product[]>([]);
  const [vacuo, setVacuo] = React.useState<Product[]>([]);
  const [salgados, setSalgados] = React.useState<Product[]>([]);
  const [congelados, setCongelados] = React.useState<Product[]>([]);

  const separateProducts = (products: Product[]) => {
    if (products !== undefined) {
      const salgados = products.filter(product => product.category === 'salgados');
      const vacuoAqui = products.filter(product => product.category === 'vacuo');
      const congelados = products.filter(product => product.category === 'congelados');

      console.log("Vacuo: ", vacuoAqui);
      console.log("Salgados: ", salgados);
      console.log("Congelados: ", congelados);

      setSalgados(salgados);
      setVacuo(vacuoAqui);
      setCongelados(congelados);
    }
  }

  const fetchProducts = async () => {
    try {
      const data = await ApiCalls.getProducts();
      setProducts(data);
    } catch (error) {
      console.log("Erro ao buscar produtos: ", error);
    }
  };

  const registerProduct = async (product: Product) => {
    try {
      const newProduct = await ApiCalls.postProduct(product);
      setProducts((prevProducts) => [...prevProducts, newProduct]);
    } catch (error) {
      console.log("Erro ao adicionar produto: ", error);
    }
  };

  React.useEffect(() => {
    fetchProducts();
  }, []);

  React.useEffect(() => {
    if (products.length > 0) {
      separateProducts(products)
    }
  }, [products]);

  // React.useEffect(() => {
  //   console.log("Vacuo: ", vacuo);
  //   console.log("Salgados: ", salgados);
  //   console.log("Congelados: ", congelados);
  // }, [vacuo, salgados, congelados]);

  const shared = {
    products,
    fetchProducts,
    registerProduct,
    vacuo,
    salgados,
    congelados
  };

  return (
    <ProductContext.Provider value={shared}>
      {children}
    </ProductContext.Provider>
  )
}

export const useProductContext = () => {
  const context = React.useContext(ProductContext);
  if (!context) {
    throw new Error('useProdutoContext deve ser usado dentro do ProdutoProvider');
  }
  return context;
};