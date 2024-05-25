import { useState } from "react";
import { HardSkillsForm } from "./components/hard-skills";

export default function MoreData() {
  const [setsoftSkills, setSetsoftSkills] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [insterestingData, setInsterestingData] = useState([]);

  return (
    <>
      <h2>Habilidades Profesionales</h2>
      <HardSkillsForm />
      <h2>Compentencias Personales</h2>
      <h2>Idiomas</h2>
      <h2>Otros datos de interes</h2>
    </>
  );
}
