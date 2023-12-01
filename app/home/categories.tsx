"use client";

import React, { useCallback } from "react";
import categories from "app/mock/categories.json";
import useCategoryStore from "app/store";

const Categories: React.FC = () => {
  const selectedCategoryId = useCategoryStore(
    (state) => state.selectedCategoryId
  );
  const setSelectedCategoryId = useCategoryStore(
    (state) => state.setSelectedCategoryId
  );

  console.log(selectedCategoryId);
  const handleSelectCategory = useCallback(
    (id: number) => {
      setSelectedCategoryId(id);
    },
    [setSelectedCategoryId]
  );

  return (
    <ul className="menu menu-lg bg-base-200 w-56 rounded-box">
      {categories.map((item) => (
        <li key={item.id} onClick={(): void => handleSelectCategory(item.id)}>
          <a className={`${selectedCategoryId === item.id ? "active" : ""}`}>
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Categories;
