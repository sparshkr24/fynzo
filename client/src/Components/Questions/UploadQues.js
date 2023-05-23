import React, { useState } from "react";

const UploadQues = ({
  question,
  handleAnswerChange,
  answers,
  currentIndex,
  handleNext,
  handlePrev,
}) => {
  const [selectedImage, setSelectedImage] = useState("");


  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
    handleAnswerChange(question.id, file); // Store the file object as the answer
  };

  return (
    <div className="shadow-lg py-16 sm:px-32 px-10 fade-in-bottom">
      <div className="text-[#0843a5e3] font-semibold text-lg">Question {currentIndex + 1}</div>
      <label className="text-2xl font-bold text-[#06147ef0]" htmlFor="imageUpload">{question.question_text}</label>
      <br />
      <br />
      <input
        type="file"
        className="mb-8"
        id="fileUpload"
        accept="*"
        onChange={handleImageUpload}
      />
      {/* {selectedImage && (
        <div className="sm:w-1/6">
          <img src={selectedImage} alt="Uploaded" />
        </div>
      )} */}
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
  );
};

export default UploadQues;
