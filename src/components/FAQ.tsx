"use client";

import { useState } from "react";

const leftFaqs = [
  {
    q: "What is JABB?",
    a: "JABB is the first citizen-powered mystery shopping platform in Morocco. It connects brands with everyday consumers who evaluate real customer experiences using their smartphones.",
  },
  {
    q: "How does mystery shopping work on JABB?",
    a: "After signing up as a JABBer, you receive missions to visit specific locations. You evaluate the experience following a detailed checklist, submit GPS-verified evidence, and earn rewards upon validation.",
  },
  {
    q: "Who can become a JABBer?",
    a: "Anyone with a smartphone and attention to detail can join. Whether you are a student, freelancer, or professional, JABB missions fit around your schedule.",
  },
  {
    q: "How do businesses benefit from JABB?",
    a: "Businesses receive real-time, unbiased customer experience data from their own locations. This helps identify service gaps, train staff, and improve satisfaction scores.",
  },
  {
    q: "Is my data safe with JABB?",
    a: "Absolutely. JABB uses industry-standard encryption and strict privacy policies. Your personal data is never shared with third parties without your explicit consent.",
  },
];

const rightFaqs = [
  {
    q: "How do I get paid as a JABBer?",
    a: "After your mission report is validated, earnings are credited to your JABB wallet. You can cash out via bank transfer or mobile payment at any time.",
  },
  {
    q: "What types of missions are available?",
    a: "Missions range from restaurant visits and retail store evaluations to service center audits, online purchase experiences, and phone-based customer support assessments.",
  },
  {
    q: "How does the AI reporting work?",
    a: "Our AI engine analyzes field data, photos, and evaluations to generate instant reports with trends, scores, and strategic recommendations for business partners.",
  },
  {
    q: "Is JABB available in my city?",
    a: "JABB is currently active in major Moroccan cities including Casablanca, Rabat, Marrakech, Tanger, Fes, and Agadir. We are rapidly expanding to new regions.",
  },
  {
    q: "How do I download the app and create an account?",
    a: "Download JABB from the App Store or Google Play, then create an account using your phone number or email address. It takes less than two minutes to get started.",
  },
];

function AccordionItem({
  q,
  a,
  isOpen,
  onToggle,
}: {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className={`accordion__item${isOpen ? " accordion__item--open" : ""}`}>
      <div className="accordion__item__trigger" onClick={onToggle}>
        <span className="accordion__item__trigger__title">{q}</span>
        <span className="accordion__item__trigger__icon">+</span>
      </div>
      <div className="accordion__item__collapse">
        <div className="accordion__item__collapse__content">{a}</div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="section-faqs" className="faqs section fade-up">
      <div className="container">
        <div className="flex flex--column row-gap-7">
          <div className="max-w-md m-x-auto">
            <h3 className="text-center">Frequently Asked Questions</h3>
            <h5 className="text-center">
              Have a question? We are here to help.
            </h5>
          </div>

          <div className="accordion">
            <div className="grid-2 grid-1-lg gap-6">
              <div className="flex flex--column row-gap-6">
                {leftFaqs.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    q={faq.q}
                    a={faq.a}
                    isOpen={openIndex === i}
                    onToggle={() => toggle(i)}
                  />
                ))}
              </div>
              <div className="flex flex--column row-gap-6">
                {rightFaqs.map((faq, i) => (
                  <AccordionItem
                    key={i + leftFaqs.length}
                    q={faq.q}
                    a={faq.a}
                    isOpen={openIndex === i + leftFaqs.length}
                    onToggle={() => toggle(i + leftFaqs.length)}
                  />
                ))}
              </div>
            </div>
          </div>

          <h3 className="text-center">Have another question?</h3>
          <div className="m-x-auto">
            <a href="#contact" className="button">
              Frequently Asked Questions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
