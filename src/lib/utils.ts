import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Generates a random order ID with a specified prefix
 * @param prefix - The prefix to use for the order ID (default: 'CC')
 * @returns A string with the format "CC-XXXXXX" where X is a random digit
 */
export function generateOrderId(prefix: string = 'CC'): string {
  // Generate a 6-digit random number
  const randomDigits = Math.floor(100000 + Math.random() * 900000);
  return `${prefix}-${randomDigits}`;
} 