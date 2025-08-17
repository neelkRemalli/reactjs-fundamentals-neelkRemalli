import QuestionList from './QuestionList';

const Questions = ({ questions, activeId, toggleQuestion }) => {
  return (
    <section className='container'>
      {questions.map((question) => (
        <QuestionList
          key={question.id}
          {...question}
          activeId={activeId}
          toggleQuestion={toggleQuestion}
        />
      ))}
    </section>
  );
};

export default Questions;
