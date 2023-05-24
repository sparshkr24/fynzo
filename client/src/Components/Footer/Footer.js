import React from "react";
import survey from "../../assets/survey.jpg";
import up from "../../assets/up.svg";
import down from "../../assets/down.svg";

const Footer = ({ progress, handleNext, handlePrev, currentIndex, data }) => {
  return (
    <>
      <div className="fixed w-full bottom-0 px-4 sm:px-10 bg-[#9fbfe780]">
        <div className="sm:flex justify-between items-center px-6 py-4">
          <div className="w-full mb-1 sm:mb-0 sm:w-44">
            <p className="text-sm font-normal mb-1">{progress}% completed</p>
            <div
              className={`w-[${progress}%] h-1 rounded-2xl bg-blue-500`}
            ></div>
          </div>
          <div>
            <img
              className="inline mr-8"
              src={survey}
              alt="survey"
              width={160}
            />
            <button
              onClick={handleNext}
              className="disabled:cursor-not-allowed"
              disabled={currentIndex === data.length ? true : false}
            >
              <img
                className="inline border-2 mx-0.5 border-gray-400 p-2 hover:shadow-xl hover:shadow-blue-500/50"
                src={up}
                alt="survey"
                width={30}
              />
            </button>
            <button
              onClick={handlePrev}
              className="disabled:cursor-not-allowed"
              disabled={currentIndex === 0 ? true : false}
            >
              <img
                className={`inline border-2 mx-0.5 border-gray-400 p-2 hover:shadow-xl hover:shadow-blue-500/50`}
                src={down}
                alt="survey"
                width={30}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
