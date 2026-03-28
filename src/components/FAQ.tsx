"use client";

import { useState } from "react";
import { useTranslation } from "@/lib/I18nProvider";
import type { TranslationKey } from "@/lib/i18n";

const leftFaqKeys: { qKey: TranslationKey; aKey: TranslationKey }[] = [
  { qKey: "faq.q1", aKey: "faq.a1" },
  { qKey: "faq.q2", aKey: "faq.a2" },
  { qKey: "faq.q3", aKey: "faq.a3" },
  { qKey: "faq.q4", aKey: "faq.a4" },
  { qKey: "faq.q5", aKey: "faq.a5" },
];

const rightFaqKeys: { qKey: TranslationKey; aKey: TranslationKey }[] = [
  { qKey: "faq.q6", aKey: "faq.a6" },
  { qKey: "faq.q7", aKey: "faq.a7" },
  { qKey: "faq.q8", aKey: "faq.a8" },
  { qKey: "faq.q9", aKey: "faq.a9" },
  { qKey: "faq.q10", aKey: "faq.a10" },
];

function AccordionItem({
  q, a, isOpen, onToggle,
}: {
  q: string; a: string; isOpen: boolean; onToggle: () => void;
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
  const { t } = useTranslation();

  const toggle = (idx: number) => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <section id="section-faqs" className="faqs section fade-up">
      <div className="container">
        <div className="flex flex--column row-gap-7">
          <div className="max-w-md m-x-auto">
            <h3 className="text-center">{t("faq.title")}</h3>
            <h5 className="text-center">{t("faq.subtitle")}</h5>
          </div>

          <div className="accordion">
            <div className="grid-2 grid-1-lg gap-6">
              <div className="flex flex--column row-gap-6">
                {leftFaqKeys.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    q={t(faq.qKey)}
                    a={t(faq.aKey)}
                    isOpen={openIndex === i}
                    onToggle={() => toggle(i)}
                  />
                ))}
              </div>
              <div className="flex flex--column row-gap-6">
                {rightFaqKeys.map((faq, i) => (
                  <AccordionItem
                    key={i + leftFaqKeys.length}
                    q={t(faq.qKey)}
                    a={t(faq.aKey)}
                    isOpen={openIndex === i + leftFaqKeys.length}
                    onToggle={() => toggle(i + leftFaqKeys.length)}
                  />
                ))}
              </div>
            </div>
          </div>

          <h3 className="text-center">{t("faq.anotherQuestion")}</h3>
          <div className="m-x-auto">
            <a href="#contact" className="button">{t("faq.title")}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
