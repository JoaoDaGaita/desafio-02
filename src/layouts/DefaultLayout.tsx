import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navbar'

export function DefaultLayout() {
  return (
    <div className="flex w-full max-h-[2293px] flex-col items-start">
      <Navbar />
      <Outlet />
    </div>
  )
}
