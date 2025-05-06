import Api from "../api/Api";
import { Product } from "../types/Types";

const getProducts = async (): Promise<Product[]> => {
  const response = await Api.get('/info');
  return response.data;
};

const postProduct = async (product: Product): Promise<Product> => {
  const response = await Api.post('/info', product);
  return response.data;
};

export const ApiCalls = {
  getProducts,
  postProduct
};