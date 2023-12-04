export function removeEscapeSequence(str) {
  return str.replace(/\\"/g, '"');
}
