import { CoffeeCard } from './CoffeeCard'

// interface CoffeeProps {
//   coffeName: string
//   coffeType: string
//   coffeeDescription: string
//   coffeeImage: string
// }

export function CoffeeList() {
  return (
    <div className="flex w-full h-[1645px] pt-8 pb-[157px] flex-wrap items-start gap-[54px] flex-shrink-0">
      <div className="w-full">
        <h1 className="font-roboto text-4xl not-italic font-extrabold leading-10 ">
          Nossos Cafés
        </h1>
      </div>
      <div className="flex h-full flex-col flex-wrap gap-x-10 gap-y-8">
        <CoffeeCard />
        <CoffeeCard />
      </div>
    </div>
  )
}
