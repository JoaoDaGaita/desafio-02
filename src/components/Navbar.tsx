import logoCoffee from '../assets/logoCoffeeDelivery.svg'
import locationIcon from '../assets/icon.svg'
import { Cart } from './Cart'

export function Navbar() {
  return (
    <header className="flex w-full py-8 px-40 justify-between items-center">
      <img src={logoCoffee} alt="" />
      <div className="flex gap-3 items-center justify-end">
        <img src={locationIcon} alt="" />
        <p className="text-product-purpleDark text-sm not-italic font-normal leading-4">
          Porto Alegre, RS
        </p>
        <Cart variant={'default'} size={'default'} full={'default'}>
          1
        </Cart>
      </div>
    </header>
  )
}
