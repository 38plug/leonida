"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "@/lib/auth";
import {
  ACCOUNT_TABS,
  EMPTY_BILLINGS,
  EMPTY_MESSAGES,
  EMPTY_ORDERS,
  type AccountTab,
} from "@/lib/customer";

export function CustomerArea({ onNeedAuth }: { onNeedAuth: () => void }) {
  const { user, ready } = useAuth();
  const [tab, setTab] = useState<AccountTab>("overview");

  const orders = EMPTY_ORDERS;
  const billings = EMPTY_BILLINGS;
  const messages = EMPTY_MESSAGES;
  const unread = useMemo(() => messages.filter((m) => m.unread).length, [messages]);

  if (!ready) {
    return <div className="flex flex-1 items-center justify-center text-sm text-mute">Loading account…</div>;
  }

  if (!user) {
    return (
      <section className="flex flex-1 flex-col items-center justify-center gap-4 px-6 py-16 text-center">
        <p className="font-mono text-[10px] tracking-[0.3em] text-teal">CUSTOMER AREA</p>
        <h1 className="font-display text-5xl tracking-wide text-mist">SIGN IN REQUIRED</h1>
        <p className="max-w-md text-sm text-mute">
          Orders, billings, and messages live here once you have an account. Nothing is invented — counters stay empty until real activity.
        </p>
        <button
          type="button"
          onClick={onNeedAuth}
          className="rounded-xl bg-pink px-5 py-3 text-sm font-bold text-white transition active:scale-[0.98] hover:brightness-110"
        >
          Log in / Register
        </button>
      </section>
    );
  }

  return (
    <section className="flex flex-1 flex-col px-5 py-6 md:px-8">
      <header className="mb-6">
        <p className="font-mono text-[10px] tracking-[0.3em] text-teal">CUSTOMER AREA</p>
        <h1 className="font-display text-5xl tracking-wide text-mist md:text-6xl">ACCOUNT</h1>
        <p className="mt-1 text-sm text-mute">
          {user.email} · {orders.length} orders · {billings.length} billings · {messages.length} messages
        </p>
      </header>

      <div className="mb-6 flex flex-wrap gap-2">
        {ACCOUNT_TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTab(t.id)}
            className={`rounded-lg px-3.5 py-2 text-xs font-semibold transition active:scale-[0.98] ${
              tab === t.id
                ? "bg-pink text-white"
                : "bg-[#282e3c] text-mist hover:bg-[#323948]"
            }`}
          >
            {t.label}
            {t.id === "messages" && unread > 0 ? ` (${unread})` : ""}
          </button>
        ))}
      </div>

      <motion.div
        key={tab}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        className="min-h-[320px]"
      >
        {tab === "overview" && (
          <Overview
            name={user.name}
            orders={orders.length}
            billings={billings.length}
            messages={messages.length}
            vc={user.currencyVc}
            onGo={setTab}
          />
        )}
        {tab === "orders" && <OrdersPanel />}
        {tab === "billings" && <BillingsPanel />}
        {tab === "messages" && <MessagesPanel />}
        {tab === "profile" && <ProfilePanel />}
      </motion.div>
    </section>
  );
}

function Overview({
  name,
  orders,
  billings,
  messages,
  vc,
  onGo,
}: {
  name: string;
  orders: number;
  billings: number;
  messages: number;
  vc: number;
  onGo: (t: AccountTab) => void;
}) {
  const cards = [
    { id: "orders" as const, label: "Orders", value: String(orders), hint: "China → door tracking" },
    { id: "billings" as const, label: "Billings", value: String(billings), hint: "Charges & refunds" },
    { id: "messages" as const, label: "Messages", value: String(messages), hint: "Support & shipping" },
  ];

  return (
    <div className="space-y-6">
      <p className="text-sm text-mist/80">
        Welcome back, <span className="font-semibold text-mist">{name}</span>. Wallet balance{" "}
        <span className="font-mono text-gold">{vc} VC</span>.
      </p>
      <ul className="grid gap-3 sm:grid-cols-3">
        {cards.map((c) => (
          <li key={c.id}>
            <button
              type="button"
              onClick={() => onGo(c.id)}
              className="w-full rounded-xl border border-white/8 bg-[#1a1f2a] px-4 py-4 text-left transition hover:border-pink/30 hover:bg-[#1f2533]"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-mute">{c.label}</p>
              <p className="font-display text-4xl text-mist">{c.value}</p>
              <p className="mt-1 text-xs text-mute">{c.hint}</p>
            </button>
          </li>
        ))}
      </ul>
      <EmptyCallout text="No live commerce yet. Place a Night Pass drop and your orders and billings will land here." />
    </div>
  );
}

function OrdersPanel() {
  if (EMPTY_ORDERS.length === 0) {
    return (
      <EmptyState
        title="No orders yet"
        body="When you buy from Night Pass or Catalog, each drop shows status: placed → QC → shipped → delivered."
      />
    );
  }
  return null;
}

function BillingsPanel() {
  if (EMPTY_BILLINGS.length === 0) {
    return (
      <EmptyState
        title="No billings yet"
        body="Charges, top-ups, and refunds appear here with amount and status. Balance stays at 0 VC until you top up."
      />
    );
  }
  return null;
}

function MessagesPanel() {
  if (EMPTY_MESSAGES.length === 0) {
    return (
      <EmptyState
        title="Inbox empty"
        body="Support replies, shipping updates, and agency notices will show here. Nothing unread."
      />
    );
  }
  return null;
}

function ProfilePanel() {
  const { user, logout } = useAuth();
  if (!user) return null;
  return (
    <div className="max-w-lg space-y-4 rounded-xl border border-white/8 bg-[#1a1f2a] p-5">
      <Row label="Name" value={user.name} />
      <Row label="Email" value={user.email} />
      <Row label="Level" value={`LVL ${user.level} · ${user.roleLabel}`} />
      <Row label="Wallet" value={`${user.currencyVc} VC`} />
      <Row
        label="Member since"
        value={new Date(user.createdAt).toLocaleDateString("en-GB", {
          year: "numeric",
          month: "short",
          day: "numeric",
          timeZone: "Asia/Phnom_Penh",
        })}
      />
      <button
        type="button"
        onClick={logout}
        className="mt-2 rounded-lg border border-danger/40 bg-danger/10 px-4 py-2 text-xs font-semibold text-danger transition hover:bg-danger/20"
      >
        Log out
      </button>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-white/5 py-2">
      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-mute">{label}</span>
      <span className="text-sm text-mist">{value}</span>
    </div>
  );
}

function EmptyState({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-xl border border-dashed border-white/15 bg-night/40 px-5 py-10 text-center">
      <h2 className="font-display text-3xl tracking-wide text-mist">{title}</h2>
      <p className="mx-auto mt-2 max-w-md text-sm text-mute">{body}</p>
    </div>
  );
}

function EmptyCallout({ text }: { text: string }) {
  return (
    <p className="rounded-xl border border-teal/25 bg-teal/5 px-4 py-3 text-sm text-mist/80">{text}</p>
  );
}
