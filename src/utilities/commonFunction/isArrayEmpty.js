export const isDataEmptyCheck = (data) => {
  const isDataEmpty = Array.isArray(data) && data.length === 0;
  return isDataEmpty;
};
