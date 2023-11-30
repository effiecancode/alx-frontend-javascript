import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const Arr = [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34),
  ];
  return Arr;
}

/**
 * create the function
 * always use const if the object will not be reassigned
 * serve new instances of ClassRoom class objects to the array
 */
