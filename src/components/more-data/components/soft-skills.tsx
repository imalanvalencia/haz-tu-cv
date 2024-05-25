import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { TSoftSkill, TSoftSkillParse, TSoftSkillFormSchema } from "../types";
import { useState } from "react";
import { SoftSkillItem } from "./soft-skill-item";

export function SoftSkillsForm() {
  const [softSkills, setSoftSkills] = useState<TSoftSkillParse[]>([]);

  const form = useForm<TSoftSkill>({
    resolver: zodResolver(TSoftSkillFormSchema),
    defaultValues: {
      softSkill: "",
    },
  });

  const onSubmit = (data: TSoftSkill) => {
    const softSkillParse = {
      ...data,
      id: crypto.randomUUID(),
    };

    setSoftSkills([...softSkills, softSkillParse]);
  };

  const removeSoftSkill = (id: string) => {
    const newSoftSkills = softSkills.filter((softSkill) => softSkill.id !== id);

    setSoftSkills(newSoftSkills);
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-6"
        >
          <FormField
            control={form.control}
            name="softSkill"
            render={({ field }) => (
              <FormItem className="text-left">
                <FormLabel>Escribe una competencia personal</FormLabel>
                <div className="flex w-full max-w-sm items-center space-x-2">
                  <FormControl>
                    <Input
                      placeholder="Paciencia, Empatia, Flexibilidad, ..."
                      {...field}
                    />
                  </FormControl>
                  <Button type="submit">Añadir</Button>
                </div>
                <FormDescription>
                  Añade todas aquellas habilidades blandas que pueden tener
                  valor para la profesion a la que estas apuntando
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
      <div className="flex items-center justify-left flex-wrap gap-2">
        {softSkills.map(({ softSkill, id }) => (
          <SoftSkillItem
            key={id}
            id={id}
            removeSoftSkill={removeSoftSkill}
            softSkill={softSkill}
          />
        ))}
      </div>
    </>
  );
}
