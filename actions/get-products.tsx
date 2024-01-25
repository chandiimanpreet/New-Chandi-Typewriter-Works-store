import qs from "query-string";

import { Product } from "@/types";


interface Query {
    categoryId?: string;
    colorId?: string;
    sizeId?: string;
    isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
    
    const URL = `https://e-commerce--admin.vercel.app/api/480a7d7d-f596-483c-99cf-1ef0463d0659/products`;
    const url = qs.stringifyUrl({
        url: URL,
        query: {
            colorId: query.colorId,
            sizeId: query.sizeId,
            categoryId: query.categoryId,
            isFeatured: query.isFeatured,
        },
    });

    const res = await fetch(url);

    return res.json();
};

export default getProducts;