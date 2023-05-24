import React from "react";

const Buttons = ({currentIndex, handleNext, answers, question, data}) => {
  return (
    <>
      {currentIndex === data.length - 1 ? (
        <div id="last">
          <button
            className="disabled:cursor-not-allowed mr-4 py-3 px-16 rounded-2xl bg-green-600 text-white hover:bg-green-700 font-medium hover:scale-110 ease-in-out duration-200 hover:shadow-xl"
            onClick={handleNext}
            disabled={!answers[question.id] && question.required ? true : false}
          >
            Submit
          </button>
        </div>
      ) : (
        <div id="notLast">
          <button
            className="disabled:cursor-not-allowed mr-4 py-2 px-12 rounded-2xl bg-red-600 text-white hover:bg-red-700 font-medium"
            onClick={handleNext}
            disabled={answers[question.id] ? false : true}
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
      )}
    </>
  );
};

export default Buttons;
