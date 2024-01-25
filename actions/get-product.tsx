import { Product } from "@/types";


const getProduct = async (id: string): Promise<Product> => {
  const URL = `https://e-commerce--admin.vercel.app/api/dd5960db-046b-44c8-9875-8e3a5603dd6e/products`;
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getProduct;