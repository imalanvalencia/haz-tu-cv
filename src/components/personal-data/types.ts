import { z } from "zod";
import { TId } from "@/types";

export const personalDataformSchema = z.object({
  name: z.string().min(3),
  job: z.string().min(3),
  phone: z.string().min(9).max(12),
  mail: z.string().email(),
  location: z.string(),
});

export declare type TPersonalData = z.infer<typeof personalDataformSchema>;

export declare type TPersonalDataParse = TPersonalData & TId;
