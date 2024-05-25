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
import { useState } from "react";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { ChevronsUpDown } from "lucide-react";
import { THardSkill, THardSkillFormSchema, THardSkillParse } from "../types";
import { getLastItem } from "@/lib/utils";
import { HardItem } from "./hard-item";

export function HardSkillsForm() {
  const [hardSkills, setHardSkills] = useState<THardSkillParse[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const [lastHardSkill, restOfHardsSkills] = getLastItem(hardSkills);

  const form = useForm<THardSkill>({
    resolver: zodResolver(THardSkillFormSchema),
    defaultValues: {
      hardSkill: "",
    },
  });

  const onSubmit = (data: THardSkill) => {
    const hardSkillParse = {
      ...data,
      id: crypto.randomUUID(),
    };

    setHardSkills([...hardSkills, hardSkillParse]);
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
            name="hardSkill"
            render={({ field }) => (
              <FormItem className="text-left">
                <FormLabel>Escribe una habilidades profesional</FormLabel>
                <div className="flex w-full max-w-sm items-center space-x-2">
                  <FormControl>
                    <Input
                      placeholder="Creacion de presupuestos, Gestion de inventario, ..."
                      {...field}
                    />
                  </FormControl>
                  <Button type="submit">Añadir</Button>
                </div>
                <FormDescription>
                  Añade todas aquellas habilidades, conocimientos, metodos, o
                  taresas que pueden tener valor para la profesion a la que
                  estas apuntando
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>

      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-[350px] space-y-2"
      >
        <div className="flex items-center justify-between space-x-4 px-4">
          <h4 className="text-sm font-semibold">
            Tienes {hardSkills.length} Habilidades Profesionales
          </h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-9 p-0">
              <ChevronsUpDown className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          {hardSkills.length > 0 && (
            <HardItem hardSkill={lastHardSkill.hardSkill} />
          )}
        </div>
        <CollapsibleContent className="space-y-2">
          {restOfHardsSkills?.map(({ hardSkill, id }) => (
            <HardItem key={id} hardSkill={hardSkill} />
          ))}
        </CollapsibleContent>
      </Collapsible>
    </>
  );
}
