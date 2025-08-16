import { useState } from 'react';

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className='single-tour'>
      <img src={image} alt={name} className='img' />
      <span className='tour-price'>{price}</span>
      <div className='tour-info'>
        <h5>{name}</h5>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}{' '}
          <button className='info-btn' onClick={() => setReadMore(!readMore)}>
            {readMore ? 'Show less' : 'Read more'}
          </button>
        </p>
        <button
          className='delete-btn btn-block btn'
          onClick={() => removeTour(id)}
        >
          no interest
        </button>
      </div>
    </article>
  );
};

export default Tour;
