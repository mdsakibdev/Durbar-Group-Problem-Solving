function selectBestDiscount(price, offers) {
  let bestOffer = null;
  let lowestPrice = price;

  for (const offer of offers) {
    if (price < offer.minPrice) {
      continue;
    }

    let discountedPrice;

    if (offer.type === "flat") {
      discountedPrice = price - offer.value;
    } else if (offer.type === "percent") {
      discountedPrice = price - price * (offer.value / 100);
    }

    discountedPrice = Math.max(0, discountedPrice);

    if (discountedPrice < lowestPrice) {
      lowestPrice = discountedPrice;
      bestOffer = offer;
    }
  }

  return bestOffer;
}