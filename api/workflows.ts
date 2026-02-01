import type { VercelRequest, VercelResponse } from "@vercel/node";

const workflows = [
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

export default function handler(_req: VercelRequest, res: VercelResponse) {
  try {
    return res.status(200).json({ workflows });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "API crashed" });
  }
}
