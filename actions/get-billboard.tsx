import { Billboard } from "@/types";


const getBillboard = async (id: string): Promise<Billboard> => {
  const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards` || "https://new-chandi-admin-vercel.vercel.app/api/4452bdaf-6c8d-4c79-b1dd-ccc0d9adf9b7/billboards";
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getBillboard;