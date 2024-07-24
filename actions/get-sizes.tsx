import { Size } from "@/types";


const getSizes = async (): Promise<Size[]> => {
  const URL=`${process.env.NEXT_PUBLIC_API_URL}/sizes`;
  const res = await fetch(URL);

  return res.json();
};

export default getSizes;