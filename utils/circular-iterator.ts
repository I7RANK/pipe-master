export function createCircularIterator(iterations: number): () => number {
  let index = 0;

  return function () {
    const value = index;
    index = (index + 1) % iterations;
    return value;
  };
}
