import React, { useEffect, useState } from "react";
import RadioQues from "./Components/Questions/RadioQues";
import DropdownQues from "./Components/Questions/DropdownQues";
import CheckboxQues from "./Components/Questions/CheckboxQues";
import InputQues from "./Components/Questions/InputQues";
import UploadQues from "./Components/Questions/UploadQues";
import NotFound from "./Components/NotFound";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { Transition } from "@headlessui/react";

const App = () => {
  const [data, setData] = useState([]);

  //to persist all the answers
  const [answers, setAnswers] = useState({});
  const [progress, setProgress] = useState(0);

  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    fetch("http://localhost:5000/questions")
      .then((result) => result.json())
      .then((res) => {
        // console.log(questions);
        setData(res.questions);
      })
      .catch(() => {
        console.log("error while fetching data");
      });
  }, []);

  useEffect(() => {
    const calculateProgress = () => {
      const answeredCount = Object.keys(answers).length;
      const totalCount = data.length;
      const percentage = (answeredCount / totalCount) * 100;
      setProgress(percentage);
    };

    calculateProgress();
  }, [answers, data]);

  const handleNext = () => {
    // const currentQuestion = data[currentIndex];
    // const currentAnswer = answers[currentQuestion.id];

    // // Check if the current question is required and has not been answered
    // if (currentQuestion.required && !currentAnswer) {
    //   alert("Please answer the current question before proceeding.");
    //   return;
    // }

    if (currentIndex < data.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  //setting new answers and storing them
  const handleAnswerChange = (questionId, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
  };

  return (
    <>
      <Navbar />

      <div className="sm:mx-0 flex justify-center items-center h-[83vh] w-full">
        <div id="MainContent">
          <div className="h-44">
            

            {data.map((item, i) => {
              if (currentIndex === i) {
                switch (item.question_type) {
                  case 1:
                    return (
                      <RadioQues
                        question={item}
                        currentIndex={currentIndex}
                        handleAnswerChange={handleAnswerChange}
                        answers={answers}
                        handleNext={handleNext}
                        handlePrev={handlePrev}
                      />
                    );
                  case 2:
                    return (
                      <DropdownQues
                        question={item}
                        currentIndex={currentIndex}
                        handleAnswerChange={handleAnswerChange}
                        answers={answers}
                        handleNext={handleNext}
                        handlePrev={handlePrev}
                      />
                    );
                  case 3:
                    return (
                      <CheckboxQues
                        question={item}
                        currentIndex={currentIndex}
                        handleAnswerChange={handleAnswerChange}
                        answers={answers}
                        handleNext={handleNext}
                        handlePrev={handlePrev}
                      />
                    );
                  case 4:
                    return (
                      <InputQues
                        question={item}
                        currentIndex={currentIndex}
                        handleAnswerChange={handleAnswerChange}
                        answers={answers}
                        handleNext={handleNext}
                        handlePrev={handlePrev}
                      />
                    );
                  case 5:
                    return (
                      <UploadQues
                        question={item}
                        currentIndex={currentIndex}
                        handleAnswerChange={handleAnswerChange}
                        answers={answers}
                        handleNext={handleNext}
                        handlePrev={handlePrev}
                      />
                    );
                  default:
                    return (
                      <NotFound
                        question={item}
                        currentIndex={currentIndex}
                        handleAnswerChange={handleAnswerChange}
                        answers={answers}
                      />
                    );
                }
              }
            })}
          </div>
          <br />
          
        </div>
      </div>

      <Footer
        progress={progress}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </>
  );
};

export default App;
