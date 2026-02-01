import type { VercelRequest, VercelResponse } from "@vercel/node";
import { workflows } from "../_data";

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

  const id = String(req.query.id || "");
  const wf = workflows.find((w) => w.id === id);

  if (!wf) return res.status(404).json({ error: "Not found" });
  return res.status(200).json({ workflow: wf });
}
