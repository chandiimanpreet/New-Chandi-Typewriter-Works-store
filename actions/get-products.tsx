import qs from "query-string";

import { Product } from "@/types";


interface Query {
    categoryId?: string;
    colorId?: string;
    sizeId?: string;
    isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
    
    const URL = `https://e-commerce--admin.vercel.app/api/dd5960db-046b-44c8-9875-8e3a5603dd6e/products`;
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