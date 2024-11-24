import { Category } from "@/types";


const getCategory = async (id: string): Promise<Category> => {
  const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories` || "https://new-chandi-admin-vercel.vercel.app/api/4452bdaf-6c8d-4c79-b1dd-ccc0d9adf9b7/categories";
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getCategory;