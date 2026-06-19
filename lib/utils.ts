import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

export const WHATSAPP_NUMBER = '5511942492740'
export const WHATSAPP_MESSAGE = encodeURIComponent(
  'Olá! Vim pelo site e quero saber mais sobre os serviços da Memphis Growth.'
)
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`
