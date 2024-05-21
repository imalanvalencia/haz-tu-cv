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
// import { FacebookIcon } from "@/components/icons"


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
  location: z.string().optional(),
  education: z.array(z.object({ title: z.string().min(3), dateStart: z.date(), dateEnd: z.date().optional() })),
  professionalSkills: z.array(z.string()),
  softSkills: z.array(z.string()),
  languages: z.array(z.object({ language: z.string(), level: z.string() }))
})

export default function PersonalData() {

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
                <FormLabel>Profesion</FormLabel>
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
            name="mail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Correo</FormLabel>
                <FormControl>
                  <Input placeholder="johnsmith@gmail.com, mariarodriguez@hotmail.com, ..." {...field} />
                </FormControl>
                <FormDescription>
                  Tiene que ser un correo presentable y profesional
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
                <FormLabel>Numero movil</FormLabel>
                <FormControl>
                  <Input placeholder="614564257, +3461456457" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ubicación</FormLabel>
                <FormControl>
                  <Input placeholder="Madrid, Barcelona, Valencia, ..." {...field} />
                </FormControl>
                <FormDescription>
                  Intentar escribir la ubicacion mas general posible, no deberia ser tu ubicacion exacta.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* <FacebookIcon className="size-6" /> */}

          {/* <FormField control={form.control} name="personal-img" render={() => (<FormItem><FormLabel>Imagen de presentacion</FormLabel><Input type="file" /></FormItem>)} /> */}

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  )
}
