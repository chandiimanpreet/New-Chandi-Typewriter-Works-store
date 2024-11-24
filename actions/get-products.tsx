import qs from "query-string";

import { Product } from "@/types";

interface Query {
  categoryId?: string;
  isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
  const URL =
    "https://new-chandi-admin-vercel.vercel.app/api/4452bdaf-6c8d-4c79-b1dd-ccc0d9adf9b7/products";
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      categoryId: query.categoryId,
      isFeatured: query.isFeatured,
    },
  });

  const res = await fetch(url);

  return res.json();
};

export default getProducts;
