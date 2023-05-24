import React from "react";
import star from '../../assets/star.png'
import Buttons from "../Buttons";

const DropdownQues = ({
  question,
  currentIndex,
  handleAnswerChange,
  answers,
  handleNext,
  data
}) => {
  const answer = answers[question.id] || "";

  const handleSelectChange = (e) => {
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
        <select className="mb-8 border rounded-lg w-56 px-4 py-2" value={answer} onChange={handleSelectChange}>
          {question.choices.map((item, i) => (
            <option key={i}>{item.choice_text}</option>
          ))}
        </select>
        <br />
       
        <Buttons answers={answers} data={data} question={question} currentIndex={currentIndex} handleNext={handleNext}/>
      </div>
    </>
  );
};

export default DropdownQues;
