import { z } from "zod";

// zodで静的型検査と妥当性確認にも使えるように（任意）
export const Event = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  startDate: z.date(),
  endDate: z.date(),
  location: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type Event = z.infer<typeof Event>;
