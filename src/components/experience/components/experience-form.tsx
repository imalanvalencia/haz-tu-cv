
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { TExperience, experienceFormSchema } from "../types"

interface Props {
  addExperience: (experience: TExperience) => void
}

export default function ExperienceForm({ addExperience }: Props) {
  const form = useForm<TExperience>({
    defaultValues: {
      job: "",
      company: "",
      dateStart: "",
      dateEnd: "",
      currentlyWork: false,
      description: ""
    },
    resolver: zodResolver(experienceFormSchema),
  })

  const handleSubmit = (data: TExperience) => {
    console.log(data)
    addExperience(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8 text-left">
        <FormField control={form.control} name="job" render={({ field }) => (
          <FormItem>
            <FormLabel>Cargo</FormLabel>
            <FormControl>
              <Input placeholder="Auxiliar de comercio, Limpiadora, ..." {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )} />

        <FormField control={form.control} name="company" render={({ field }) => (
          <FormItem>
            <FormLabel>Empresa</FormLabel>
            <FormControl>
              <Input placeholder="Autonomo, Freelance, Postres SAS., ..." {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )} />

        <div className="flex gap-4 flex-wrap">
          <FormField control={form.control} name="dateStart" render={({ field }) => (
            <FormItem>
              <FormLabel>Fecha de inicio</FormLabel>
              <FormControl>
                <Input type="date" placeholder="26/09/2016" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <FormField control={form.control} name="dateEnd" render={({ field }) => (
            <FormItem>
              <FormLabel>Fecha de fin</FormLabel>
              <FormControl>
                <Input type="date" placeholder="26/09/2016" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <FormField control={form.control} name="currentlyWork" render={({ field }) => (
            <FormItem className="space-x-2">
              <FormControl>
                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <FormLabel>Trabajando actualmente aqui</FormLabel>
              <FormMessage />
            </FormItem>
          )} />
        </div>

        <FormField control={form.control} name="description" render={({ field }) => (
          <FormItem>
            <FormLabel>Funciones, Logros, Casos de exito, ...</FormLabel>
            <FormControl>
              <Textarea placeholder="He logrado que mi empresa se convirtiera en una de las mejores" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )} />

        <Button>Submit</Button>
      </form>
    </Form>
  )
}  
