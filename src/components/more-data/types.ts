import { TId } from "@/types";
import { z } from "zod";

export const THardSkillFormSchema = z.object({
  hardSkill: z.string().min(2, {
    message: "La habilidad profesional deberia ser de al menos 2 caracteres",
  }),
});

export declare type THardSkill = z.infer<typeof THardSkillFormSchema>;

export declare type THardSkillParse = THardSkill & TId;
