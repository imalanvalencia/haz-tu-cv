import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { TPersonalData, personalDataformSchema } from "../types";

interface Props {
  handleFormSubmit: (data: TPersonalData) => void;
}

export function PersonalDataForm({ handleFormSubmit }: Props) {
  const form = useForm<TPersonalData>({
    defaultValues: {
      name: "",
      job: "",
      mail: "",
      location: "",
      phone: "",
    },
    resolver: zodResolver(personalDataformSchema),
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleFormSubmit)}
        className="space-y-8 text-left"
      >
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
                No tiene que ser tu nombre completo (nombres y apellido), basta
                con tu 1er nombre y 1er apellido.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="job"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Profesion</FormLabel>
              <FormControl>
                <Input
                  placeholder="Profesional de hosteleria, Auxiliar de comercio, Tecnico sociosanitario, ..."
                  {...field}
                />
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
                <Input
                  placeholder="johnsmith@gmail.com, mariarodriguez@hotmail.com, ..."
                  {...field}
                />
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
                <Input
                  placeholder="Madrid, Barcelona, Valencia, ..."
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Intentar escribir la ubicacion mas general posible, no deberia
                ser tu ubicacion exacta.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Completar Datos Personales</Button>
      </form>
    </Form>
  );
}
