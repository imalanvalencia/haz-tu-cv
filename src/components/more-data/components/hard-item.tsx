import { THardSkill } from "../types";

interface Props extends THardSkill {
  restProps?: React.HTMLAttributes<HTMLParagraphElement>;
}

export function HardItem({ hardSkill, ...restProps }: Props) {
  return <p {...restProps}>{hardSkill}</p>;
}
