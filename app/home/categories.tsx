import React from "react";
import categories from "app/mock/categories.json";

const Categories: React.FC = () => {
  return (
    <ul className="menu menu-lg bg-base-200 w-56 rounded-box">
      {categories.map((item) => (
        <li key={item.id}>
          <a>{item.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default Categories;
