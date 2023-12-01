"use client";

import React, { useCallback, useMemo, useState } from "react";
import categories from "app/mock/categories.json";
import useCategoryStore from "app/store";
import fa from "app/lib/fa.json";
import Map from "components/Map";
import UserPosition from "./userPosition";

const Products: React.FC = () => {
  const selectedCategoryId = useCategoryStore(
    (state) => state.selectedCategoryId
  );
  const selectedProductId = useCategoryStore(
    (state) => state.selectedProductId
  );
  const setSelectedProductId = useCategoryStore(
    (state) => state.setSelectedProductId
  );

  const products = useMemo(
    () => categories.find((item) => item.id === selectedCategoryId)?.products,
    [selectedCategoryId]
  );

  const handleSelectProduct = useCallback(
    (id: number | null) => {
      setSelectedProductId(id);
    },
    [setSelectedProductId]
  );

  console.log("products");
  return (
    <div className="flex flex-1 flex-wrap justify-center gap-6">
      {products ? (
        products.map((product) => (
          <div
            key={product.id}
            className="card w-72 xl:w-96 bg-ash20 shadow-xl h-fit"
          >
            <div className="card-body">
              <h2 className="card-title">{product.name}</h2>
              <p>{product.price}</p>
              {selectedProductId !== product.id ? (
                <div className="card-actions justify-end">
                  <button
                    onClick={(): void => handleSelectProduct(product.id)}
                    className="btn btn-primary"
                  >
                    {fa.product.buy}
                  </button>
                </div>
              ) : (
                <UserPosition />
              )}
            </div>
          </div>
        ))
      ) : (
        <div role="alert" className="alert">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-info shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>{fa.product.chooseCategory}</span>
        </div>
      )}
    </div>
  );
};

export default Products;
