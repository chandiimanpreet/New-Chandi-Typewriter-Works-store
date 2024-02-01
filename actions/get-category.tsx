import { Category } from "@/types";


const getCategory = async (id: string): Promise<Category> => {
  const URL = `https://e-commerce--admin.vercel.app/api/021c64e9-eba0-47f1-b365-aa1588550d1d/categories`;
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getCategory;