export const removeSecondsFromTime = (timeString) => {
  if (timeString) {
    const timeParts = timeString.split(':');
    timeParts.pop();
    return timeParts.join(':');
  }
  return '';
};
