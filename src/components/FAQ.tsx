"use client";
import { faq } from "@/data/faq";
import { CirclePlus } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [index, setIndex] = useState<number | null>(null);

  const handelOpen = (i: number) => {
    if (i === index) {
      setIndex(null);
    } else {
      setIndex(i);
    }
  };

  return (
    <div className="mt-12 mb-20">
      <ul>
        {faq.map((question, i) => {
          return (
            <li key={i}>
              <div
                onClick={() => handelOpen(i)}
                className="flex justify-between py-10 border-b cursor-pointer"
              >
                <h1 className="text-[18px] font-semibold text-brand">
                  {question.title}
                </h1>
                <CirclePlus className="text-gray-400" />
              </div>
              {index === i && <p className="py-5">{question.description}</p>}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FAQ;
