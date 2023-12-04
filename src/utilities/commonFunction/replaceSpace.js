export const replaceSpace = (str) => {
  return str.replace(/ /g, '_');
};

export const camelCase = (str) => {
  const checkEmpty = ['', undefined, null, ' '];
  if (checkEmpty.includes(str)) return '';
  return str.split(' ')
    .map((a) => a.trim())
    .map((a) => a[0].toUpperCase() + a.substring(1))
    .join(' ');
};
