import React from "react";
import star from "../../assets/star.png";
import Buttons from "../Buttons";

const CheckboxQues = ({
  question,
  currentIndex,
  handleAnswerChange,
  answers,
  handleNext,
  data
}) => {
  const answer = answers[question.id] || [];

  const handleCheckboxChange = (e) => {
    const choiceText = e.target.value;
    let newAnswer;

    if (answer.includes(choiceText)) {
      newAnswer = answer.filter((item) => item !== choiceText);
    } else {
      newAnswer = [...answer, choiceText];
    }

    handleAnswerChange(question.id, newAnswer);
  };

  return (
    <>
      <div className="shadow-lg py-16 sm:px-32 px-10 fade-in-bottom mt-32">
        <div className="flex items-center inline text-[#0843a5e3] font-semibold text-lg">
          Question {currentIndex + 1}{" "}
          {question.required ? (
            <img className="inline" src={star} alt="required" width={30} />
          ) : (
            false
          )}
        </div>
        <div className="text-2xl font-bold text-[#06147ef0] mb-4">
          {question.question_text}
        </div>
        <ul>
          {question.choices.map((item, i) => (
            <li className="mb-1" key={i}>
              <input
                type="checkbox"
                className="mr-2"
                name={currentIndex}
                value={item.choice_text}
                checked={answer.includes(item.choice_text)}
                onChange={handleCheckboxChange}
              />
              <label>{item.choice_text}</label>
            </li>
          ))}
        </ul>
        <br />
        
        <Buttons answers={answers} data={data} question={question} currentIndex={currentIndex} handleNext={handleNext}/>
      </div>
    </>
  );
};

export default CheckboxQues;
