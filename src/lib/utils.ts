import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getLastItem<T>(arr: T[]): [T, T[]] {
  const lastItem = arr[arr.length - 1];
  const restItemArr = arr.slice(0, arr.length - 1);

  return [lastItem, restItemArr];
}
