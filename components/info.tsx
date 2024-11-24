'use client';

import {  Phone } from "lucide-react";

import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import { Product } from "@/types";
import useCart from "@/hooks/use-cart";

interface InfoProps {
    data: Product;
}

const Info: React.FC<InfoProps> = ({
    data
}) => {

    const cart = useCart();

    const onAddToCart = () => {
        cart.addItem(data);
    }

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
            <div className="mt-3 flex items-end justify-between">
                <p className="text-2xl text-gray-900">
                    <Currency value={data?.price} />
                </p>
            </div>
            <hr className="my-4" />
            <div className="flex flex-col gap-y-6">
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">Description:</h3>
                </div>
                    <p>{data?.description}</p>
                
            </div>
            {
                parseInt(data?.quantity) !== 0 && (
                    <div className="mt-5 flex items-center gap-x-3">
                        <p className="flex justify-center mt-3">To buy products call on <Phone className="ml-3 mt-0.5 mr-0.5" /> <strong>88375-00440</strong></p>
                    </div>)
            }

        </div>
    )
}

export default Info
