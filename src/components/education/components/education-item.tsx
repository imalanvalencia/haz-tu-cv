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
  let date = `${dateStart} - ${dateEnd}`;
  if (currentlyStudy) {
    date = `${dateStart} - Actualmente`;
    return;
  }
  return (
    <div
      className="flex justify-between rounded-md border px-4 py-3 font-semibold font-mono text-sm text-left"
      {...restProps}
    >
      <div>
        <h5>{name}</h5>
        <p className="text-xs font-normal">{center}</p>
      </div>

      <span>{date}</span>
    </div>
  );
}
