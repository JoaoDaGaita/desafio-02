import { ReactNode, createContext, useState } from 'react'
import coffeeTrad from '../assets/coffees/coffeeTraditional.svg'

interface Coffee {
  coffeeName: string
  coffeType: string
  coffeeDescription: string
  coffeeImage: string | undefined
}

const coffeesList: Coffee[] = [
  {
    coffeeName: 'Expresso Tradicional',
    coffeType: 'Tradicional',
    coffeeDescription:
      'O tradicional café feito com água quente e grãos moídos',
    coffeeImage: coffeeTrad,
  },
  {
    coffeeName: 'Expresso Tradicional',
    coffeType: 'Tradicional',
    coffeeDescription:
      'O tradicional café feito com água quente e grãos moídos',
    coffeeImage: coffeeTrad,
  },
]

interface CoffeesContextType {
  coffees: Coffee[]
}

interface CoffeesContextProviderProps {
  children: ReactNode
}

export const CoffeesContext = createContext({} as CoffeesContextType)

export function CoffeeContextProvider({
  children,
}: CoffeesContextProviderProps) {
  const [coffees] = useState<Coffee[]>(coffeesList)

  return (
    <CoffeesContext.Provider value={{ coffees }}>
      {children}
    </CoffeesContext.Provider>
  )
}
