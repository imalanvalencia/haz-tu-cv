import { formatDate } from "@/lib/date";
import { TEducationState } from "../types";

interface Props extends TEducationState {
  restProps?: React.HTMLAttributes<HTMLDivElement>;
}

export function EducationItem({
  name,
  dateStart,
  dateEnd,
  currentlyStudy,
  center,
  ...restProps
}: Props) {
  const dateStartFormated = formatDate(dateStart);
  const dateEndFormated = dateEnd && formatDate(dateEnd);

  let date = `${dateStartFormated} - ${dateEndFormated}`;
  if (currentlyStudy) {
    date = `${dateStartFormated} - Actualmente`;
    console.log("currentlyStudy", date);
  }

  return (
    <div
      className="flex justify-between rounded-md border px-4 py-3 font-semibold font-mono text-sm text-left"
      {...restProps}
    >
      <div>
        <h5>{name}</h5>
        <span className="capitalize">{date}</span>
      </div>

      <p className="text-sm font-normal capitalize">{center}</p>
    </div>
  );
}
