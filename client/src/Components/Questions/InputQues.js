import React, { useState } from "react";
import star from '../../assets/star.png'
import Buttons from "../Buttons";

const InputQues = ({
  question,
  currentIndex,
  handleAnswerChange,
  answers,
  handleNext,
  data
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
        
        <Buttons answers={answers} data={data} question={question} currentIndex={currentIndex} handleNext={handleNext}/>
      </div>
    </>
  );
};

export default InputQues;
