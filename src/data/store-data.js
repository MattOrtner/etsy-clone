const StoreData = {
  name: "NameOfCompany",
  totalStoreSales: "30,001",
  totalStoreReviews: "2,380",
  starRating: ["", "", "", ""],
  isStarSeller: true,
  isGiftWrapping: true,
  acceptsReturns: false,
  isAcceptsReturns: this.acceptsReturns
    ? "You can return an item with defects within 30 days"
    : "We cannot accept returns at this time, sorry for the inconvenience.",
};

export default StoreData;
