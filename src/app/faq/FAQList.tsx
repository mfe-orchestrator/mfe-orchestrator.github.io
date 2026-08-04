"use client"
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '@/lib/faqs';

/**
 * The questions themselves now live in @/lib/faqs so the FAQPage structured
 * data on the page is generated from the same source. Answers stay in the
 * rendered HTML even when collapsed — a crawler never clicks the toggle.
 */
export default function FAQList() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-6">
      {faqs.map((faq, index) => (
        <div key={faq.question} className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-0 last:pb-0">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full text-left focus:outline-none group"
            aria-expanded={openIndex === index}
          >
            <div className="flex items-start justify-between">
              <h2 className="text-lg font-medium text-gray-300 dark:text-gray-100 transition-colors duration-200 group-hover:text-primary">
                {faq.question}
              </h2>
              <span className={`text-gray-400 ml-4 mt-1 transition-transform duration-300 flex-shrink-0 ${
                openIndex === index ? 'rotate-180 text-primary' : ''
              }`}>
                <ChevronDown size={20} />
              </span>
            </div>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? 'max-h-[32rem] opacity-100 mt-3' : 'max-h-0 opacity-0'
            }`}
          >
            <p className="text-gray-200 dark:text-gray-200 answer-enter pr-6 leading-relaxed">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
