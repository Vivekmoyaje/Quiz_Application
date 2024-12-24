import React from "react";
import { Questions } from "../data/question";

const TestSelection = ({ onselectCategory }) => {
  // hardcoded values to test
  // let categories = ["HTML", "CSS", "Bootstrap", "Javascript"];

  // accessing the values dynamically
  let categories = Object.keys(Questions);

  return (
    <div className="container">
      <h2 className="text-center text-2xl mt-2 mb-5">
        Take the test To Ace Interviews{" "}
      </h2>
      <div className="card w-[80%] mx-auto  p-4 shadow shadow-orange-500 ">
        <div className=" md:flex p-4 justify-around">
          {categories.map((sub) => (
            <button
              key={sub}
              onClick={() => onselectCategory(sub)}
              className="w-[85%] mx-5 my-5 rounded hover:bg-green-500 text-2xl"
            >
              {sub}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestSelection;
