import Duties from './Duties';

const Jobinfo = ({ jobs, currentItem }) => {
  const { title, company, dates, duties } = jobs[currentItem];

  return (
    <article className='job-info'>
      <h3>{title}</h3>
      <span className='job-company'>{company}</span>
      <p className='job-date'>{dates}</p>
      <Duties duties={duties} currentItem={currentItem} />
    </article>
  );
};

export default Jobinfo;
