'use client';

import Image from "next/image";
import { Product } from "@/types";
import { MouseEventHandler } from "react";
import { useRouter } from "next/navigation";
import { Expand, ShoppingCart } from "lucide-react";

import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";


interface ProductCardProps {
    data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({
    data
}) => {

    const cart = useCart();
    const previewModal = usePreviewModal();
    const router = useRouter();

    const handleClick = () => {
        router.push(`/product/${data?.id}`);
    };

    const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {

        event.stopPropagation();

        previewModal.onOpen(data);
    };

    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {

        event.stopPropagation();

        cart.addItem(data);
    };

    // console.log(data)
    // console.log(typeof parseInt(data?.quantity))

    return (
        <div onClick={handleClick} id={`product-${data.id}`} className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
            {/* Images and Actions */}
            <div className="aspect-square rounded-xl bg-gray-100 relative">
                <Image
                    src={data?.images?.[0]?.url}
                    fill
                    alt="Image"
                    className="aspect-square object-cover rounded-md"
                />
                <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
                    <div className="flex gap-x-6 justify-center">
                        <IconButton onClick={onPreview}
                            icon={<Expand size={20} className="text-gray-600" />}
                        />
                        {
                            parseInt(data?.quantity) !== 0 && (
                                <IconButton onClick={onAddToCart}
                                    icon={<ShoppingCart size={20} className="text-gray-600" />}
                                />)
                        }
                    </div>
                </div>
            </div>
            {/* Description */}
            <div>
                <p className="font-semibold text-lg">
                    {data.name}
                </p>
                <p className="text-sm text-gray-500">
                    {data.category?.name}
                </p>
            </div>
            {/* Price */}
            <div className="flex items-center justify-between">
                <Currency value={data?.price} />
                {
                    parseInt(data?.quantity) === 0 && <p className="text-red-600 font-medium">Out of stock</p>
                }
                {
                    parseInt(data?.quantity) !== 0 && <p className="text-green-600 font-medium">{data?.quantity} in stock</p>
                }
            </div>
        </div>
    )
}

export default ProductCard
