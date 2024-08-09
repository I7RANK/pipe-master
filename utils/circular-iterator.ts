export function createCircularIterator(
  iterations: number,
  initialIndex: null | number = null
): () => number {
  let index = 0;
  if (initialIndex !== null) index = initialIndex;

  return function () {
    const value = index;
    index = (index + 1) % iterations;
    return value;
  };
}
