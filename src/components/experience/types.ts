import { z } from "zod"

export const experienceFormSchema = z.object({
  job: z.string().min(3),
  company: z.string().min(3),
  dateStart: z.string(),
  dateEnd: z.string().optional(),
  currentlyWork: z.boolean(),
  description: z.string().optional(),
})

export declare type TExperience = z.infer<typeof experienceFormSchema>

export declare type TId = Record<'id', `${string}-${string}-${string}-${string}-${string}`>

export declare type TExperienceWithId = TExperience & TId
