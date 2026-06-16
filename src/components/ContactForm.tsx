"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import GradientButton from "./GradientButton";

export default function ContactForm() {
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
        setFormData({ name: "", email: "", phone: "", message: "" });
        setStatus("idle");
      }, 2000);
    } catch (error: any) {
      console.error("EmailJS error:", error);
      alert("Erro detalhado: " + (error?.text || error?.message || JSON.stringify(error)));
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
  );
}
