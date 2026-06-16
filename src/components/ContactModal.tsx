"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import GradientButton from "./GradientButton";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: Props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus("success");
      setTimeout(() => {
        onClose();
        setFormData({ name: "", email: "", phone: "", message: "" });
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
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-dark/90 backdrop-blur-xl p-4 transition-all duration-300 ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-lg bg-card border border-border rounded-2xl p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted hover:text-white transition-colors"
          aria-label="Fechar"
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6L6 18" />
            <path d="M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-2xl font-bold tracking-tight">
          Entre em <span className="gradient-text">contato</span>
        </h2>
        <p className="mt-2 text-sm text-muted">
          Preencha o formulário abaixo e entraremos em contato o mais breve
          possível.
        </p>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Seu nome"
            className={inputClass}
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Seu e-mail"
            className={inputClass}
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="Seu telefone"
            className={inputClass}
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            placeholder="Sua mensagem"
            className={`${inputClass} resize-none`}
          />

          {status === "success" && (
            <p className="text-sm text-green-400">
              Mensagem enviada com sucesso! Entraremos em contato em breve.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-400">
              Erro ao enviar mensagem. Verifique as configurações de e-mail ou
              tente novamente mais tarde.
            </p>
          )}

          <GradientButton
            type="submit"
            size="large"
            className="w-full"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Enviando..." : "Enviar mensagem"}
          </GradientButton>
        </form>
      </div>
    </div>
  );
}
