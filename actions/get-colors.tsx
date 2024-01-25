import { Color } from "@/types";


const getColors = async (): Promise<Color[]> => {
  const URL=`http://localhost:3000/api/dd5960db-046b-44c8-9875-8e3a5603dd6e/colors`;
  const res = await fetch(URL);

  return res.json();
};

export default getColors;