export const getTotalPrice = (selectedItems) => {
  return selectedItems.reduce((total, item) => {
    const flavorPrice = item.flavor.price;
    const addonPrice = item.flavor.addonPrice * item.addons.length;

    return total + flavorPrice + addonPrice;
  }, 0);
};
