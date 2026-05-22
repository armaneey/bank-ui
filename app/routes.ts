import * as Icons from "lucide-react";
import { Metadata } from 'next'

interface NavItem {
  name: string;
  path: string;
  icon: keyof typeof Icons;
}

export const ROUTES = {
  dashboard: "/dashboard",
  transactions: "/transactions",
  accounts: "/accounts",
  investments: "/investments",
  creditCards: "/credit-cards",
  services: "/services",
  privileges: "/privileges",
  loans: "/loans",
  settings: "/settings",
} as const;

export const ROUTE_METADATA: Record<keyof typeof ROUTES, Metadata> = {
  dashboard: {
    title: 'Dashboard - BankDash',
    description: 'View your account overview, recent transactions, and financial insights on your dashboard.',
    keywords: ['dashboard', 'banking', 'finance', 'overview'],
  },
  transactions: {
    title: 'Transactions - BankDash',
    description: 'View and manage your transaction history, track spending, and monitor your financial activities.',
    keywords: ['transactions', 'history', 'spending', 'payments'],
  },
  accounts: {
    title: 'Accounts - BankDash',
    description: 'Manage your bank accounts, view balances, and access account details.',
    keywords: ['accounts', 'banking', 'balances', 'savings'],
  },
  investments: {
    title: 'Investments - BankDash',
    description: 'Track your investment portfolio, view performance, and manage your assets.',
    keywords: ['investments', 'portfolio', 'stocks', 'assets'],
  },
  creditCards: {
    title: 'Credit Cards - BankDash',
    description: 'Manage your credit cards, view statements, and track card usage.',
    keywords: ['credit cards', 'payments', 'statements', 'cards'],
  },
  services: {
    title: 'Services - BankDash',
    description: 'Explore our banking services, financial products, and customer support options.',
    keywords: ['services', 'banking', 'support', 'products'],
  },
  privileges: {
    title: 'Privileges - BankDash',
    description: 'View your account privileges, rewards, and exclusive member benefits.',
    keywords: ['privileges', 'rewards', 'benefits', 'membership'],
  },
  loans: {
    title: 'Loans - BankDash',
    description: 'View and manage your loans, track repayments, and explore loan options.',
    keywords: ['loans', 'credit', 'repayments', 'financing'],
  },
  settings: {
    title: 'Settings - BankDash',
    description: 'Manage your account settings, preferences, security options, and profile information.',
    keywords: ['settings', 'preferences', 'security', 'profile'],
  },
};

export const ALL_ROUTES = Object.values(ROUTES);

export const NAVIGATION_ITEMS = [
  { name: "Dashboard", path: ROUTES.dashboard, icon: "LayoutDashboard" },
  { name: "Transactions", path: ROUTES.transactions, icon: "ArrowUpRight" },
  { name: "Accounts", path: ROUTES.accounts, icon: "User" },
  { name: "Investments", path: ROUTES.investments, icon: "PiggyBank" },
  { name: "Credit Cards", path: ROUTES.creditCards, icon: "CreditCard" },
  { name: "Services", path: ROUTES.services, icon: "Wrench" },
  { name: "Privileges", path: ROUTES.privileges, icon: "Award" },
  { name: "Loans", path: ROUTES.loans, icon: "Banknote" },
  { name: "Settings", path: ROUTES.settings, icon: "Settings" },
];