import { Color } from "@/types";


const getColors = async (): Promise<Color[]> => {
  const URL=`http://localhost:3000/api/021c64e9-eba0-47f1-b365-aa1588550d1d/colors`;
  const res = await fetch(URL);

  return res.json();
};

export default getColors;