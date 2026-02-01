import type { VercelRequest, VercelResponse } from "@vercel/node";
import { data } from "./_data";

export default function handler(req: VercelRequest, res: VercelResponse) {
  res.status(200).json(data);
}
