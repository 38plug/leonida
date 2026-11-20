"use client";

import { FormEvent, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useAuth } from "@/lib/auth";

export function AuthModal() {
  const { authMode, openAuth, login, register } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!authMode) return;
    setError(null);
    setPassword("");
  }, [authMode]);

  if (!authMode) return null;

  const isRegister = authMode === "register";

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const result = isRegister ? register(name, email, password) : login(email, password);
    if (!result.ok) setError(result.error);
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-night/80 p-4 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => openAuth(null)}
      >
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="auth-title"
          initial={{ opacity: 0, y: 16, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ type: "spring", stiffness: 360, damping: 28 }}
          className="glass-panel w-full max-w-md rounded-2xl p-6"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mb-5 flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-[10px] tracking-[0.28em] text-teal">VICE OPS · CUSTOMER</p>
              <h2 id="auth-title" className="font-display text-4xl tracking-wide text-mist">
                {isRegister ? "REGISTER" : "LOGIN"}
              </h2>
              <p className="mt-1 text-sm text-mute">
                {isRegister
                  ? "Create a shop account for orders, billings, and messages."
                  : "Sign in to open your customer area."}
              </p>
            </div>
            <button
              type="button"
              onClick={() => openAuth(null)}
              className="font-mono text-[11px] uppercase tracking-[0.18em] text-mute hover:text-mist"
            >
              Close
            </button>
          </div>

          <form onSubmit={onSubmit} className="space-y-3" autoComplete="on">
            {isRegister && (
              <Field label="Name">
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="field-input"
                  placeholder="Pedro"
                  autoComplete="name"
                />
              </Field>
            )}
            <Field label="Email">
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="field-input"
                placeholder="you@night.city"
                autoComplete="email"
              />
            </Field>
            <Field label="Password">
              <input
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="field-input"
                placeholder="••••••••"
                autoComplete={isRegister ? "new-password" : "current-password"}
              />
            </Field>

            {error && (
              <p className="rounded-lg border border-danger/40 bg-danger/10 px-3 py-2 text-sm text-danger" role="alert">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full rounded-xl bg-pink px-4 py-3 text-sm font-bold text-white transition active:scale-[0.98] hover:brightness-110"
            >
              {isRegister ? "Create account" : "Sign in"}
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-mute">
            {isRegister ? "Already have an account?" : "New here?"}{" "}
            <button
              type="button"
              className="font-semibold text-teal hover:underline"
              onClick={() => openAuth(isRegister ? "login" : "register")}
            >
              {isRegister ? "Log in" : "Register"}
            </button>
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block space-y-1.5">
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-mute">{label}</span>
      {children}
    </label>
  );
}
