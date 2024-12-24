import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 px-20">
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
        <p>Get the Latest News and Special Offers</p>
        <div className="flex mt-4 justify-center">
          <input type="email" placeholder="Your Email" className="w-1/3" />
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-r-lg">
            Sign up
          </button>
        </div>
      </div>
      <div className="container mx-auto flex flex-col sm:flex-row mx-auto justify-between mt-5">
        <div className="space-y-4 ">
          <h3 className="text-lg font-semibold mb-4">Conditions</h3>
          <ul className="list-disc">
            <li>For HTML Quizes</li>
            <li>For CSS Quizes </li>
            <li>For Bootstrap Quizes</li>
            <li>For React Quizess</li>
          </ul>
        </div>

        <div className="space-y-4 mt-4">
          <h3 className="text-lg font-semibold mb-4">Menu</h3>
          <ul className="list-disc">
            <li>About Us</li>
            <li>Quiz</li>
            <li>Blog</li>
            <li>Gallery</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div className="space-y-4 mt-4">
          <h3 className="text-lg font-semibold mb-4">Useful Info</h3>
          <ul className="list-disc">
            <li>Working with Us</li>
            <li>Online Placement Test</li>
            <li>Social Programme</li>
            <li>Testimonials</li>
            <li>Study Guide</li>
          </ul>
        </div>

        <div className="space-y-4 mt-4">
          <h3 className="text-lg font-semibold mb-4">Social</h3>
          <ul className="list-disc">
            <li>Facebook</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-8">
        <p>&copy; 2024 All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
