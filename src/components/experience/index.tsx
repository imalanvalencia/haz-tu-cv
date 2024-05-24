import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { PopUp } from "@/components/ui/pop-up";
import ExperienceForm from "./components/experience-form";
import { TExperienceWithId } from "./types";

export default function Experience() {
  const [experiences, setExperiences] = useState<TExperienceWithId[]>([
    {
      job: "Auxiliar de comercio",
      dateStart: "2021",
      dateEnd: "2022",
      company: "Rappi",
      description: "Cobro de comisiones",
      id: crypto.randomUUID(),
      currentlyWork: false,
    },
  ]);

  return (
    <div>
      <div className="title flex justify-between">
        <h2>Experience</h2>

        <PopUp
          title="Agregar experiencia"
          description="Rellena los siguientes campos para agregar tu experiencia laboral"
          buttonLabel="Agregar nueva experiencia"
          buttonIcon={<Plus className="mr-2 h-4 w-4" />}
        >
          <ExperienceForm
            addExperience={(experience) =>
              setExperiences([
                ...experiences,
                { ...experience, id: crypto.randomUUID() },
              ])
            }
          />
        </PopUp>
      </div>

      <div>
        {experiences.map(
          ({ job, company, description, dateStart, dateEnd, id }) => (
            <Accordion key={id} type="single" collapsible>
              <AccordionItem value={id}>
                <AccordionTrigger className="flex justify-between">
                  <h3 className="flex-grow text-left">{job}</h3>
                  <span className="uppercase text-sm pr-2">
                    {dateStart} - {dateEnd}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-left space-y-4">
                  <p>{company}</p>

                  <p>{description}</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          )
        )}
      </div>
    </div>
  );
}
