import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import Head from "next/head";

export const revalidate = 0;

const Homepage = async () => {

    const products = await getProducts({ isFeatured: true });
    const billboard = await getBillboard('082673ed-87f7-4605-adfa-075d7854fa04');

    return (
        <Container>
            <Head>
                <script
                    async
                    src={`https://www.googletagmanager.com/gtag/js?id=UA-300288021-1`} />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'UA-300288021-1', {
                            page_path: window.location.pathname,
                        });
                        `
                    }}
                />
            </Head>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard} />

                <div className="flex flex-col gap-y-8 sm:px-6 lg:px-8">
                    <ProductList title="Featured Products" items={products} />
                </div>
            </div>
        </Container>
    )
}

export default Homepage;
