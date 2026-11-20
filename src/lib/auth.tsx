"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export interface CustomerUser {
  id: string;
  name: string;
  email: string;
  level: number;
  roleLabel: string;
  currencyVc: number;
  createdAt: number;
}

type AuthMode = "login" | "register" | null;

interface AuthContextValue {
  user: CustomerUser | null;
  ready: boolean;
  authMode: AuthMode;
  openAuth: (mode: AuthMode) => void;
  login: (email: string, password: string) => { ok: true } | { ok: false; error: string };
  register: (name: string, email: string, password: string) => { ok: true } | { ok: false; error: string };
  logout: () => void;
}

const STORAGE_KEY = "vice-ops-shop-session-v1";
const USERS_KEY = "vice-ops-shop-users-v1";

interface StoredUser extends CustomerUser {
  password: string;
}

const AuthContext = createContext<AuthContextValue | null>(null);

function loadUsers(): StoredUser[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(USERS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as StoredUser[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveUsers(users: StoredUser[]) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function loadSession(): CustomerUser | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CustomerUser;
    if (!parsed?.id || !parsed?.email) return null;
    return {
      id: parsed.id,
      name: parsed.name,
      email: parsed.email,
      level: parsed.level ?? 1,
      roleLabel: parsed.roleLabel ?? "Operator",
      currencyVc: parsed.currencyVc ?? 0,
      createdAt: parsed.createdAt ?? Date.now(),
    };
  } catch {
    return null;
  }
}

function saveSession(user: CustomerUser | null) {
  if (!user) {
    localStorage.removeItem(STORAGE_KEY);
    return;
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<CustomerUser | null>(null);
  const [ready, setReady] = useState(false);
  const [authMode, setAuthMode] = useState<AuthMode>(null);

  useEffect(() => {
    setUser(loadSession());
    setReady(true);
  }, []);

  const openAuth = useCallback((mode: AuthMode) => setAuthMode(mode), []);

  const login = useCallback((email: string, password: string) => {
    const normalized = email.trim().toLowerCase();
    if (!normalized || !password) return { ok: false as const, error: "Email and password required." };
    const match = loadUsers().find((u) => u.email === normalized && u.password === password);
    if (!match) return { ok: false as const, error: "No account matches that email and password." };
    const session: CustomerUser = {
      id: match.id,
      name: match.name,
      email: match.email,
      level: match.level,
      roleLabel: match.roleLabel,
      currencyVc: match.currencyVc,
      createdAt: match.createdAt,
    };
    saveSession(session);
    setUser(session);
    setAuthMode(null);
    return { ok: true as const };
  }, []);

  const register = useCallback((name: string, email: string, password: string) => {
    const trimmedName = name.trim();
    const normalized = email.trim().toLowerCase();
    if (!trimmedName || !normalized || !password) {
      return { ok: false as const, error: "Name, email, and password required." };
    }
    if (password.length < 6) return { ok: false as const, error: "Password needs at least 6 characters." };
    const users = loadUsers();
    if (users.some((u) => u.email === normalized)) {
      return { ok: false as const, error: "That email is already registered. Log in instead." };
    }
    const session: CustomerUser = {
      id: `cust-${Date.now()}`,
      name: trimmedName,
      email: normalized,
      level: 1,
      roleLabel: "Operator",
      currencyVc: 0,
      createdAt: Date.now(),
    };
    saveUsers([...users, { ...session, password }]);
    saveSession(session);
    setUser(session);
    setAuthMode(null);
    return { ok: true as const };
  }, []);

  const logout = useCallback(() => {
    saveSession(null);
    setUser(null);
  }, []);

  const value = useMemo(
    () => ({ user, ready, authMode, openAuth, login, register, logout }),
    [user, ready, authMode, openAuth, login, register, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
