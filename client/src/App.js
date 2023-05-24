import React, { useEffect, useState } from "react";
import RadioQues from "./Components/Questions/RadioQues";
import DropdownQues from "./Components/Questions/DropdownQues";
import CheckboxQues from "./Components/Questions/CheckboxQues";
import InputQues from "./Components/Questions/InputQues";
import UploadQues from "./Components/Questions/UploadQues";
import NotFound from "./Components/NotFound";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Alert from "./Components/Alert";
import Submit from "./Components/Submit";
import Loader from "./Components/Loader";

const App = () => {
  const [data, setData] = useState([]);

  //to persist all the answers
  const [answers, setAnswers] = useState({});
  const [progress, setProgress] = useState(0);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [alertMsg, setAlertMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(0);

  useEffect(() => {
    setIsLoading(1);

    fetch("https://fynzo.onrender.com/questions")
      .then((result) => result.json())
      .then((res) => {
        // console.log(questions);

        setData(res.questions);
        setIsLoading(0);
      })
      .catch(() => {
        console.log("error while fetching data");
        setIsLoading(0);
      });
  }, []);

  useEffect(() => {
    const calculateProgress = () => {
      const answeredCount = Object.keys(answers).length;
      const totalCount = data.length;
      const percentage = (answeredCount / totalCount) * 100;
      setProgress(percentage.toFixed(2));
    };

    calculateProgress();
  }, [answers, data]);

  const handleNext = () => {
    const currentQuestion = data[currentIndex];
    const currentAnswer = answers[currentQuestion.id];

    // Check if the current question is required and has not been answered
    if (currentQuestion.required && !currentAnswer) {
      setAlert("Please answer the current question before proceeding.");
      return;
    }
    if (currentIndex === data.length - 1) {
      setAlert("Form Submitted Successfully.");
    }

    if (currentIndex < data.length) {
      setCurrentIndex((prev) => prev + 1);
    }

    if (currentIndex === 2 && currentAnswer == "Male") {
      setCurrentIndex(data.length);
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

  const setAlert = (message) => {
    setAlertMsg(message);
    setTimeout(() => {
      setAlertMsg(null);
    }, 2500);
  };

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      {alertMsg ? <Alert message={alertMsg} /> : null}

      {isLoading ? <Loader /> : null}

      <div className="sm:mx-0 flex justify-center items-center w-full ">
        <div id="MainContent">
          <div className="">
            {data.map((item, i) => {
              console.log("currentIndex: ", currentIndex);
              if (currentIndex === i) {
                switch (item.question_type) {
                  case 1:
                    return (
                      <RadioQues
                        question={item}
                        currentIndex={currentIndex}
                        handleAnswerChange={handleAnswerChange}
                        answers={answers}
                        data={data}
                        handleNext={handleNext}
                      />
                    );
                  case 2:
                    return (
                      <DropdownQues
                        question={item}
                        currentIndex={currentIndex}
                        handleAnswerChange={handleAnswerChange}
                        answers={answers}
                        data={data}
                        handleNext={handleNext}
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
                        data={data}
                      />
                    );
                  case 4:
                    return (
                      <InputQues
                        question={item}
                        currentIndex={currentIndex}
                        handleAnswerChange={handleAnswerChange}
                        answers={answers}
                        data={data}
                        handleNext={handleNext}
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
                        data={data}
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

            {currentIndex === data.length && !isLoading ? (
              <Submit answers={answers} data={data} />
            ) : null}
          </div>
          <br />
        </div>
      </div>

     
      <Footer
        progress={progress}
        data={data}
        currentIndex={currentIndex}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </div>
  );
};

export default App;
