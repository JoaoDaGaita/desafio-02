import { VariantProps, cva } from 'class-variance-authority'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

const buttonStyles = cva(['transition-colors'], {
  variants: {
    variant: {
      default: ['bg-product-yellow', 'hover:bg-product-yellowDark'],
      remove: ['bg-base-button', 'hover:bg-base-hover'],
      icon: ['bg-product-purpleDark', 'hover:bg-product-purple'],
    },
    size: {
      default: [
        'rounded-md',
        'py-3',
        'px-2',
        'flex',
        'w-[132px]',
        'h-[46px]',
        'justify-center',
        'items-center',
        'gap-1',
      ],
      remove: [
        'inline-flex',
        'h-8',
        'w-[91px]',
        'py-0',
        'px-2',
        'justify-center',
        'items-center',
        'gap-1',
        'shrink-0',
        'rounded-md',
      ],
      icon: [
        'rounded-md',
        'inline-flex',
        'w-[38px]',
        'h-[38px]',
        'p-2',
        'justify-center',
        'items-center',
        'gap-2',
      ],
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<'button'>

export function Button({ variant, size, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(buttonStyles({ variant, size }), className)}
    />
  )
}
