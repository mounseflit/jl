"use client";

import { useState, useCallback } from "react";
import JabbLogo from "@/components/JabbLogo";

/**
 * Typeform-style multi-step partner application form.
 * One question per screen, smooth transitions, progress bar.
 */

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  businessType: string;
  city: string;
  locations: string;
  message: string;
}

const INITIAL: FormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  businessType: "",
  city: "",
  locations: "",
  message: "",
};

type Step = {
  key: keyof FormData;
  num: string;
  question: string;
  placeholder: string;
  type: "text" | "email" | "tel" | "select" | "textarea";
  options?: string[];
  hint?: string;
  required?: boolean;
};

const STEPS: Step[] = [
  {
    key: "name",
    num: "01",
    question: "What is your full name?",
    placeholder: "e.g. Ahmed Benali",
    type: "text",
    required: true,
  },
  {
    key: "email",
    num: "02",
    question: "What is your business email?",
    placeholder: "e.g. ahmed@mybusiness.ma",
    type: "email",
    required: true,
  },
  {
    key: "phone",
    num: "03",
    question: "What is your phone number?",
    placeholder: "e.g. +212 6XX-XXXXXX",
    type: "tel",
    required: true,
  },
  {
    key: "company",
    num: "04",
    question: "What is your company or brand name?",
    placeholder: "e.g. Café Noir",
    type: "text",
    required: true,
  },
  {
    key: "businessType",
    num: "05",
    question: "What type of business do you run?",
    placeholder: "Select your industry",
    type: "select",
    options: [
      "Restaurant / Café",
      "Retail / Shop",
      "Hotel / Hospitality",
      "Banking / Financial Services",
      "Telecom / Tech",
      "Healthcare / Pharmacy",
      "Other",
    ],
    required: true,
  },
  {
    key: "city",
    num: "06",
    question: "In which city are you located?",
    placeholder: "e.g. Casablanca",
    type: "text",
    required: true,
  },
  {
    key: "locations",
    num: "07",
    question: "How many locations do you have?",
    placeholder: "e.g. 5",
    type: "text",
    hint: "Approximate number is fine",
  },
  {
    key: "message",
    num: "08",
    question: "Anything else you would like us to know?",
    placeholder: "Tell us about your goals, challenges, or questions...",
    type: "textarea",
    hint: "Optional — press Submit to finish",
  },
];

export default function PartnerPage() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>(INITIAL);
  const [submitted, setSubmitted] = useState(false);

  const total = STEPS.length;
  const current = STEPS[step];
  const progress = ((step + 1) / total) * 100;

  const updateField = useCallback(
    (value: string) => {
      setData((prev) => ({ ...prev, [current.key]: value }));
    },
    [current?.key]
  );

  const canProceed = current
    ? current.required
      ? data[current.key].trim().length > 0
      : true
    : false;

  const next = () => {
    if (step < total - 1) setStep((s) => s + 1);
    else handleSubmit();
  };

  const prev = () => {
    if (step > 0) setStep((s) => s - 1);
  };

  const handleSubmit = () => {
    // In production, send to API endpoint / webhook
    console.log("Partner application:", data);
    setSubmitted(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && canProceed && current?.type !== "textarea") {
      e.preventDefault();
      next();
    }
  };

  if (submitted) {
    return (
      <div className="typeform" style={{ background: "var(--color-primary)" }}>
        <div className="typeform__card typeform__success" style={{ color: "white" }}>
          <div style={{ fontSize: "4rem", marginBottom: "1.5rem" }}>🎉</div>
          <h2 style={{ color: "white" }}>Thank you, {data.name.split(" ")[0]}!</h2>
          <p style={{ opacity: 0.8, lineHeight: 1.7, maxWidth: 460, margin: "0 auto 2rem" }}>
            Your partner application has been received. Our team will review it
            and get back to you within 24 hours.
          </p>
          <a href="/" className="button" style={{ background: "white", color: "var(--color-primary)" }}>
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="typeform" onKeyDown={handleKeyDown}>
      {/* Progress bar */}
      <div className="typeform__progress" style={{ width: `${progress}%` }} />

      {/* Top-left logo */}
      <a
        href="/"
        style={{
          position: "fixed",
          top: "1.5rem",
          left: "1.5rem",
          display: "flex",
          alignItems: "center",
          gap: "0.3rem",
          color: "var(--color-text)",
          textDecoration: "none",
          zIndex: 10,
        }}
      >
        <JabbLogo size={24} />
        <span style={{ fontWeight: 800, fontSize: "1rem" }}>JABB</span>
      </a>

      {/* Step counter top-right */}
      <span
        style={{
          position: "fixed",
          top: "1.75rem",
          right: "1.5rem",
          fontSize: "0.85rem",
          color: "var(--color-text-muted)",
          zIndex: 10,
        }}
      >
        {step + 1} / {total}
      </span>

      <div className="typeform__card" key={step}>
        <span className="typeform__question-num">Question {current.num}</span>
        <h2 className="typeform__question">{current.question}</h2>

        {current.type === "select" ? (
          <select
            className="typeform__select"
            value={data[current.key]}
            onChange={(e) => updateField(e.target.value)}
            autoFocus
          >
            <option value="">{current.placeholder}</option>
            {current.options!.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        ) : current.type === "textarea" ? (
          <textarea
            className="typeform__textarea"
            value={data[current.key]}
            onChange={(e) => updateField(e.target.value)}
            placeholder={current.placeholder}
            autoFocus
          />
        ) : (
          <input
            className="typeform__input"
            type={current.type}
            value={data[current.key]}
            onChange={(e) => updateField(e.target.value)}
            placeholder={current.placeholder}
            autoFocus
          />
        )}

        {current.hint && <p className="typeform__hint">{current.hint}</p>}

        <div className="typeform__actions">
          {step > 0 && (
            <button
              type="button"
              className="typeform__btn typeform__btn--secondary"
              onClick={prev}
            >
              ← Back
            </button>
          )}
          <button
            type="button"
            className="typeform__btn typeform__btn--primary"
            onClick={next}
            disabled={!canProceed && current.required}
            style={{ opacity: canProceed || !current.required ? 1 : 0.5 }}
          >
            {step === total - 1 ? "Submit →" : "Next →"}
          </button>
        </div>
      </div>
    </div>
  );
}
