import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const ENV_VARIABLES = {
  BASE_URL: `${import.meta.env.VITE_BASE_URL}`,
};
