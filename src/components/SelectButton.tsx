import { VariantProps, cva } from 'class-variance-authority'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

const selectButtonStyles = cva(['transition-colors'], {
  variants: {
    variant: {
      default: [
        'bg-base-button',
        'hover:bg-base-hover',
        'focus:ring-product-purple',
        'focus:outline-none',
        'focus:ring',
        'focut:bg-product-purpleLight',
        'flex',
        'w-[178.667px]',
        'p-4',
        'items-center',
        'gap-3',
        'flex-1',
        'rounded-md',
        'bg-base-button',
      ],
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

type SelectButtonProps = VariantProps<typeof selectButtonStyles> &
  ComponentProps<'button'> &
  ComponentProps<'input'> &
  ComponentProps<'img'>

export function SelectButton({
  className,
  src,
  content,
  ...props
}: SelectButtonProps) {
  return (
    <button {...props} className={twMerge(selectButtonStyles(), className)}>
      <img src={src} alt="" />
      <p className="uppercase">{content}</p>
    </button>
  )
}
