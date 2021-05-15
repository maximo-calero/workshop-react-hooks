export const truncateLongString = (str: string) => {
  const sliceBoundary = (str: string) => str.substr(0, str.lastIndexOf(' '));
  const truncate = (n: number, useWordBoundary: number) =>
    str.length <= n
      ? str
      : `${
          useWordBoundary
            ? sliceBoundary(str.slice(0, n - 1))
            : str.substr(0, n - 1)
        }...`;
  return { full: str, truncate };
};