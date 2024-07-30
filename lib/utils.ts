import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(isoDate: string): string {
  // Create a Date object from the ISO date string
  const date = new Date(isoDate);

  // Extract day, month, and year
  const day = date.getUTCDate();
  const month = date.toLocaleString('en-US', { month: 'short' }); // Short month name (e.g., Jan, Feb, Mar)
  const year = date.getUTCFullYear();

  // Format the date as DD M YYYY
  return `${day < 10 ? '0' + day : day} ${month} ${year}`;
}
