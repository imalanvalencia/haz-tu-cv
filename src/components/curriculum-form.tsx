import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"


/* 
 * TODO: perfil profesional: preguntar EN UN INPUT e iNFERIR con ia
 * TODO: Experiencia laboral: debe tener fecha inicio, fecha fin, nombre de empresa, puesto, funciones; *opcionales* logros, reconocimientos, ...
 * TODO: Estudios formales: nombre de institucion, fecha inicio, fecha fin, titulo, estado, ...; explicar brevemente que son
 * TODO: Estudios complementarios o especializado: fecha inicio, fecha fin, titulo, estado, ...; explicar que son
 * TODO: Habilidades PROFESIONALES: habilidades que pueden ayudar en el sector, hacer que la ia de ideas y pedir ideas al usuario
 * TODO: COMPETENCIAS PERSONALES: competencias que pueden ayudar en el sector, hacer que la ia de ideas y pedir ideas al usuario
 * TODO: Idiomas: nivel de fluidez, habla, lees, escribis
 * TODO: DATOS DE INTERES: datos que te pueden ayudar a conseguir el trabajo, liciencia de conducir, vehiculo propio, ...
*/

const formSchema = z.object({
  name: z.string().min(3),
  title: z.string().min(3),
  phone: z.string().min(9).max(12),
  mail: z.string().email(),
  location: z.string().optional()
})

export default function CurriculumForm() {

  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      name: '',
      title: '',
      mail: '',
      location: '',
      phone: ''

    },
    resolver: zodResolver(formSchema),
  })

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data)
  }

  return (
    <div>
      <h1>Haz tu curriculum con Inteligencia Artificial</h1>

      <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8 text-left">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input placeholder="John Smith, Marta Diaz, ..." {...field} />
              </FormControl>
              <FormDescription>
                No tiene que ser tu nombre completo (nombres y apellido), basta con tu 1er nombre y 1er apellido.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ingresa tu profesion</FormLabel>
              <FormControl>
                <Input placeholder="Profesional de hosteleria, Auxiliar de comercio, Tecnico sociosanitario, ..." {...field} />
              </FormControl>
              <FormDescription>
                En pocas palabras resume tu profesion
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

          <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ingresa tu numero movil</FormLabel>
              <FormControl>
                <Input placeholder="614564257, +3461456457" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />


          <

        <Button type="submit">Submit</Button>
      </form>
    </Form>
    </div>


  )
}
