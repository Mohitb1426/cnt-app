export const isStringEmpty = (value) => {
  return typeof value === 'string' && value?.trim()?.length === 0;
};
