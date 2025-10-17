import CountUp from 'react-countup';

const CounterCard = ({ card }) => {
  const {image, counterInfo, subTitle} = card;

  return (
    <div className='bg-white p-10 shadow-md rounded-2xl'>
      <img className='mb-4 h-16 w-16' src={image} alt={`${subTitle} icon`} />
      <h1 className='mb-3 text-6xl font-extrabold'>
        <CountUp 
          end={counterInfo}
          duration={5}
          delay={2}
        />+
      </h1>
      <p className='text-xl text-[#0F0F0F99] font-semibold'>{subTitle}</p>
    </div>
  );
};

export default CounterCard;