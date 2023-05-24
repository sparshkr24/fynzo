import React from "react";

const RadioQues = ({
  question,
  currentIndex,
  handleAnswerChange,
  answers,
  handleNext,
  handlePrev,
}) => {
  const answer = answers[question.id] || "";

  const handleRadioChange = (e) => {
    const newAnswer = e.target.value;
    handleAnswerChange(question.id, newAnswer);
  };

  return (
    <>
      <div className="shadow-lg py-16 sm:px-32 px-10 fade-in-bottom mt-32">
        <div className="text-[#0843a5e3] font-semibold text-lg">
          Question {currentIndex + 1}
        </div>
        <div className="text-2xl font-bold text-[#06147ef0] mb-4">
          {question.question_text}
        </div>
        <ul>
          {question.choices.map((item, i) => (
            <li className="p-1" key={i}>
              <input
                type="radio"
                name={currentIndex}
                className="mr-2"
                value={item.choice_text}
                checked={answer === item.choice_text}
                onChange={handleRadioChange}
              />
              <label className="font-medium">{item.choice_text}</label>
            </li>
          ))}
        </ul>
        <br />
        <button
          className="disabled:cursor-not-allowed mr-4 py-2 px-12 rounded-2xl bg-red-600 text-white hover:bg-red-700 font-medium"
          onClick={handleNext}
          disabled={answers[question.id]?false:true}
        >
          Next
        </button>
        <button
          className="py-2 px-4 rounded-2xl hover:bg-gray-400 hover:text-white font-medium border border-gray-200"
          onClick={handleNext}
        >
          Skip
        </button>
      </div>
    </>
  );
};

export default RadioQues;
