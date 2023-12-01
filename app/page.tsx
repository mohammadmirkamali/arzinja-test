import Categories from "./home/categories";
import Products from "./home/products";

export default function Home() {
  return (
    <div className="flex items-center w-[1200px] m-auto mt-14 justify-between">
      <Categories />
      <Products />
    </div>
  );
}
