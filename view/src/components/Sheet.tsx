import { useState } from 'react'
import { motion } from 'framer-motion'
import { AlignRight, X } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Sheet() {
  const [isVisible, setIsVisible] = useState(false)

  const handleToggle = () => setIsVisible(!isVisible)

  const backdropVariants = {
    open: { opacity: 1, zIndex: 999 },
    close: { opacity: 0, zIndex: -999 }
  }

  const sheetVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3 }
    },
    close: {
      x: '100vw',
      opacity: 0,
      transition: { duration: 0.3 }
    }
  }

  return (
    <div className='lg:hidden'>
      <button
        className='text-white'
        onClick={handleToggle}
      >
        <AlignRight />
      </button>
      <motion.div
        variants={backdropVariants}
        initial='close'
        animate={isVisible ? 'open' : 'close'}
        className='fixed inset-0 bg-gray-900/75 backdrop-blur-sm'
        onClick={handleToggle}
      >
        <motion.div
          variants={sheetVariants}
          initial='close'
          animate={isVisible ? 'open' : 'close'}
          className='fixed right-0 z-50 h-full w-2/3 bg-white shadow-lg overflow-auto p-4'
        >
          <div className='grid gap-6 text-dark font-bold text-2xl'>
            <div className='flex items-center justify-between'>
              <h1 className='text-primary'>Musify</h1>
              <X
                className='size-6 text-primary font-bold'
                onClick={handleToggle}
              />
            </div>
            <Link
              to='/'
              title='Home'
            >
              Home
            </Link>
            <Link
              to='/recommended'
              title='Recommended'
            >
              Recommended
            </Link>
            <Link
              to='/trending'
              title='Trending'
            >
              Trending
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
