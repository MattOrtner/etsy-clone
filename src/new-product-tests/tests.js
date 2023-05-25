export const testPhoto = (images) => {
  return images.length > 0;
};

export const testTitle = (title) => {
  return title.length >= 4;
};

export const testRenewal = (renewalChoice) => {
  return renewalChoice.length > 0;
};

export const testProductType = (productType) => {
  return productType.length > 0;
};

export const testAboutDetails = (aboutSelections) => {
  return Object.keys(aboutSelections).length === 3;
};

export const testDescription = (description) => {
  return description.length >= 8;
};

export const testPrice = (price) => {
  const priceValue = parseInt(price);
  return priceValue >= 1;
};

export const testQuantity = (quantity) => {
  return quantity >= 1;
};

export const testLWH = (LWH) => {
  return Object.keys(LWH).length === 3;
};
