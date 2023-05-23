import React from "react";

const DropdownQues = ({
  question,
  currentIndex,
  handleAnswerChange,
  answers,
  handleNext,
  handlePrev,
}) => {
  const answer = answers[question.id] || "";

  const handleSelectChange = (e) => {
    const newAnswer = e.target.value;
    handleAnswerChange(question.id, newAnswer);
  };

  return (
    <>
      <div className="shadow-lg py-16 sm:px-32 px-10 fade-in-bottom">
        <div className="text-[#0843a5e3] font-semibold text-lg">
          Question {currentIndex + 1}
        </div>
        <div className="text-2xl font-bold text-[#06147ef0] mb-4">
          {question.question_text}
        </div>
        <select className="mb-8 border rounded-lg w-56 px-4 py-2" value={answer} onChange={handleSelectChange}>
          {question.choices.map((item, i) => (
            <option key={i}>{item.choice_text}</option>
          ))}
        </select>
        <br />
        <button
          className="disabled:cursor-not-allowed mr-4 py-2 px-12 rounded-2xl bg-red-600 text-white hover:bg-red-700 font-medium"
          onClick={handleNext}
        >
          Next
        </button>
        <button
          className="py-2 px-4 rounded-2xl hover:bg-gray-400 hover:text-white font-medium border border-gray-200"
          onClick={handlePrev}
        >
          Skip
        </button>
      </div>
    </>
  );
};

export default DropdownQues;
