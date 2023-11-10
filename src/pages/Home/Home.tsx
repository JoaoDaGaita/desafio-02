import { CoffeeList } from './components/CoffeeList'
import { Header } from './components/Header'

export function Home() {
  return (
    <div className="flex w-full max-h-[2293px] flex-col items-start">
      <Header />
      <CoffeeList />
    </div>
  )
}
