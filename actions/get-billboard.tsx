import { Billboard } from "@/types";


const getBillboard = async (id: string): Promise<Billboard> => {
  const URL = `http://localhost:3000/api/dd5960db-046b-44c8-9875-8e3a5603dd6e/billboards`;
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getBillboard;