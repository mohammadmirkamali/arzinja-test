"use client";

import React, { useMemo } from "react";
import useCategoryStore from "app/store";
import NoData from "components/NoData";
import fa from "app/lib/fa.json";
import GenerateStatus from "./generateStatus";

export default function ReservesPage() {
  const buyProduct = useCategoryStore((state) => state.buyProduct);

  const list = [
    { title: fa.reserves.category, value: buyProduct?.categoryName },
    { title: fa.reserves.product, value: buyProduct?.productName },
    { title: fa.reserves.price, value: buyProduct?.price + "$" },
    {
      title: fa.reserves.position,
      value: (
        <div className="text-left">
          <div className="">{buyProduct?.position?.[0]}</div>
          <div className="">{buyProduct?.position?.[1]}</div>
        </div>
      ),
    },
    { title: fa.reserves.status, value: <GenerateStatus /> },
  ];
  return (
    <div className="mx-auto mt-10 max-w-md">
      {buyProduct ? (
        <div className="border border-ash50 p-5 rounded-lg">
          {list.map((item) => (
            <div key={item.title} className="flex mb-3 justify-between">
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
