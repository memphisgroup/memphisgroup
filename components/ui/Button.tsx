'use client'

import {
  forwardRef,
  type ButtonHTMLAttributes,
  type AnchorHTMLAttributes,
  type ReactNode,
  type MouseEventHandler,
} from 'react'
import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl'

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-gold-gradient text-carbon-dark font-bold shadow-gold-glow-sm hover:shadow-gold-glow hover:scale-[1.02] active:scale-[0.98]',
  secondary:
    'bg-white/10 text-white border border-white/20 hover:bg-white/15 hover:border-white/30 backdrop-blur-sm',
  ghost: 'bg-transparent text-gold-primary hover:bg-gold-primary/10',
  outline:
    'bg-transparent text-white border border-white/30 hover:border-gold-primary hover:text-gold-primary',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-3 text-base rounded-xl',
  lg: 'px-8 py-4 text-lg rounded-xl',
  xl: 'px-10 py-5 text-xl rounded-2xl',
}

const baseStyles =
  'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-primary focus-visible:ring-offset-2 focus-visible:ring-offset-carbon-dark disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none'

// ─── Button (elemento <button>) ──────────────────────────────────────────────

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  children?: ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'primary', size = 'md', className, children, ...props },
  ref
) {
  const classes = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  )
  return (
    <button ref={ref} className={classes} {...props}>
      {children}
    </button>
  )
})

Button.displayName = 'Button'

// ─── ButtonLink (elemento <a>) ────────────────────────────────────────────────

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  href: string
  external?: boolean
  children?: ReactNode
  className?: string
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

export function ButtonLink({
  variant = 'primary',
  size = 'md',
  className,
  children,
  href,
  external,
  ...props
}: ButtonLinkProps) {
  const classes = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  )
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={classes}
      {...props}
    >
      {children}
    </a>
  )
}
