import { TInterestingData } from "../types";

interface Props extends TInterestingData {
  restProps?: React.HTMLAttributes<HTMLParagraphElement>;
}

export function InterestingDataItem({ interestingData, ...restProps }: Props) {
  return <p {...restProps}>{interestingData}</p>;
}
