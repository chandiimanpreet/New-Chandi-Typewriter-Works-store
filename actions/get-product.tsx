import { Product } from "@/types";


const getProduct = async (id: string): Promise<Product> => {
  const URL = `https://e-commerce--admin.vercel.app/api/480a7d7d-f596-483c-99cf-1ef0463d0659/products`;
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getProduct;