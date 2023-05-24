import React, { useState } from "react";
import star from '../../assets/star.png'
import Buttons from "../Buttons";

const UploadQues = ({
  question,
  handleAnswerChange,
  answers,
  currentIndex,
  handleNext,
  data,
}) => {
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setSelectedImage(imageUrl);
    handleAnswerChange(question.id, imageUrl); // Store the imageUrl directly in the answers object
  };

  return (
    <div className="shadow-lg py-16 sm:px-32 px-10 fade-in-bottom mt-32">
      <div className="flex items-center inline text-[#0843a5e3] font-semibold text-lg">
          Question {currentIndex + 1} {question.required?<img className="inline" src={star} alt="required" width={30} />: false}
        </div>
      <label
        className="text-2xl font-bold text-[#06147ef0]"
        htmlFor="imageUpload"
      >
        {question.question_text}
      </label>
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
      
      <Buttons answers={answers} data={data} question={question} currentIndex={currentIndex} handleNext={handleNext}/>
    </div>
  );
};

export default UploadQues;
