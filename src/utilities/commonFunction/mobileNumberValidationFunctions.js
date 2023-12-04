export const isValidMobileNumber = (mobile, startRange, endRange) => {
  const number = Number(mobile)
  return number >= startRange && number <= endRange
}

export const validateNumber = (number, regexPattern) => {
  return regexPattern.test(number)
}
