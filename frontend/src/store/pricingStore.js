import {create} from "zustand";

const usePricingStore = create((set) => ({
    selectedPricing: null,
    setSelectedPricing: (pricing) => set({selectedPricing: pricing}),
    clearSelectedPricing: () => set({selectedPricing: null}),
}));
export default usePricingStore;