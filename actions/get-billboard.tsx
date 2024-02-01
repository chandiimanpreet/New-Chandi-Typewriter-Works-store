import { Billboard } from "@/types";


const getBillboard = async (id: string): Promise<Billboard> => {
  const URL = `https://e-commerce--admin.vercel.app/api/021c64e9-eba0-47f1-b365-aa1588550d1d/billboards`;
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getBillboard;