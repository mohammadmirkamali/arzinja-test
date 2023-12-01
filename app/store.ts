import { create } from "zustand";

type StoreType = {
  selectedCategoryId: number | null;
  selectedProductId: number | null;
  setSelectedProductId: (id: number) => void;
  setSelectedCategoryId: (id: number) => void;
};

const useCategoryStore = create<StoreType>((set) => ({
  selectedCategoryId: null,
  setSelectedCategoryId: (id: number) => set({ selectedCategoryId: id }),
  selectedProductId: null,
  setSelectedProductId: (id: number) => set({ selectedProductId: id }),
}));

export default useCategoryStore;
