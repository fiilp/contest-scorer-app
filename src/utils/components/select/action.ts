export function selectedOptionFirst(
  selected: number,
  options: string[]
): string[] {
  const arr = [...options];
  const safeIndex = selected % options.length;
  const temp = arr[safeIndex];
  arr[safeIndex] = arr[0];
  arr[0] = temp;
  return arr;
}
