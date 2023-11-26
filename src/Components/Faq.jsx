import React, { useState } from "react";
import arrow from "../images/icon-arrow.svg";
import arrowRed from "../images/icon-arrow.svg";

const Question = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <article className="py-3 border-t border-slate-300 last:border-b last:border-slate-300">
      <div
        onClick={() => setShowAnswer(!showAnswer)}
        className="flex items-center justify-between cursor-pointer"
      >
        <h2 className="font-normal text-lg hover:text-red-400">{question}</h2>
        <button>
          {showAnswer ? (
            <img src={arrowRed} alt="" className="transform rotate-180" />
          ) : (
            <img src={arrow} alt="" />
          )}
        </button>
      </div>
      {showAnswer && <p>{answer}</p>}
    </article>
  );
};

const FAQs = () => {
  const questions = [
    {
      id: 1,
      question: "What is Bookmark?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
    },
    {
      id: 2,
      question: "How can I request a new browser?",
      answer:
        "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
    },
    {
      id: 3,
      question: "Is there a mobile app?",
      answer:
        "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
    },
    {
      id: 4,
      question: "What about other Chromium browsers?",
      answer:
        "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
    },
  ];

  return (
    <section className="max-w-xl mx-auto px-8 py-20">
      <article className="text-center">
        <h2 className="text-3xl mb-8 lg:text-4xl font-bold">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600">
          Here are some of our FAQs. If you have any other questions you’d
          like answered please feel free to email us.
        </p>
      </article>

      <article>
        <div className="my-8">
          {questions.map((item) => (
            <Question key={item.id} {...item} />
          ))}
        </div>

        <button className="btn-blue text-white py-2 px-4 rounded shadow-lg hover:opacity-75 block mx-auto">
          More Info
        </button>
      </article>
    </section>
  );
};

export default FAQs;
