import { Size } from "@/types";


const getSizes = async (): Promise<Size[]> => {
  const URL=`https://e-commerce--admin.vercel.app/api/021c64e9-eba0-47f1-b365-aa1588550d1d/sizes`;
  const res = await fetch(URL);

  return res.json();
};

export default getSizes;