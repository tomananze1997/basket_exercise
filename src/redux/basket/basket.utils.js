export const RemoveItemFromBasket = (items, item) => {
  const foundItem = items.find(({ id }) => id === item.id);
  let Items;
  if (foundItem.quantity > 1) {
    return;
  } else {
    return state.items.filter((item) => item.id !== foundItem.id);
  }
};
