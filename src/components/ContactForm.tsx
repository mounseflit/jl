"use client";

import { useState, useCallback } from "react";
import { useTranslation } from "@/lib/I18nProvider";

interface ContactData {
  name: string;
  email: string;
  phone: string;
  business: string;
  reason: string;
  message: string;
}

const INITIAL: ContactData = {
  name: "",
  email: "",
  phone: "",
  business: "",
  reason: "",
  message: "",
};

const REASON_OPTIONS = [
  "Partnership",
  "Support",
  "Careers",
  "Help",
  "Investment",
  "API",
  "Issue",
  "Contribution",
];

export default function ContactForm() {
  const { t } = useTranslation();
  const [step, setStep] = useState(0);
  const [data, setData] = useState<ContactData>(INITIAL);
  const [submitted, setSubmitted] = useState(false);

  const steps: {
    key: keyof ContactData;
    num: string;
    question: string;
    placeholder: string;
    type: "text" | "email" | "tel" | "select" | "textarea";
    options?: string[];
    required?: boolean;
  }[] = [
    {
      key: "name",
      num: "01",
      question: t("contactForm.q1"),
      placeholder: t("contactForm.p1"),
      type: "text",
      required: true,
    },
    {
      key: "email",
      num: "02",
      question: t("contactForm.q2"),
      placeholder: t("contactForm.p2"),
      type: "email",
      required: true,
    },
    {
      key: "phone",
      num: "03",
      question: t("contactForm.q3"),
      placeholder: t("contactForm.p3"),
      type: "tel",
      required: true,
    },
    {
      key: "business",
      num: "04",
      question: t("contactForm.q4"),
      placeholder: t("contactForm.p4"),
      type: "text",
    },
    {
      key: "reason",
      num: "05",
      question: t("contactForm.q5"),
      placeholder: t("contactForm.p5"),
      type: "select",
      options: REASON_OPTIONS,
      required: true,
    },
    {
      key: "message",
      num: "06",
      question: t("contactForm.q6"),
      placeholder: t("contactForm.p6"),
      type: "textarea",
      required: true,
    },
  ];

  const total = steps.length;
  const current = steps[step];
  const progress = ((step + 1) / total) * 100;

  const updateField = useCallback(
    (value: string) => {
      setData((prev) => ({ ...prev, [current.key]: value }));
    },
    [current?.key]
  );

  const canProceed = current.required
    ? data[current.key].trim().length > 0
    : true;

  const next = () => {
    if (step < total - 1) setStep((s) => s + 1);
    else handleSubmit();
  };

  const prev = () => {
    if (step > 0) setStep((s) => s - 1);
  };

  const handleSubmit = () => {
    console.log("Contact form:", data);
    setSubmitted(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && canProceed && current.type !== "textarea") {
      e.preventDefault();
      next();
    }
  };

  if (submitted) {
    return (
      <section id="section-contact" className="contact-form-section contact-form-section--spacious">
        <div className="container mx-auto max-w-[760px] px-6">
          <div className="contact-form__card contact-form__success">
            <div style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>✓</div>
            <h3 className="contact-form__success-title">
              {t("contactForm.thankYou")}, {data.name.split(" ")[0]}!
            </h3>
            <p className="contact-form__success-text">
              {t("contactForm.successMsg")}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="section-contact"
      className="contact-form-section contact-form-section--spacious"
      onKeyDown={handleKeyDown}
    >
      <div className="container mx-auto max-w-[760px] px-6">
        <div className="text-center mb-10">
          <span className="text-[var(--color-primary)] text-xs font-bold uppercase tracking-widest mb-2 block">
            {t("nav.contact")}
          </span>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[var(--color-text)] leading-tight">
            {t("faq.anotherQuestion")}
          </h3>
        </div>

        {/* Progress bar */}
        <div className="contact-form__progress-track">
          <div
            className="contact-form__progress-bar"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="contact-form__card" key={step}>
          <span className="contact-form__step-num">
            {current.num} / {String(total).padStart(2, "0")}
          </span>
          <h4 className="contact-form__question">{current.question}</h4>

          {current.type === "select" ? (
            <div className="contact-form__options">
              {current.options!.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  className={`contact-form__option ${
                    data[current.key] === opt ? "contact-form__option--active" : ""
                  }`}
                  onClick={() => updateField(opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
          ) : current.type === "textarea" ? (
            <textarea
              className="contact-form__textarea"
              value={data[current.key]}
              onChange={(e) => updateField(e.target.value)}
              placeholder={current.placeholder}
              rows={5}
            />
          ) : (
            <input
              className="contact-form__input"
              type={current.type}
              value={data[current.key]}
              onChange={(e) => updateField(e.target.value)}
              placeholder={current.placeholder}
            />
          )}

          <div className="contact-form__actions">
            {step > 0 && (
              <button
                type="button"
                className="contact-form__btn contact-form__btn--back"
                onClick={prev}
              >
                ←
              </button>
            )}
            <button
              type="button"
              className="contact-form__btn contact-form__btn--next"
              onClick={next}
              disabled={!canProceed}
              style={{ opacity: canProceed ? 1 : 0.45 }}
            >
              {step === total - 1 ? t("contactForm.send") : t("contactForm.next")}
              {step < total - 1 && " →"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
