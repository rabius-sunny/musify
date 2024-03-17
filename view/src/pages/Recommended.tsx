import wave from 'assets/wave.png'
import RecList from 'components/RecList'
import withTransition from 'components/Transition'

export default function Recommended() {
  return (
    <div className='relative'>
      <div className='absolute w-full z-50'>
        <h1 className='text-center text-cyan-400 text-xl sm:text-3xl h-16'>
          Recommended musics for you
        </h1>
        {withTransition(<RecList loading={false} />)}
      </div>
      <div className='fixed text-white bottom-0 right-0 z-0'>
        <img
          className='brightness-50'
          src={wave}
          alt='wave'
        />
      </div>
    </div>
  )
}
