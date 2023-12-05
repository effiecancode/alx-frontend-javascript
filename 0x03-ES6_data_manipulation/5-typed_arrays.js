export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position out of range');
  }

  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);

  view.setInt8(position, value);
  return view;
}

// test function
// const typedArr = createInt8TypedArray(10, 2, 69);
// console.log(typedArr);
