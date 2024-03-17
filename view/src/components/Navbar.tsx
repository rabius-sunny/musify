import { User2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import Sheet from './Sheet'
import Search from './Search'

export default function Navbar() {
  return (
    <div className='flex items-center justify-between h-20'>
      <div className='flex items-center gap-8'>
        <h1 className='text-primary font-bold text-3xl'>Musify</h1>
        <div className='hidden lg:flex gap-4'>
          <Link
            className='hover:text-primary'
            to='/'
          >
            Home
          </Link>
          <Link
            className='hover:text-primary'
            to='/recommended'
          >
            Recommended
          </Link>
          <Link
            className='hover:text-primary'
            to='/trending'
          >
            Trending
          </Link>
        </div>
      </div>
      <div className='flex items-center gap-3'>
        <Search />
        <div className='hidden lg:block'>
          <User2 />
        </div>
        <Sheet />
      </div>
    </div>
  )
}
