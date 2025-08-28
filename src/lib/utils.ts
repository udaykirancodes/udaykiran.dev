import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const generateOgImageUrl = (title: string, description: string) => {
  const ogImageUrl = `/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`
  return ogImageUrl
}
