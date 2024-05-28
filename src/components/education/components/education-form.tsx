import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { TEducation, TEducationState, educationFormSchema } from "../types";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

interface Props {
  addEducation: (Education: TEducationState) => void;
}

export default function EducationForm({ addEducation }: Props) {
  const form = useForm<TEducation>({
    defaultValues: {
      name: "",
      type: "",
      center: "",
      dateStart: "",
      dateEnd: "",
      currentlyStudy: false,
    },
    resolver: zodResolver(educationFormSchema),
  });

  const handleSubmit = (data: TEducation) => {
    const { dateStart, dateEnd, currentlyStudy, ...restData } = data;

    const dataParse = {
      currentlyStudy,
      dateEnd: currentlyStudy ? undefined : new Date(dateEnd ?? ""),
      dateStart: new Date(dateStart),
      ...restData,
      id: crypto.randomUUID(),
    };

    console.log({ data, dataParse });
    addEducation(dataParse);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-8 text-left"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Titulo, Certificado, Carné, ...</FormLabel>
              <FormControl>
                <Input
                  placeholder="Carné de manipulacion de alimentos, Curso de marketing y comunicación digital, ..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="center"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Centro que lo impartio</FormLabel>
              <FormControl>
                <Input placeholder="Novafeina, Incorpora, ..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tipo de formacion</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona el tipo de formacion" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="oficial">Formacion Reglada</SelectItem>
                    <SelectItem value="complementary">
                      Formacion Complementaria
                    </SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-4 flex-wrap">
          <FormField
            control={form.control}
            name="dateStart"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fecha de inicio</FormLabel>
                <FormControl>
                  <Input type="month" placeholder="09/2016" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="dateEnd"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fecha de fin</FormLabel>
                <FormControl>
                  <Input type="month" placeholder="09/2016" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="currentlyStudy"
            render={({ field }) => (
              <FormItem className="space-x-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel>Trabajando actualmente aqui</FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button>Submit</Button>
      </form>
    </Form>
  );
}
