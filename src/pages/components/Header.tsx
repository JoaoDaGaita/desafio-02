import { Item } from './Item'
import homeImage from '../../assets/homeImage.svg'
import cartIcon from '../../assets/cartIcon.svg'

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
        <Item
          icon={cartIcon}
          text="Compra simples e segura"
          color="bg-product-yellowDark"
        />
        <Item
          icon={cartIcon}
          text="Compra simples e segura"
          color="bg-product-yellow"
        />
      </div>
      <img src={homeImage} alt="" className="float-right" />
    </div>
  )
}
