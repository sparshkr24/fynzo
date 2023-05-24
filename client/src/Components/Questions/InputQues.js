import React, { useState } from "react";
import star from '../../assets/star.png'

const InputQues = ({
  question,
  currentIndex,
  handleAnswerChange,
  answers,
  handleNext,
  handleSkip,
}) => {
  const [inputData, setInputData] = useState(null)
  const answer = answers[question.id] || "";

  const handleInputChange = (e) => {
    const newAnswer = e.target.value;
    handleAnswerChange(question.id, newAnswer);
  };

  return (
    <>
      <div className="shadow-lg py-16 sm:px-32 px-10 fade-in-bottom mt-32">
        <div className="flex items-center inline text-[#0843a5e3] font-semibold text-lg">
          Question {currentIndex + 1} {question.required?<img className="inline" src={star} alt="required" width={30} />: false}
        </div>
        <div className="text-2xl font-bold text-[#06147ef0] mb-4">
          {question.question_text}
        </div>
        <input
          className="w-64 sm:w-96 focus:bg-[#91bde04a] pl-3 py-1.5 border border-[#6ea9d869] rounded-lg mb-6"
          type="text"
          value={answer}
          onChange={handleInputChange}
        />
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

export default InputQues;
