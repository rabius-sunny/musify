import { User2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import Sheet from './Sheet'

export default function Navbar() {
  return (
    <div className='flex items-center justify-between bg-white/20 h-12'>
      <h2>Musify</h2>
      <div className='flex gap-2'>
        <Link to='/'>Home</Link>
        <Link to='/recommended'>Recommended</Link>
        <Link to='/trending'>Trending</Link>
      </div>
      <div className='flex items-center gap-4'>
        <input
          className='border border-white/60 px-4 py-2 rounded'
          placeholder='search music here...'
        />
        <User2 />
        <Sheet />
      </div>
    </div>
  )
}
