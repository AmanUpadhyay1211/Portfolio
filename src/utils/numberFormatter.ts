export function numberFormatter(input : string | number): string {
  // Convert to number if it's a string
  const num = typeof input === 'string' ? Number(input) : input;

  // Invalid input handling
  if (isNaN(num)) return (input as string);

  // Format based on size
  if (num >= 1_000_000_000) {
    return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'B';
  } else if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
  } else if (num >= 1_000) {
    return (num / 1_000).toFixed(1).replace(/\.0$/, '') + 'K';
  }

  return num.toString();
}
