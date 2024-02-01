import { Product } from "@/types";


const getProduct = async (id: string): Promise<Product> => {
  const URL = `http://localhost:3000/api/021c64e9-eba0-47f1-b365-aa1588550d1d/products`;
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getProduct;