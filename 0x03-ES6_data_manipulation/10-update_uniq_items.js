export default function updateUniqueItems(items) {
  // ensure if quantity can be updated, items should be a map
  if (!(items instanceof Map)) {
    throw new Error('Cannot process');
  }
  // for each entry where quantity is 1, set quantity to 100
  for (const [key, value] of items) {
    if (value === 1) {
      items.set(key, 100);
    }
  }
  return items;
}

// test function

// import groceriesList from "./9-groceries_list.js";

// const map = groceriesList();
// console.log(map);

// updateUniqueItems(map)
// console.log(map);
