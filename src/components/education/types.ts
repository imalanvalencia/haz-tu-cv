
import {  z } from "zod"

export const educationFormSchema = z.object({
    name: z.string().min(3),
    type: z.string(),
    center: z.string().min(3),
    dateStart: z.string(),
    dateEnd: z.string().optional(),
    currentlyStudy: z.boolean(),
})

export declare type TEducation = z.infer<typeof educationFormSchema>

export declare type TEducationParse = {
    id: `${string}-${string}-${string}-${string}-${string}`,
    dateStart: Date,
    dateEnd?: Date
}

export declare type TEducationState = Omit<TEducation, 'dateStart' | 'dateEnd'> & TEducationParse
