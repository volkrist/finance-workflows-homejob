import type { VercelRequest, VercelResponse } from "@vercel/node";
import { workflows } from "./_data";

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  return res.status(200).json({ workflows });
}
