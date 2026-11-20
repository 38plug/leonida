export type OrderStatus = "placed" | "qc" | "shipped" | "delivered" | "refunded";
export type BillingStatus = "paid" | "pending" | "failed" | "refunded";
export type MessageFolder = "inbox" | "support" | "shipping";

export interface Order {
  id: string;
  placedAt: number;
  sku: string;
  name: string;
  totalUsd: number;
  status: OrderStatus;
  tracking?: string;
}

export interface BillingItem {
  id: string;
  at: number;
  label: string;
  amountUsd: number;
  status: BillingStatus;
  method: string;
}

export interface CustomerMessage {
  id: string;
  at: number;
  folder: MessageFolder;
  from: string;
  subject: string;
  preview: string;
  unread: boolean;
}

/** Empty until real commerce — no vanity seed data. */
export const EMPTY_ORDERS: Order[] = [];
export const EMPTY_BILLINGS: BillingItem[] = [];
export const EMPTY_MESSAGES: CustomerMessage[] = [];

export type AccountTab = "overview" | "orders" | "billings" | "messages" | "profile";

export const ACCOUNT_TABS: { id: AccountTab; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "orders", label: "Orders" },
  { id: "billings", label: "Billings" },
  { id: "messages", label: "Messages" },
  { id: "profile", label: "Profile" },
];
