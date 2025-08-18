import { useState, useEffect } from 'react';
import Jobinfo from './Jobinfo';
import BtnContainer from './BtnContainer';

const url = 'https://www.course-api.com/react-tabs-project';
function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);

  const fetchJob = async () => {
    try {
      const response = await fetch(url);
      const newJobs = await response.json();
      setJobs(newJobs);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJob();
  }, []);
  if (loading) {
    return (
      <div className='jobs-center'>
        <div className='loading'></div>
      </div>
    );
  }
  return (
    <>
      <section className='jobs-center'>
        <BtnContainer
          jobs={jobs}
          currentItem={currentItem}
          setCurrentItem={setCurrentItem}
        />
        <Jobinfo jobs={jobs} currentItem={currentItem} />
      </section>
    </>
  );
}

export default App;
