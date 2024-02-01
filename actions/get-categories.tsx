import { Category } from "@/types";


const getCategories = async (): Promise<Category[]> => {

  const URL = `https://e-commerce--admin.vercel.app//021c64e9-eba0-47f1-b365-aa1588550d1d/categories`;
  const res = await fetch(URL);

  return res.json();
};

export default getCategories;