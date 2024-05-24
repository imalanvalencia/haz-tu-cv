import { ChevronsUpDown, Plus } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { PopUp } from "@/components/ui/pop-up";
import { EducationItem } from "./components/EducationItem";
import EducationForm from "./components/education-form";
import { TEducationState } from "./types";

export default function Education() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [educations, setEducations] = useState<TEducationState[]>([
    {
      name: "Auxiliar de comercio",
      type: "complementary",
      dateStart: new Date("2020"),
      dateEnd: new Date("2021"),
      currentlyStudy: false,
      center: "Sena",
      id: crypto.randomUUID(),
    },
  ]);

  const educationFormal = educations
    .filter((education) => {
      if (education.type === "complementary") return;
      return {
        ...education,
      };
    })
    .sort((edu, nextEdu) => edu.dateStart - nextEdu.dateStart);

  const lastEducationFormal =
    educationFormal[educationFormal.length - 1] ?? null;
  const restOfEducationsFormal = educationFormal.slice(
    0,
    educationFormal.length - 1
  );

  const educationComplementary = educations
    .filter((education) => {
      if (education.type === "oficial") return;
      return {
        ...education,
      };
    })
    .sort((edu, nextEdu) => edu.dateStart - nextEdu.dateStart);

  const lastEducationComplementary =
    educationComplementary[educationComplementary.length - 1] ?? null;
  const restOfEducationsComplementary = educationComplementary.slice(
    0,
    educationComplementary.length - 1
  );

  return (
    <div>
      <div className="title flex justify-between">
        <h2>Formacion</h2>

        <PopUp
          title="Agregar experiencia"
          description="Rellena los siguientes campos para agregar tu experiencia laboral"
          buttonLabel="Agregar nueva experiencia"
          buttonIcon={<Plus className="mr-2 h-4 w-4" />}
        >
          <EducationForm
            addEducation={(education) =>
              setEducations([...educations, education])
            }
          />
        </PopUp>
      </div>

      <Collapsible
        open={isOpen1}
        onOpenChange={setIsOpen1}
        className="w-[350px] space-y-2"
      >
        Formacion Reglada
        <div className="flex items-center justify-between space-x-4 px-4">
          <h4 className="text-sm font-semibold">
            Tienes {educationFormal.length} formaciones regladas
          </h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-9 p-0">
              <ChevronsUpDown className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          {educationFormal.length > 0 && (
            <EducationItem {...lastEducationFormal} />
          )}
        </div>
        <CollapsibleContent className="space-y-2">
          {restOfEducationsFormal.map((edu) => (
            <EducationItem {...edu} />
          ))}
        </CollapsibleContent>
      </Collapsible>

      <Collapsible
        open={isOpen2}
        onOpenChange={setIsOpen2}
        className="w-[350px] space-y-2"
      >
        Formacion Complementaria
        <div className="flex items-center justify-between space-x-4 px-4">
          <h4 className="text-sm font-semibold">
            Tienes {educationComplementary.length} formaciones complementarias
          </h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-9 p-0">
              <ChevronsUpDown className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          {educationComplementary.length > 0 && (
            <EducationItem {...lastEducationComplementary} />
          )}
        </div>
        <CollapsibleContent className="space-y-2">
          {restOfEducationsComplementary.map((edu) => (
            <EducationItem {...edu} />
          ))}
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
