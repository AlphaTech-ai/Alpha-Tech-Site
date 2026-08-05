"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import GradientButton from "./GradientButton";
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY,
} from "@/lib/emailjs";

const SERVICE_CATEGORIES = [
  "Criação de Sites",
  "Automações",
  "Inteligência Artificial",
  "Sistemas Personalizados",
  "Chatbots e Atendimento Inteligente",
  "Outro",
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          category: formData.category,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setTimeout(() => {
        setFormData({ name: "", email: "", phone: "", category: "", message: "" });
        setStatus("idle");
      }, 2000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-xl border border-border bg-dark px-4 py-3 text-white placeholder-muted outline-none transition-all duration-200 focus:border-primary focus:ring-1 focus:ring-primary/50";

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        disabled={status === "sending"}
        placeholder="Seu nome"
        className={`${inputClass} ${status === "sending" ? "opacity-50 cursor-not-allowed" : ""}`}
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        disabled={status === "sending"}
        placeholder="Seu e-mail"
        className={`${inputClass} ${status === "sending" ? "opacity-50 cursor-not-allowed" : ""}`}
      />
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        required
        disabled={status === "sending"}
        placeholder="Seu telefone"
        className={`${inputClass} ${status === "sending" ? "opacity-50 cursor-not-allowed" : ""}`}
      />
      <div className="relative">
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
          disabled={status === "sending"}
          className={`${inputClass} cursor-pointer appearance-none pr-10 ${
            formData.category ? "text-white" : "text-muted"
          } ${status === "sending" ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          <option value="" disabled>
            Qual serviço você procura?
          </option>
          {SERVICE_CATEGORIES.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <svg
          className="pointer-events-none absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2 text-muted"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
        disabled={status === "sending"}
        rows={4}
        placeholder="Sua mensagem"
        className={`${inputClass} resize-none ${status === "sending" ? "opacity-50 cursor-not-allowed" : ""}`}
      />

      {status === "success" && (
        <div className="flex items-center gap-2 rounded-xl border border-green-400/20 bg-green-400/5 px-4 py-3 text-sm text-green-400">
          <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
          Mensagem enviada com sucesso! Entraremos em contato em breve.
        </div>
      )}
      {status === "error" && (
        <div className="flex items-center gap-2 rounded-xl border border-red-400/20 bg-red-400/5 px-4 py-3 text-sm text-red-400">
          <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          Erro ao enviar mensagem. Tente novamente mais tarde.
        </div>
      )}

      <GradientButton
        type="submit"
        size="large"
        className="w-full"
        disabled={status === "sending"}
      >
        {status === "sending" ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12a9 9 0 1 1-6.219-8.56" />
            </svg>
            Enviando...
          </span>
        ) : (
          "Enviar mensagem"
        )}
      </GradientButton>
    </form>
  );
}
