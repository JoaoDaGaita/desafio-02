import coffeeCard from '../../../assets/checkout/cofeeCard.svg'
import minorIcon from '../../../assets/minorIcon.svg'
import plusIcon from '../../../assets/plusIcon.svg'
import { Button } from '../../../components/Button'
import trashIcon from '../../../assets/checkout/trashIcon.svg'

export function CoffeeCard() {
  return (
    <div className="flex py-2 px-1 justify-between items-start self-stretch bg-base-card">
      <div className="flex items-center gap-5">
        <span className="flex justify-center items-center">
          <img src={coffeeCard} alt="" />
        </span>
        <div className="flex flex-col items-start gap-2">
          <p className="text-base not-italic font-normal leading-5">
            Expresso Tradicional
          </p>
          <div className="flex items-center gap-2">
            <div className="flex h-[32px] p-2 justify-center items-center gap-1 rounded-md bg-base-button shrink-0">
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
            <Button variant={'remove'} size={'remove'}>
              <img src={trashIcon} alt="" />
              <p className="uppercase text-xs font-normal not-italic leading-5">
                Remover
              </p>
            </Button>
          </div>
        </div>
      </div>
      <span className="text-base not-italic font-bold leading-5 text-base-text">
        R$ 9,90
      </span>
    </div>
  )
}
