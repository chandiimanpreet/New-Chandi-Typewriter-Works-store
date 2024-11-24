"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";

import { Product } from "@/types";
import NoResults from "./no-results";
import ProductCard from "./product-card";
import { Search } from "lucide-react";

interface SearchBarProps {
  data: Product[];
  title: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ data, title }) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [filteredProducts, setFilteredProducts] =
    React.useState<Product[]>(data);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Filter products based on the search term
    const filtered = data.filter((product) =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredProducts(filtered);
  };
  console.log(filteredProducts);
  return (
    <>
      <div className="px-8">
        <div className="flex !justify-between">
          <h3 className="font-bold text-3xl">{title}</h3>

          <div className="flex pb-12 w-1/2">
            <div className="relative">
              <div className="absolute inset-y-0 start-0  ps-3">
                <Search className="w-4 h-4 mt-2.5 text-gray-500 dark:text-gray-400" />
              </div>
            </div>
            <Input
              placeholder="Search Products..."
              className="lg:grid lg:grid-cols-3 p-4 ps-8"
              value={searchTerm}
              onChange={handleInputChange}
              name="search"
            />
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
          <div className="mt-6 lg:col-span-4 lg:mt-0">
            {filteredProducts.length === 0 && <NoResults />}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {filteredProducts.map((item) => (
                <ProductCard key={item.id} data={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
