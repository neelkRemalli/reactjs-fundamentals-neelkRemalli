
import { FaMinus, FaPlus } from 'react-icons/fa';

const QuestionList = ({id, title, info, toggleQuestion, activeId }) => {
    const isActive = activeId === id;
  return (
    <article className='question'>
      <header>
        <h5>{title}</h5>
        <button className='question-btn' onClick={() => toggleQuestion(id)}>
        {isActive ? <FaMinus /> :  <FaPlus />}
        </button>
      </header>
      {isActive && <p>{info}</p>}
    </article>
  );
};

export default QuestionList;
