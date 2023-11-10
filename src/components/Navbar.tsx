import logoCoffee from '../assets/logoCoffeeDelivery.svg'
import locationIcon from '../assets/locationIcon.svg'
import { Cart } from './Cart'

export function Navbar() {
  return (
    <header className="flex w-full my-8 justify-between items-center">
      <img src={logoCoffee} alt="" />
      <div className="flex gap-3 items-center justify-end">
        <img src={locationIcon} alt="" />
        <p className="text-product-purpleDark text-sm not-italic font-normal leading-4">
          Porto Alegre, RS
        </p>
        <Cart full={'default'}>1</Cart>
      </div>
    </header>
  )
}
