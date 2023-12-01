"use client";

import React, { useCallback, useMemo } from "react";
import categories from "app/mock/categories.json";
import useCategoryStore from "app/store";
import fa from "app/lib/fa.json";
import NoData from "components/NoData";
import dynamic from "next/dynamic";

const UserPosition = dynamic(() => import("./userPosition"));

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
        <NoData message={fa.product.chooseCategory} />
      )}
    </div>
  );
};

export default Products;
