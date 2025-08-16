"use client"
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
  }
  
  const faqs: FAQItem[] = [
    {
      question: 'What is a Micro-Frontend Orchestrator?',
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
      question: "Do I need to change my existing setup?",
      answer: "No, MFE Orchestrator is designed to work with any JavaScript framework or library, including React, Angular, Vue, and more. This allows teams to choose the best technology for each micro-frontend."
    },
    {
      question: 'How does MFE Orchestrator handle shared dependencies?',
      answer: 'MFE Orchestrator includes a module federation system that allows sharing of common dependencies between micro-frontends, reducing bundle sizes and ensuring consistency across the application.'
    },
    // {
    //   question: "How does the waitlist work?",
    //   answer: "Sign up and you'll get weekly insights on MFE architecture while we build. When we launch, waitlist members get priority access and special early-bird pricing."
    // }
  ];
  
  export default function FAQList() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
  
    const toggleFAQ = (index: number) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  
    return (  
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-0 last:pb-0">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left focus:outline-none group"
              >
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-medium text-gray-400 dark:text-gray-100 transition-colors duration-200 group-hover:text-primary">
                    {faq.question}
                  </h3>
                  <span className={`text-gray-400 ml-4 mt-1 transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180 text-primary' : ''
                  }`}>
                    <ChevronDown size={20} />
                  </span>
                </div>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-200 dark:text-gray-200 answer-enter pr-6">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
    );
  }
  