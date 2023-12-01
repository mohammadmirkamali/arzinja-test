import { create } from "zustand";

type StoreType = {
  selectedCategoryId: number | null;
  setSelectedCategoryId: (id: number) => void;
};

const useCategoryStore = create<StoreType>((set) => ({
  selectedCategoryId: null,
  setSelectedCategoryId: (id: number) => set({ selectedCategoryId: id }),
}));

export default useCategoryStore;
