"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, CheckCircle2 } from "lucide-react";

interface EmailCaptureProps {
  source?: string;
  placeholder?: string;
  cta?: string;
  variant?: "primary" | "outline";
  size?: "md" | "lg";
}

export function EmailCapture({
  source = "landing",
  placeholder = "tu@email.com",
  cta = "Empezar gratis",
  variant = "primary",
  size = "lg",
}: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.includes("@")) {
      setStatus("error");
      setMessage("Email no válido");
      return;
    }
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Error al registrar email");
      }
      setStatus("success");
      setMessage(
        "Listo. Te hemos enviado un email con tu mini-auditor gratuito.",
      );
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage(
        err instanceof Error ? err.message : "Algo ha fallado. Intenta de nuevo.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="flex items-center gap-3 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-green-900">
        <CheckCircle2 className="h-5 w-5 shrink-0 text-green-600" aria-hidden />
        <p className="text-sm font-medium">{message}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-2 max-w-md"
    >
      <label htmlFor={`email-${source}`} className="sr-only">
        Email
      </label>
      <input
        id={`email-${source}`}
        type="email"
        required
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (status === "error") setStatus("idle");
        }}
        placeholder={placeholder}
        autoComplete="email"
        className="flex-1 h-12 px-4 rounded-lg border border-gray-200 bg-white text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
      />
      <Button type="submit" disabled={status === "loading"} size={size} variant={variant}>
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            Enviando
          </>
        ) : (
          cta
        )}
      </Button>
      {status === "error" && (
        <p className="sm:basis-full text-sm text-red-600 mt-1" role="alert">
          {message}
        </p>
      )}
    </form>
  );
}
