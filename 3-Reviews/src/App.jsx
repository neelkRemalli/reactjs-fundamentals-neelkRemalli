import { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
function App() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }

    return number;
  };
   // Decrease index py one.
  const prevPerson = () => {
    setIndex((currentIndex) => {
      let newIndex = currentIndex - 1;
      return checkNumber(newIndex);
    });
  };

 // Increase index by one.
  const nextPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex + 1;
      return checkNumber(newIndex);
    });
  };

  // Random index
  const randomPerson = () =>{
   let randomNumber = Math.floor(Math.random() * people.length)
  if(randomNumber == index){
    randomNumber += index;
  }
  setIndex(checkNumber(randomNumber))
  }
  console.log('neelk!!!!!!!', index)
  return (
    <main>
      <article className='review'>
        <div className='img-container'>
          <img src={image} alt={name} className='person-img' />
          <span className='quote-icon'>
            <FaQuoteRight />
          </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className='btn-container'>
          <button className='prev-btn' onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className='next-btn' onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className='btn btn-hipster' onClick={randomPerson}>Surprise me</button>
      </article>
    </main>
  );
}

export default App;
