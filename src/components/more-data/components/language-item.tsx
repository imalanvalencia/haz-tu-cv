import { TLanguageParse } from "../types";

interface Props extends TLanguageParse {
  restProps?: React.HTMLAttributes<HTMLDivElement>;
}

export function LanguageItem({ language, level, ...restProps }: Props) {
  return (
    <div
      className="flex justify-between rounded-md border px-4 py-3 font-semibold font-mono text-sm text-left"
      {...restProps}
    >
      <div>
        <h5>{language}</h5>
        <p className="text-xs font-normal">{level}</p>
      </div>
    </div>
  );
}
