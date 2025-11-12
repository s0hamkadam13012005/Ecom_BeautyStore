import { Typewriter } from 'react-simple-typewriter'

const Announcement = () => {
  return (
    <div className='flex items-center justify-center bg-[#e9acd9] text-[18px] font-semibold h-12'>
      <span className="!text-white">
        <Typewriter
          words={['BeautyBliss', 'Everything', 'On', 'Discount!', '20% off']}
          loop={5}
          cursor
          cursorStyle='_'
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>
    </div>
  );
};

export default Announcement;
