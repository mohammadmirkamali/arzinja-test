import Categories from "app/home/categories";
import Products from "app/home/products";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center md:items-start md:flex-row md:mx-40 m-auto mt-14 gap-8 justify-between">
      <Categories />
      <Products />
    </div>
  );
}
