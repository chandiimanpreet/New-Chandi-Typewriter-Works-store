import { Category } from "@/types";


const getCategories = async (): Promise<Category[]> => {

  const URL = `https://e-commerce--admin.vercel.app/api/480a7d7d-f596-483c-99cf-1ef0463d0659/categories`;
  const res = await fetch(URL);

  return res.json();
};

export default getCategories;