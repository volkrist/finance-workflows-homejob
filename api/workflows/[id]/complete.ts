import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const id = String(req.query.id || "");
  const { stepId } = (req.body || {}) as { stepId?: string };

  if (!id || !stepId) return res.status(400).json({ error: "id and stepId required" });

  return res.status(200).json({ ok: true, workflowId: id, stepId });
}
