"use client"
import React, { useState } from 'react'
import faqData from '../../data/faq';
import styles from "../../styles/Homepage.module.css"

const FAQS = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="py-16 px-4 xl:px-28 bg-black text-white">
      <h1 
        className={`${styles.league} mb-6 ml-4 text-[128px] text-[#7DDEDA] font-light`}
      >
        FAQs
      </h1>
      <div className="flex flex-col max-w-full mx-auto gap-1.5">
        {faqData.map((faq) => (
          <div
            key={faq.id}
            className={`p-6 cursor-pointer rounded-lg transition-all duration-700 ease-in-out
              ${hoveredId === faq.id ? 'bg-[#002320]' : 'bg-[#151515]'}`}
            onMouseEnter={() => setHoveredId(faq.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="flex items-center gap-16">
              <p  
                className={`${styles.league} text-[32px] font-light min-w-[2rem]`}
              >
                {faq.id}
              </p>
              <p 
                className={`${styles.league} text-[32px] font-light transition-colors duration-700 ease-in-out
                  ${hoveredId === faq.id ? 'text-[#00FFF0]' : 'text-white'}`}
              >
                {faq.question}
              </p>
            </div>
            <div 
              className={`overflow-hidden transition-all duration-700 ease-in-out
                ${hoveredId === faq.id ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
            >
              <p 
                className={`${styles.raleway} text-[20px] ml-24 text-white/80`}
              >
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQS
