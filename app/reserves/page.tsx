"use client";

import React, { useMemo } from "react";
import useCategoryStore from "app/store";
import NoData from "components/NoData";
import categories from "app/mock/categories.json";
import fa from "app/lib/fa.json";
import GenerateStatus from "./generateStatus";

export default function ReservesPage() {
  const position = useCategoryStore((state) => state.position);
  const productId = useCategoryStore((state) => state.selectedProductId);
  const categoryId = useCategoryStore((state) => state.selectedCategoryId);

  const category = useMemo(
    () => categories.find((item) => item.id === categoryId),
    [categoryId]
  );
  const product = useMemo(
    () => category?.products.find((item) => item.id === productId),
    [productId, category]
  );

  const list = [
    { title: fa.reserves.category, value: category?.name },
    { title: fa.reserves.product, value: product?.name },
    { title: fa.reserves.price, value: product?.price + "$" },
    {
      title: fa.reserves.position,
      value: (
        <div className="text-left">
          <div className="">{position?.[0]}</div>
          <div className="">{position?.[1]}</div>
        </div>
      ),
    },
    { title: fa.reserves.status, value: <GenerateStatus /> },
  ];
  return (
    <div className="mx-auto mt-10 max-w-md">
      {position ? (
        <div className="border border-ash50 p-5 rounded-lg">
          {list.map((item) => (
            <div key={item.title} className="flex justify-between">
              {item.title}: <span className="font-bold">{item.value}</span>
            </div>
          ))}
        </div>
      ) : (
        <NoData />
      )}
    </div>
  );
}
