import { useState } from "react";
import { TPersonalData, TPersonalDataParse } from "./types";
import { PersonalDataForm } from "./components/personal-data-form";
import { DataCard } from "./components/data-card";

export default function PersonalData() {
  const [personalData, setPersonalData] = useState<TPersonalDataParse>();

  const handleSubmit = (data: TPersonalData) => {
    const dataParse = {
      ...data,
      id: crypto.randomUUID(),
    };

    setPersonalData(dataParse);
  };

  return (
    <>
      {personalData ? (
        <DataCard {...personalData} />
      ) : (
        <PersonalDataForm handleFormSubmit={handleSubmit} />
      )}
    </>
  );
}
