import { Category } from "@/types";


const getCategories = async (): Promise<Category[]> => {

  const URL = `https://e-commerce--admin.vercel.app/api/dd5960db-046b-44c8-9875-8e3a5603dd6e/categories`;
  const res = await fetch(URL);

  return res.json();
};

export default getCategories;