import React from "react";
import Footer from "../components/Footer";

const About = () => {
  return (
    <section>
      <div className="container px-10 p-4 py-10">
        <h1 className="text-3xl font-bold text-center mb-4">About Quiz App</h1>
        <div className="border border-orange-500 shadow-lg shadow-black p-2 ps-5 ">
          <p className="text-lg mb-2">
            Welcome to the Quiz App! This application is designed to help you
            test your knowledge on various subjects. Whether you're studying for
            an exam, looking to brush up on your skills, or simply want to
            challenge yourself, our quizzes offer a fun and engaging way to
            learn.
          </p>
          <p className="text-lg mb-2">
            We offer a wide range of quizzes covering topics such as:
          </p>
          <ul className="list-disc ml-4">
            <li>General Knowledge</li>
            <li>Science</li>
            <li>History</li>
            <li>Geography</li>
            <li>Technology</li>
            <li>And more!</li>
          </ul>
          <p className="text-lg mb-2">
            Each quiz consists of multiple-choice questions with varying
            difficulty levels. Track your progress, compete with friends, and
            discover new things with every quiz you take.
          </p>
          <p className="text-lg">
            We are constantly adding new quizzes and features to the app, so be
            sure to check back often!
          </p>
        </div>
      </div>

      <div className="container mx-auto p-8 text-center py-20">
        <h1 className="text-3xl font-bold mb-8">Welcome, Folks!</h1>
        <h2 className="text-xl font-semibold mb-6">Why Study With Us</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-gray-100 hover:bg-orange-400 rounded-lg p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-10 h-10 mx-auto mb-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-lg font-semibold mb-2">Certification</h3>
            <p>Get certification from a respected organization</p>
          </div>

          <div className="bg-gray-100 hover:bg-orange-400 rounded-lg p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-10 h-10 mx-auto mb-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.846-1.11 2.846-2.5 0-1.39-1.306-2.5-2.846-2.5H5.072a2.846 2.846 0 00-2.846 2.5c0 1.39 1.306 2.5 2.846 2.5z"
              />
            </svg>
            <h3 className="text-lg font-semibold mb-2">Teaching Materials</h3>
            <p>Use modern learning materials for over 15 language courses</p>
          </div>

          <div className="bg-gray-100 hover:bg-orange-400 rounded-lg p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-10 h-10 mx-auto mb-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.846-1.11 2.846-2.5 0-1.39-1.306-2.5-2.846-2.5H5.072a2.846 2.846 0 00-2.846 2.5c0 1.39 1.306 2.5 2.846 2.5z"
              />
            </svg>
            <h3 className="text-lg font-semibold mb-2">Career Upgrade</h3>
            <p>
              Enhance your professional and academic CV as you travel the world
            </p>
          </div>

          <div className="bg-gray-100 hover:bg-orange-400 rounded-lg p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-10 h-10 mx-auto mb-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0"
              />
            </svg>
            <h3 className="text-lg font-semibold mb-2">
              Superior Accommodation
            </h3>
            <p>Over 100 rooms in premium residences and welcoming homestays</p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default About;
