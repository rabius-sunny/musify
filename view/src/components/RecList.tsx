import music from 'assets/music.png'
import { ChevronFirst, ChevronLast, Play, Repeat, Shuffle } from 'lucide-react'

type TProps = {
  loading: boolean
  musics: { title: string }[]
}
export default function RecList({ loading, musics }: TProps) {
  return (
    <div className='recommended max-w-xl mx-auto p-3 md:p-5 bg-white/20 rounded-xl shadow-lg shadow-white/20 z-10 grid gap-2'>
      {loading &&
        Array.from({ length: 10 }, (i) => i).map((_i, j) => (
          <div
            key={j}
            className='h-24 rounded-lg animate-pulse bg-dark/40'
          />
        ))}
      {musics &&
        musics.map((item, idx) => (
          <div
            key={idx}
            className='flex items-start gap-2 border border-white/20 rounded-lg p-2 md:p-4'
          >
            <img
              className='size-16 md:size-20'
              src={music}
              alt='music'
            />
            <div className='w-full'>
              <h2 className='text-base font-light tracking-wide'>
                {item.title}
              </h2>
              <p className='text-[0.7rem] sm:text-xs uppercase font-medium tracking-widest'>
                lorem ipsum
              </p>
              <div className='flex items-center gap-14 mt-5'>
                <Shuffle className='size-5' />
                <div className='flex gap-4'>
                  <ChevronFirst className='size-5' />
                  <Play className='size-5' />
                  <ChevronLast className='size-5' />
                </div>
                <Repeat className='size-5' />
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}
