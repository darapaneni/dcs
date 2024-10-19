/**
 * A Zustand store for managing pricing state in a React application.
 * This store is used to handle the selected pricing option and provide methods
 * to update or clear the selected pricing.
 * 
 * @module usePricingStore
 * 
 * @typedef {Object} PricingState
 * @property {Object|null} selectedPricing - The currently selected pricing option, or null if no pricing is selected.
 * @property {function} setSelectedPricing - Function to set the selected pricing option.
 * @param {Object} pricing - The pricing option to be set as the selected pricing.
 * 
 * @returns {void} - This function does not return a value.
 * 
 * @property {function} clearSelectedPricing - Function to clear the selected pricing option.
 * 
 * @returns {void} - This function does not return a value.
 * 
 * @example
 * const pricingStore = usePricingStore.getState();
 * 
 * // Set a pricing option
 * pricingStore.setSelectedPricing({ title: 'Premium Plan', price: 99 });
 * 
 * // Clear the selected pricing option
 * pricingStore.clearSelectedPricing();
 */

import {create} from "zustand";

const usePricingStore = create((set) => ({
    selectedPricing: null,
    setSelectedPricing: (pricing) => set({selectedPricing: pricing}),
    clearSelectedPricing: () => set({selectedPricing: null}),
}));
export default usePricingStore;