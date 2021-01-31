/**
 * Check if `jsonObject` is `null`, `undefined` or has no keys.
 * @returns `true` if `jsonObject` is `{}`, or `null`, or `undefined`
 */
export function isJsonEmpty(jsonObject: any | null | undefined): boolean {
  if (!jsonObject) {
    return true;
  }
  if (Object.keys(jsonObject).length < 1) {
    return true;
  }
  return false;
}

/**
 * Check if `array` is `null`, `undefined` or its `length` is 0.
 * @returns `true` if `array` is `[]`, or `null`, or `undefined`
 */
export function isArrayEmpty(array: any[] | null | undefined): boolean {
  if (!array) {
    return true;
  }
  if (array.length < 1) {
    return true;
  }
  return false;
}
