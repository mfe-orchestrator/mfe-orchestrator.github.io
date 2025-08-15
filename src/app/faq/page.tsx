'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'What is a Micro-Frontend?',
    answer: 'A micro-frontend is an architectural style where a web application is split into smaller, independent applications that can be developed, tested, and deployed separately. Each micro-frontend represents a specific feature or page of the application.'
  },
  {
    question: 'How does MFE Orchestrator work?',
    answer: 'MFE Orchestrator provides a framework for managing and integrating multiple micro-frontends into a single cohesive application. It handles routing, state management, and communication between different micro-frontends, making it easier to scale and maintain large applications.'
  },
  {
    question: 'What are the benefits of using micro-frontends?',
    answer: 'Micro-frontends offer several benefits including: independent deployment, technology agnosticism, team autonomy, better scalability, and the ability to upgrade or update parts of the application without affecting others.'
  },
  {
    question: 'Is MFE Orchestrator framework-agnostic?',
    answer: 'Yes, MFE Orchestrator is designed to work with any JavaScript framework or library, including React, Angular, Vue, and more. This allows teams to choose the best technology for each micro-frontend.'
  },
  {
    question: 'How does MFE Orchestrator handle shared dependencies?',
    answer: 'MFE Orchestrator includes a module federation system that allows sharing of common dependencies between micro-frontends, reducing bundle sizes and ensuring consistency across the application.'
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
          Frequently Asked Questions
        </h1>
        <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500 dark:text-gray-300">
          Find answers to common questions about MFE Orchestrator and micro-frontend architecture.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-200"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-5 text-left focus:outline-none"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {faq.question}
                </h3>
                <span className="text-gray-400">
                  {openIndex === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </span>
              </div>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-5 pt-0">
                <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
