export function checkArray(array, value) {
  return array.includes(value);
}

export function removeArray(array, value) {
  return array.filter((ele) => {
    return ele !== value;
  });
}

export function addArray(array, value) {
  return array.concat(value);
}

export const filterArrayAsPerSelection = (array, value) => {
  const filteredArray = array.filter((item) => value.includes(item.id));
  filteredArray.sort((a, b) => value.indexOf(a.id) - value.indexOf(b.id));
  const remainingArray = array.filter((item) => !value.includes(item.id));
  const resultArray = [...filteredArray, ...remainingArray];
  return resultArray;
};
