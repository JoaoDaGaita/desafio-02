import coffeeTrad from '../../../assets/coffees/coffeeTraditional.svg'
import cartIcon from '../../../assets/cartIcon.svg'
import minorIcon from '../../../assets/minorIcon.svg'
import plusIcon from '../../../assets/plusIcon.svg'

import { Button } from '../../../components/Button'

// interface CoffeeProps {
//   coffeName: string
//   coffeType: string
//   coffeeDescription: string
// }

export function CoffeeCard() {
  return (
    <div className="flex flex-col w-64 h-[310px] shrink-0 rounded-tl-sm items-center justify-center rounded-br-[36px] bg-base-card">
      <div className="flex justify-center items-center flex-shrink-0">
        <img src={coffeeTrad} alt="" />
      </div>
      <div className="flex justify-center items-center gap-1 mt-3">
        <p className="text-product-yellowDark font-roboto text-[10px] not-italic font-bold leading-3 uppercase">
          asdawdawd
        </p>
      </div>
      <div className="flex px-4 items-center justify-center">
        <span className="w-[216px] mt-4 text-base-subtitle text-center font-roboto text-xl not-italic font-bold leading-7">
          Expresso Tradicional
        </span>
      </div>
      <p className="text-base-label text-center font-roboto mt-2 text-sm not-italic font-normal leading-[18.2px]">
        O tradicional café feito com água quente e grãos moídos
      </p>
      <div className="flex w-[208px] justify-between items-center mx-6 mb-5 mt-8">
        <span className="text-base-text text-right text-sm not-italic font-normal leading-[18.2px]">
          R$
          <span className="text-2xl not-italic font-extrabold leading-[18.2px]">
            <span> </span>9,90
          </span>
        </span>
        <div className="flex items-center gap-2">
          <div className="flex h-[38px] p-2 justify-center items-center gap-1 rounded-md bg-base-button shrink-0">
            <span className="cursor-pointer opacity-50 hover:opacity-100">
              <img src={minorIcon} alt="" />
            </span>
            <p className="w-5 text-center cursor-default text-base-title text-base not-italic font-normal leading-5">
              1
            </p>
            <span className="cursor-pointer opacity-50 hover:opacity-100">
              <img src={plusIcon} alt="" className="fill-red-500" />
            </span>
          </div>
          <Button size={'icon'} variant={'icon'}>
            <img src={cartIcon} alt="" />
          </Button>
        </div>
      </div>
    </div>
  )
}
