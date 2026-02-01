import type { VercelRequest, VercelResponse } from "@vercel/node";
import { workflows } from "./data";

export default function handler(_req: VercelRequest, res: VercelResponse) {
  return res.status(200).json({ workflows });
}
