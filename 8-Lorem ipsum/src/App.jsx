import { useState } from 'react';
import data from './data';

function App() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = parseInt(count);
    setText(data.slice(0, amount));
  };
  return (
    <section className='w-10/12 max-w-xl  mx-auto my-40 '>
      <h2 className='text-3xl font-semibold text-gray-700 text-center lg:text-4xl'>
        Tired of boring lorem ipsum
      </h2>
      <form
        className='flex items-center justify-center capitalize my-6  gap-x-4'
        onSubmit={handleSubmit}
      >
        <label htmlFor='amount' className='text-sm text-gray-700 font-semibold'>
          Paragraphs:
        </label>
        <input
          type='number'
          name='aount'
          id='amount'
          min='1'
          step='1'
          max='8'
          value={count}
          onChange={(e) => setCount(e.target.value)}
          className=' bg-gray-100 p-2'
        />
        <button
          type='submit'
          className='bg-green-500 px-4 py-2 rounded-md text-sm text-gray-700 font-semibold hover:bg-green-400'
        >
          Generator
        </button>
      </form>
      <article>
        {text.map((item, index) => (
          <p key={index} className='text-sm/7 text-gray-600 my-4'>
            {item}
          </p>
        ))}
      </article>
    </section>
  );
}

export default App;
