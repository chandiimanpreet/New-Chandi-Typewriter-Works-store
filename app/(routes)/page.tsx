import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import NoResults from "@/components/ui/no-results";
import { SearchBar } from "@/components/ui/search";

export const revalidate = 0;

const Homepage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("caf26d36-8fe4-413d-82d9-e94484392d8b");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />

        <div className="space-y-4">
          <SearchBar title="Featured Products" data={products} />
        </div>
      </div>
    </Container>
  );
};

export default Homepage;
