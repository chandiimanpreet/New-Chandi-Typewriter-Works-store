import { Color } from "@/types";


const getColors = async (): Promise<Color[]> => {
  const URL=`${process.env.NEXT_PUBLIC_API_URL}/colors`;
  const res = await fetch(URL);

  return res.json();
};

export default getColors;