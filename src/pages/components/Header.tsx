import { Items } from './Items'
import homeImage from '../../assets/homeImage.svg'

export function Header() {
  return (
    <div className="flex w-full h-[544px] shrink-0 px-40 py-24 items-center justify-center gap-14">
      <div className="flex w-[588px] flex-col items-start gap-4">
        <h1 className="self-stretch text-base-title text-5xl not-italic font-extrabold leading-[62.4px]">
          Encontre o café perfeito para qualquer hora do dia
        </h1>
        <span>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </span>
        <Items />
      </div>
      <img src={homeImage} alt="" className="float-right" />
    </div>
  )
}
