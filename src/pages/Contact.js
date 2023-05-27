import React, { useRef, useState } from "react";
import ContactImg from "../assets/contact.jpg";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState("");
  const [sendingState, setSendingState] = useState(false);

  const formRef = useRef();

  const sendEmail = (e) => {
  
    e.preventDefault();

    setSendingState(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
      )
      .then((result) => {
        alert("Message Sent, Thank you for your response", result.text);
        setEmail("");
        setSubject("");
        setMessage("");
        setNumber("");
        setSendingState(false);
      })
      .catch((err) => {
        alert("An error occurred, Please try again", err.text);
        setSendingState(false);
      });
  };

  return (
    <>
      <Layout className="contact flex-1 flex mt-32 md:mt-14 mb-32 md:mb-auto items-center justify-center">
        <div className="flex w-full justify-center items-center px-4">
          <img
            className="w-1/2 hidden md:block"
            src={ContactImg}
            alt="contact"
          />
          <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="space-y-6"
              action="#"
            >
              <h5 className="text-xl text-center font-semibold text-gray-900 dark:text-white">
                Contact Us
              </h5>
              <div class="mb-6">
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div class="mb-6">
                <label
                  for="test"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Phone
                </label>
                <input
                  type="text"
                  id="number"
                  minLength={10}
                  maxLength={10}
                  name="number"
                  onChange={(e) => setNumber(e.target.value)}
                  value={number}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Contact No."
                  required
                />
              </div>
              <div class="mb-6">
                <label
                  for="subject"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div class="mb-6">
                <label
                  for="message"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  name="message"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {sendingState ? "Sending..." : "Send Email"}
              </button>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-300"></div>
            </form>
          </div>
        </div>
      </Layout>
      <Footer />
    </>
  );
};

export default Contact;
