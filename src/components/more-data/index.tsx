import { HardSkillsForm } from "./components/hard-skills";
import { SoftSkillsForm } from "./components/soft-skills";
import { LanguagesForm } from "./components/languages";
import { InterestingDataForm } from "./components/interesting-data";

export default function MoreData() {
  return (
    <>
      <h2>Habilidades Profesionales</h2>
      <HardSkillsForm />
      <h2>Compentencias Personales</h2>
      <SoftSkillsForm />
      <h2>Idiomas</h2>
      <LanguagesForm />
      <h2>Otros datos de interes</h2>
      <InterestingDataForm />
    </>
  );
}
