import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Sheet() {
  const [isVisible, setIsVisible] = useState(false)

  const handleToggle = () => setIsVisible(!isVisible)

  const backdropVariants = {
    open: { opacity: 1, zIndex: 10 },
    close: { opacity: 0, zIndex: -1 }
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
    <>
      <button
        className='text-white font-bold'
        onClick={handleToggle}
      >
        open
      </button>
      <motion.div
        variants={backdropVariants}
        initial='close'
        animate={isVisible ? 'open' : 'close'}
        className='fixed inset-0 bg-gray-900/75 backdrop-blur-sm transition-all duration-300 ease-in-out'
        onClick={handleToggle}
      >
        <motion.div
          variants={sheetVariants}
          initial='close'
          animate={isVisible ? 'open' : 'close'}
          className='fixed right-0 h-full w-2/3 bg-white shadow-lg overflow-auto p-6 md:p-8'
        >
          <div className='grid gap-2 w-fulld  text-primary font-bold text-2xl'>
            <button
              className='text-white bg-primary font-bold'
              onClick={handleToggle}
            >
              close
            </button>
            <p>sk dfsdkfj dskfjds</p>
            <p>sk dfsdkfj dskfjds</p>
            <p>sk dfsdkfj dskfjds</p>
            <p>sk dfsdkfj dskfjds</p>
            <p>sk dfsdkfj dskfjds</p>
            <p>sk dfsdkfj dskfjds</p>
          </div>
        </motion.div>
      </motion.div>
    </>
  )
}
