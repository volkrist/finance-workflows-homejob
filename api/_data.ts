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
];
