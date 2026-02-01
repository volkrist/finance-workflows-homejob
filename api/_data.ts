export const workflows = [
  {
    id: "invoice-approval",
    title: "Invoice approval",
    description: "Approve vendor invoice, validate, schedule payment.",
    steps: [
      { id: "check-invoice", title: "Check invoice", doneHint: "Validate totals and PO match" },
      { id: "validate-vendor", title: "Validate vendor", doneHint: "Confirm vendor exists and is active" },
      { id: "approve", title: "Approve", doneHint: "Manager approval" },
      { id: "schedule-payment", title: "Schedule payment", doneHint: "Set payment date and method" },
    ],
  },
  {
    id: "kyc-onboarding",
    title: "KYC onboarding",
    description: "Collect documents and run checks.",
    steps: [
      { id: "collect-docs", title: "Collect docs", doneHint: "Passport + address proof" },
      { id: "sanctions", title: "Sanctions screening", doneHint: "Watchlists check" },
      { id: "risk-score", title: "Risk score", doneHint: "Calculate risk level" },
      { id: "open-account", title: "Open account", doneHint: "Create customer record" },
    ],
  },
  {
    id: "chargeback",
    title: "Chargeback handling",
    description: "Review dispute and respond.",
    steps: [
      { id: "review", title: "Review case", doneHint: "Gather transaction evidence" },
      { id: "respond", title: "Respond", doneHint: "Submit response to processor" },
      { id: "follow-up", title: "Follow up", doneHint: "Track status and updates" },
      { id: "close", title: "Close case", doneHint: "Finalize result" },
    ],
  },
  {
    id: "expense-reimbursement",
    title: "Expense reimbursement",
    description: "Submit, verify, reimburse employee.",
    steps: [
      { id: "submit", title: "Submit request", doneHint: "Attach receipts" },
      { id: "verify", title: "Verify policy", doneHint: "Policy compliance check" },
      { id: "approve", title: "Approve", doneHint: "Manager approval" },
      { id: "reimburse", title: "Reimburse", doneHint: "Send payment" },
    ],
  },
];
