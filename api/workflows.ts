import type { VercelRequest, VercelResponse } from "@vercel/node";
import { workflows } from "./_data";

export default function handler(
  _req: VercelRequest,
  res: VercelResponse
) {
  res.status(200).json({ workflows });
}
