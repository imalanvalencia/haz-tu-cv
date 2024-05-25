import { TId } from "@/types";
import { z } from "zod";

export const educationFormSchema = z
  .object({
    name: z.string().min(3),
    type: z.enum(["oficial", "complementary", ""]),
    center: z.string().min(3),
    dateStart: z.string(),
    dateEnd: z.string().optional(),
    currentlyStudy: z.boolean(),
  })
  .refine((data) => data.dateEnd && data.dateStart < data.dateEnd, {
    message: "La fecha de inicio no puede ser posterior a la fecha de fin",
  });

export declare type TEducation = z.infer<typeof educationFormSchema>;

export declare type TEducationParse = {
  dateStart: Date;
  dateEnd?: Date;
} & TId;

export declare type TEducationState = Omit<
  TEducation,
  "dateStart" | "dateEnd"
> &
  TEducationParse;
