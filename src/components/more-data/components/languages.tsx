import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";

import { getLastItem } from "@/lib/utils";
import { TLanguage, TLanguageFormSchema, TLanguageParse } from "../types";

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
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { ChevronsUpDown, Plus } from "lucide-react";
import { LanguageItem } from "./language-item";

export function LanguagesForm() {
  const [languages, setLanguages] = useState<TLanguageParse[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const [lastLanguage, restOfLanguages] = getLastItem(languages);

  const form = useForm<TLanguage>({
    resolver: zodResolver(TLanguageFormSchema),
    defaultValues: {
      language: "",
      level: "",
    },
  });

  const onSubmit = (data: TLanguage) => {
    const languageParse = {
      ...data,
      id: crypto.randomUUID(),
    };

    setLanguages([...languages, languageParse]);
  };

  return (
    <div>
      <>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 flex w-full max-w-sm items-center justify-center space-x-2"
          >
            <FormField
              control={form.control}
              name="language"
              render={({ field }) => (
                <FormItem className="text-left">
                  <FormLabel>Escribe una habilidades profesional</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Creacion de presupuestos, Gestion de inventario, ..."
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="level"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona el nivel" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Nivel A1">Nivel A1</SelectItem>
                      <SelectItem value="Nivel A2">Nivel A2</SelectItem>
                      <SelectItem value="Nivel B1">Nivel B1</SelectItem>
                      <SelectItem value="Nivel B2">Nivel B2</SelectItem>
                      <SelectItem value="Nivel C1">Nivel C1</SelectItem>
                      <SelectItem value="Nivel C2">Nivel C2</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button className="rounded-full aspect-square p-1" type="submit">
              <Plus className="size-4" strokeWidth={3} />
            </Button>
          </form>
        </Form>

        <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}
          className="w-[350px] space-y-2"
        >
          <div className="flex items-center justify-between space-x-4 px-4">
            <h4 className="text-sm font-semibold">
              Tienes {languages.length} idiomas aprendidos
            </h4>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" className="w-9 p-0">
                <ChevronsUpDown className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <div className="rounded-md border px-4 py-3 font-mono text-sm">
            {languages.length > 0 && (
              <LanguageItem
                language={lastLanguage.language}
                level={lastLanguage.level}
                id={lastLanguage.id}
              />
            )}
          </div>

          <CollapsibleContent className="space-y-2">
            {restOfLanguages?.map(({ language, level, id }) => (
              <LanguageItem
                key={id}
                language={language}
                level={level}
                id={id}
              />
            ))}
          </CollapsibleContent>
        </Collapsible>
      </>
    </div>
  );
}
