'use client';

import qs from "query-string";
import { useRouter, useSearchParams } from "next/navigation";

import { Color, Size } from "@/types";
import Button from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

interface FilterProps {
    valueKey: string;
    name: string;
    data: (Size | Color)[];
    clear: boolean;
}

const Filter: React.FC<FilterProps> = ({
    valueKey,
    name,
    data,
    clear
}) => {

    const searchParams = useSearchParams();
    const router = useRouter();

    const selectedValue = searchParams.get(valueKey);

    const clearAll = () => {
        const query = {
            ['colorId']: null,
            ['sizeId']: null,
        };
        const url = qs.stringifyUrl({
            url: window.location.href,
            query
        }, { skipNull: true });

        router.push(url);
    }

    const onClick = (id: string) => {
        const current = qs.parse(searchParams.toString());

        const query = {
            ...current,
            [valueKey]: id
        };

        if (current[valueKey] === id) {
            query[valueKey] = null;
        }

        const url = qs.stringifyUrl({
            url: window.location.href,
            query
        }, { skipNull: true });

        router.push(url);
    };

    return (
        <div className="mb-8">
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{name}</h3>
                {
                    clear && (
                        <span className="flex justify-end cursor-pointer" onClick={clearAll} >
                            <p className="font-semibold">Clear</p>
                            <X />
                        </span>

                    )
                }
            </div>
            <hr className="my-4" />
            <div className="flex flex-wrap gap-2">
                {data.map((filter) => (
                    <div key={filter.id} className="flex items-center">
                        <Button
                            className={cn(
                                'rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300',
                                selectedValue === filter.id && 'bg-black text-white'
                            )}
                            onClick={() => onClick(filter.id)}
                        >
                            {filter.name}
                        </Button>
                    </div>
                ))}
            </div>

        </div>
    )

}

export default Filter;