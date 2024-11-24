import { Product } from "@/types";

const getProduct = async (id: string): Promise<Product> => {
  const URL =
    "https://new-chandi-admin-vercel.vercel.app/api/4452bdaf-6c8d-4c79-b1dd-ccc0d9adf9b7/products";
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getProduct;
