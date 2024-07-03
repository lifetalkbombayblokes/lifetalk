"use client"
import React, { useState } from 'react';

interface AccordionProps {
  accordionData: {
    title: string;
    content: string;
  }[];
}

const Accordion: React.FC<AccordionProps> = ({ accordionData }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section>
      {accordionData.map((accordion, index) => (
        <div key={index} className={`collapse my-2 ${openIndex === index ? 'bg-[#26275F] bg-opacity-20 text-white' : 'bg-transparent text-white  border-b '}`}>
          <input
            type="radio"
            name="my-accordion-3"
            checked={openIndex === index}
            onChange={() => setOpenIndex(index)}
            className="hidden"
          />
          <div className="collapse-title footer-class subheading p-4 md:p font-medium flex justify-between items-center cursor-pointer" onClick={() => setOpenIndex(openIndex === index ? null : index)}>
            <h2 className=' leading-none'>
              <b>{accordion.title}</b>
            </h2>
            {openIndex === index ? (
              <div className="bg-[#8A84E2] p-2 rounded-[30px] content-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                </svg>
              </div>
            ) : (
              <div className="bg-[#26275F] p-2 rounded-[30px] content-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </div>
            )}
          </div>
          {openIndex === index && (
            <div className={`collapse-content ${openIndex === index ? 'text-white bg-opacity-0 ' : ''}`}>
              <p>{accordion.content}</p>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}

export default Accordion;
