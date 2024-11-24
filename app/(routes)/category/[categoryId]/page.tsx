// 'use client';

import qs from "query-string";
import { redirect } from "next/navigation";

import getCategory from "@/actions/get-category";

import getProducts from "@/actions/get-products";

import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";

import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";
import { SearchBar } from "@/components/ui/search";

import { Product } from "@/types";
import { CloudCog } from "lucide-react";

export const revalidate = 0;

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    search?: string;
  };
}

const CategoryPage: React.FC<CategoryPageProps> = async ({
  params,
  searchParams,
}) => {
  const searchTerm = searchParams.search || "";

  // Fetch products based on category and search term
  const products = await getProducts({
    categoryId: params.categoryId,
    // search: searchTerm,
  });

  const category = await getCategory(params.categoryId);

  return (
    <Container>
      <div className="bg-white space-y-10 pb-10">
        <Billboard data={category.billboard} />

        <div className="space-y-4">
          <SearchBar title={category.name} data={products} />
        </div>
      </div>
    </Container>
  );
};

export default CategoryPage;
