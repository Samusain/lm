import React, { useState, useEffect, useRef } from 'react';
import '../styles/FAQ.css';

const FAQ = ({ faqs = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);

  // Default FAQs if none provided
  const defaultFAQs = [
    {
        question: "How do you ensure you understand our business needs?",
        answer: "We start every project with a deep discovery process, learning about your business, customers, competitors, and goals to ensure our solutions drive real results."
    },
    {
      question: "Our web development process?",
      answer: "We follow a comprehensive process including discovery, strategy, design, development, testing, and launch. Each project includes responsive design, SEO basics, and training on how to manage your new site."
    },
    {
      question: "How do you optimize ad campaigns for better ROI?",
      answer: "We continuously test ad copy, targeting, landing pages, and bids. Using data-driven insights, we reallocate budget to top-performing campaigns and audiences."
    },
    {
      question: "What digital marketing services do you offer?",
      answer: "Our full-service offerings include SEO, content marketing, social media management, email marketing, marketing automation, and comprehensive analytics reporting."
    },
    {
        question: "Do you implement security measures?",
        answer: "We build with security best practices, implement SSL certificates, regular security updates, and can add advanced protection measures based on your needs."
    }
  ];

  const questions = faqs.length > 0 ? faqs : defaultFAQs;

  useEffect(() => {
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Reset progress when active index changes
    setProgress(0);

    // Set up new interval
    intervalRef.current = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          // Move to next question when progress completes
          setActiveIndex((prevIndex) => (prevIndex + 1) % questions.length);
          return 0;
        }
        return prevProgress + 1;
      });
    }, 50); // Update every 50ms for smooth animation (5 seconds total)

    // Cleanup on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [activeIndex, questions.length]);

  const handleQuestionClick = (index) => {
    setActiveIndex(index);
    setProgress(0);
  };

  return (
    <div className="faq-container">
      {/* <div className="faq-header">
        <h2>Frequently Asked Questions</h2>
      </div> */}
      
      <div className="faq-content">
        {questions.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${index === activeIndex ? 'active' : ''}`}
            onClick={() => handleQuestionClick(index)}
          >
            <div className="faq-question">
              <h3>{faq.question}</h3>
              {/* <span className="faq-indicator">
                {index === activeIndex ? '−' : '+'}
              </span> */}
            </div>
            
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>

            {/* Progress Bar - Only visible for active item */}
            {index === activeIndex && (
              <div className="progress-bar-container">
                <div 
                  className="progress-bar" 
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;