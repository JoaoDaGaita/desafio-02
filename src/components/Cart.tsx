import { VariantProps, cva } from 'class-variance-authority'
import { ComponentProps } from 'react'
import cartLogo from '../assets/cartIcon.svg'
import { twMerge } from 'tailwind-merge'

const cartStyles = cva(['transition-colors'], {
  variants: {
    variant: {
      default: ['bg-product-yellowLight'],
      full: ['bg-product-yellowDark'],
    },
    size: {
      default: [
        'inline-flex',
        'relative',
        'p-2',
        'justify-center',
        'items-center',
        'gap-1',
        'rounded',
        'w-[38px]',
        'h-[38px]',
      ],
    },
    full: {
      default: [
        'flex',
        'items-center',
        'justify-center',
        'w-5',
        'h-5',
        'absolute',
        'bg-red-500',
        'rounded-full',
        '-top-2',
        '-right-2',
        'text-xs',
        'rounded-md',
      ],
    },
  },
})

type CartProps = VariantProps<typeof cartStyles> &
  ComponentProps<'img'> &
  ComponentProps<'button'>

export function Cart({ variant, size, className, full, ...props }: CartProps) {
  return (
    <button className={twMerge(cartStyles({ variant, size }), className)}>
      <img src={cartLogo} alt="" />
      {full && (
        <div className={twMerge(cartStyles({ full }), className)}>
          <span
            {...props}
            className="w-5 shrink-0 text-white text-center not-italic font-bold leading-4 -tracking-[0.72px]"
          ></span>
        </div>
      )}
    </button>
  )
}
