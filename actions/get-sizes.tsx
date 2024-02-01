import { Size } from "@/types";


const getSizes = async (): Promise<Size[]> => {
  const URL=`http://localhost:3000/api/021c64e9-eba0-47f1-b365-aa1588550d1d/sizes`;
  const res = await fetch(URL);

  return res.json();
};

export default getSizes;