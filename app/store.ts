import { create } from "zustand";
import { BuyProductType } from "./lib/types";

type StoreType = {
  selectedCategoryId: number | null;
  selectedProductId: number | null;
  buyProduct: BuyProductType | null;
  setSelectedProductId: (id: number | null) => void;
  setSelectedCategoryId: (id: number) => void;
  setBuyProduct: (value: BuyProductType) => void;
};

const useCategoryStore = create<StoreType>((set) => ({
  buyProduct: null,
  setBuyProduct: (value) => set({ buyProduct: value }),
  selectedCategoryId: null,
  setSelectedCategoryId: (id: number) => set({ selectedCategoryId: id }),
  selectedProductId: null,
  setSelectedProductId: (id: number | null) => set({ selectedProductId: id }),
}));

export default useCategoryStore;
