import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { getLastItem } from "@/lib/utils";

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
import {
  TInterestingData,
  TInterestingDataFormSchema,
  TInterestingDataParse,
} from "../types";
import { InterestingDataItem } from "./interesting-data-item";

export function InterestingDataForm() {
  const [interestingData, setInterestingData] = useState<
    TInterestingDataParse[]
  >([]);
  const [isOpen, setIsOpen] = useState(false);

  const [lastInterestingData, restOfInterestingData] =
    getLastItem(interestingData);

  const form = useForm<TInterestingData>({
    resolver: zodResolver(TInterestingDataFormSchema),
    defaultValues: {
      interestingData: "",
    },
  });

  const onSubmit = (data: TInterestingData) => {
    const interestingDataParse = {
      ...data,
      id: crypto.randomUUID(),
    };

    setInterestingData([...interestingData, interestingDataParse]);
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
            name="interestingData"
            render={({ field }) => (
              <FormItem className="text-left">
                <FormLabel>Otros datos de interes</FormLabel>
                <div className="flex w-full max-w-sm items-center space-x-2">
                  <FormControl>
                    <Input
                      placeholder="Carné de conducir, Certificado de capacidad 33%, ..."
                      {...field}
                    />
                  </FormControl>
                  <Button type="submit">Añadir</Button>
                </div>
                <FormDescription>
                  Añade todas aquellas informacion que puede ser de interes para
                  la oferta de trabajo y no tengas categoria exacta
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
            Tienes {interestingData.length} datos de interes
          </h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-9 p-0">
              <ChevronsUpDown className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          {interestingData.length > 0 && (
            <InterestingDataItem
              interestingData={lastInterestingData.interestingData}
            />
          )}
        </div>
        <CollapsibleContent className="space-y-2">
          {restOfInterestingData?.map(({ interestingData, id }) => (
            <InterestingDataItem key={id} interestingData={interestingData} />
          ))}
        </CollapsibleContent>
      </Collapsible>
    </>
  );
}
