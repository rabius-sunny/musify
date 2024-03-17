import { SearchIcon } from 'lucide-react'

export default function Search() {
  return (
    <div className='flex items-center gap-2 border border-white/40 rounded-full pl-2  '>
      <SearchIcon className='size-4' />
      <input
        className='px-1 py-1 text-sm focus:outline-none text-white/70 bg-transparent md:w-80'
        placeholder='search music here...'
      />
    </div>
  )
}
