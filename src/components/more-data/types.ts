import { TId } from "@/types";
import { z } from "zod";

export const THardSkillFormSchema = z.object({
  hardSkill: z.string().min(2, {
    message: "La habilidad profesional deberia ser de al menos 2 caracteres",
  }),
});

export declare type THardSkill = z.infer<typeof THardSkillFormSchema>;

export declare type THardSkillParse = THardSkill & TId;

export const TSoftSkillFormSchema = z.object({
  softSkill: z.string().min(2, {
    message: "La competencia personal deberia ser de al menos 2 caracteres",
  }),
});

export declare type TSoftSkill = z.infer<typeof TSoftSkillFormSchema>;

export declare type TSoftSkillParse = TSoftSkill & TId;
