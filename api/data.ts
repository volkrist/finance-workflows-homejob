export const workflows = [
  {
    id: "invoice",
    title: "Invoice approval",
    description: "Approve an incoming invoice and log actions.",
    steps: [
      { id: "receive", title: "Receive invoice", status: "pending" },
      { id: "validate", title: "Validate vendor", status: "pending" },
      { id: "approve", title: "Approve", status: "pending" },
      { id: "schedule", title: "Schedule payment", status: "pending" },
    ],
  },
  {
    id: "expense",
    title: "Expense reimbursement",
    description: "Submit and approve employee reimbursement.",
    steps: [
      { id: "submit", title: "Submit request", status: "pending" },
      { id: "review", title: "Manager review", status: "pending" },
      { id: "finance", title: "Finance check", status: "pending" },
      { id: "pay", title: "Pay reimbursement", status: "pending" },
    ],
  },
  {
    id: "kyc",
    title: "KYC onboarding",
    description: "Basic KYC workflow for a new customer.",
    steps: [
      { id: "collect", title: "Collect documents", status: "pending" },
      { id: "verify", title: "Verify identity", status: "pending" },
      { id: "risk", title: "Risk screening", status: "pending" },
      { id: "activate", title: "Activate account", status: "pending" },
    ],
  },
  {
    id: "chargeback",
    title: "Chargeback handling",
    description: "Process a card chargeback dispute.",
    steps: [
      { id: "open", title: "Open case", status: "pending" },
      { id: "evidence", title: "Collect evidence", status: "pending" },
      { id: "submit", title: "Submit to network", status: "pending" },
      { id: "decision", title: "Decision / close", status: "pending" },
    ],
  },
];
