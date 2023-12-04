export default function getListStudents() {
  const obj1 = {
    name: 'Guillaume',
    id: 1,
    location: 'San Francisco',
  };

  const obj2 = {
    name: 'James',
    id: 2,
    location: 'Columbia',
  };

  const obj3 = {
    name: 'Serena',
    id: 5,
    location: 'San Francisco',
  };

  // had initially used (...) spread oparator, but it unpacks and merges
  // i need to return an array of objects, not merged elements
  const arr = [obj1, obj2, obj3];
  return arr;
}

// function test

// const list = getListStudents();
// console.log(list);
