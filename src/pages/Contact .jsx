import React from "react";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto py-20 px-20">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Get in Touch With Us
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name*
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  E-mail*
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message*
                </label>
                <textarea
                  id="message"
                  className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="pt-5 ">
            <h2 className="text-xl font-bold mb-4">Contact Information</h2>
            <p className="mb-1">
              <b>Address:</b> 123 Broadway, New York, NY 01001
            </p>
            <p className="mb-1">
              <b>The office is open:</b> Monday - Friday 9:00 am - 7:00 pm
            </p>
            <p className="mb-1">
              <b>Phone:</b> 123-456-7890, 098-765-4321
            </p>
            <p className="mb-1">
              <b>E-mail:</b> info@yoursite.com
            </p>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
};

export default Contact;
