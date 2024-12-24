import React from "react";

const QaCard = ({
  questionData,
  questionNumber,
  totalQuestion,
  handleAnswer,
  quitQuiz,
}) => {
  return (
    <div className="text-center text-2xl mt-2 mb-5">
      {/* header section start */}
      <div className="card-header d-flex  p-2 text-white font-bold">
        <h6 className="text-2xl text-black">
          Total Question :{questionNumber} of {totalQuestion}
        </h6>
        {/* button to quit the Quiz */}
        <button className="rounded bg-red-500" onClick={() => quitQuiz()}>
          Quit
        </button>
      </div>
      {/* header section end */}
      {/* card-body-start */}
      <div className="card-body">
        {/* questions */}
        <p className="text-danger font-bold mb-2">{questionData?.question}</p>
        {/* options start */}
        <div className="flex flex-col gap-3 items-center">
          {questionData?.options.map((option) => (
            <button
              className="w-1/2 rounded hover:bg-green-500"
              key={option}
              onClick={() => handleAnswer(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      {/* card-body-end */}
    </div>
  );
};

export default QaCard;
