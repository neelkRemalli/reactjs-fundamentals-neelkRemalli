import { useState,useEffect } from 'react';
import { shortList, list, longList } from './data';
import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Carousel = () => {
  const [people, setPeople] = useState(longList);
  const [currentPerson, setCurrentPerson] = useState(0)

  const prevSlide = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson - 1 + people.length) % people.length;
      return result;
    });
  };
 const nextSlide = () => {
    setCurrentPerson((oldPerson) => {
      return (oldPerson + 1) % people.length;
     
    });
  };

   useEffect(() => {
    let sliderId = setInterval(() => {
    nextSlide();
    }, 5000);
    return () => {
      clearInterval(sliderId);
    };
  }, [currentPerson]);
 
  return (
    <section className='relative w-4/5 max-w-[800px] mx-auto mt-40  h-[450px] overflow-hidden '>
      {people.map((person, personIndex) => (
        <article 
         key={person.id}
         style={{
       transform:`translateX(${100 * (personIndex - currentPerson)}%)`,
       opacity: personIndex === currentPerson ? 1 : 0,
       visibility: personIndex === currentPerson ? 'visible' : 'hidden',
          
        }}
     
         className='absolute top-0 left-0 w-full h-full text-center transition duration-300 ease-in-out '>
          <img src={person.image} alt={person.name} className=' mx-auto w-36 h-36 rounded-full object-cover border border-fuchsia-500  mb-3 shadow-md' />
          <h5 className='text-fuchsia-700 uppercase font-semibold mb-1'>{person.name}</h5>
          <p className='text-gray-900 capitalize font-semibold mb-2 '>{person.title}</p>
          <p className='text-gray-700 max-w-[35em] mx-auto mb-4 '>{person.quote}</p>
          <FaQuoteRight className='text-fuchsia-700 text-2xl mx-auto' />
        </article>
      ))}
      <button type='button' onClick={prevSlide} className='absolute top-[200px] left-0 cursor-pointer'>
        <FiChevronLeft className='text-2xl text-gray-700transition duration-300 ease-in-out hover:text-gray-500 hover:scale-125 ' />
      </button>
      <button type='button' onClick={nextSlide} className='absolute top-[200px] right-0 cursor-pointer '>
        <FiChevronRight className='text-2xl text-gray-700transition duration-300 ease-in-out hover:text-gray-500 hover:scale-125  ' />
      </button>
    </section>
  );
};

export default Carousel;
