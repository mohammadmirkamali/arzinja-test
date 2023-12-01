import { create } from "zustand";

type StoreType = {
  selectedCategoryId: number | null;
  selectedProductId: number | null;
  position: [number, number] | null;
  setSelectedProductId: (id: number | null) => void;
  setSelectedCategoryId: (id: number) => void;
  setPosition: (value: [lat: number, lng: number]) => void;
};

const useCategoryStore = create<StoreType>((set) => ({
  position: null,
  setPosition: (value) => set({ position: value }),
  selectedCategoryId: null,
  setSelectedCategoryId: (id: number) => set({ selectedCategoryId: id }),
  selectedProductId: null,
  setSelectedProductId: (id: number | null) => set({ selectedProductId: id }),
}));

export default useCategoryStore;
