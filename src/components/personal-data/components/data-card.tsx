import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { TPersonalDataParse } from "../types";

interface Props extends TPersonalDataParse {}

export function DataCard({ name, job, mail, phone, location }: Props) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{job}</CardDescription>
        <CardContent>
          <p>{mail}</p>
          <p>{phone}</p>
          <p>{location}</p>
        </CardContent>
      </CardHeader>
    </Card>
  );
}
