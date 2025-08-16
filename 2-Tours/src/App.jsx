import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';

const url = 'https://www.course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  // Remove tour from the ist
  const removeTour = (id) => {
    const newTour = tours.filter((item) => item.id !== id);
    setTours(newTour);
  };

  // Fetch tours from url
  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  if (tours.length === 0) {
    return (
      <div className='title'>
        <h3>No tours left</h3>
        <button style={{marginTop: '15px'}} className='btn' onClick={() => fetchTours()}>
          Refresh
        </button>
      </div>
    );
  }
  return (
    <>
      <main>
        <Tours tours={tours} removeTour={removeTour} />
      </main>
    </>
  );
}

export default App;
