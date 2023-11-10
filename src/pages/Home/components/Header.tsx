import { Item } from './Item'
import homeImage from '../../../assets/homeImage.svg'
import shortestCartIcon from '../../../assets/shortestCartIcon.svg'
import packageIcon from '../../../assets/packageIcon.svg'
import clockIcon from '../../../assets/clockIcon.svg'
import coffeeIcon from '../../../assets/coffeeIcon.svg'

export function Header() {
  return (
    <div className="flex w-full h-[544px] shrink-0 py-24 justify-between items-start gap-14">
      <div className="flex w-[588px] flex-col items-start gap-4">
        <h1 className="self-stretch text-base-title text-5xl not-italic font-extrabold leading-[62.4px]">
          Encontre o café perfeito para qualquer hora do dia
        </h1>
        <span className="mb-16">
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </span>
        <div className="flex flex-wrap w-[567px] shrink-0 gap-y-5 gap-x-10">
          <Item
            icon={shortestCartIcon}
            text="Compra simples e segura"
            color="bg-product-yellowDark"
            width="w-[231px]"
          />
          <Item
            icon={packageIcon}
            text="Embalagem mantém o café intacto"
            color="bg-base-text"
            width="w-[294px]"
          />
          <Item
            icon={clockIcon}
            text="Entrega rápida e rastreada"
            color="bg-product-yellow"
            width="w-[231px]"
          />
          <Item
            icon={coffeeIcon}
            text="O café chega fresquinho até você"
            color="bg-product-purple"
            width="w-[294px]"
          />
        </div>
      </div>
      <img src={homeImage} alt="" />
    </div>
  )
}
