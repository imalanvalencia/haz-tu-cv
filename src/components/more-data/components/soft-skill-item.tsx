import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import { TSoftSkillParse } from "../types";

interface Props extends TSoftSkillParse {
  restProps?: React.HTMLAttributes<HTMLDivElement>;
  removeSoftSkill: (id: string) => void;
}

export function SoftSkillItem({
  softSkill,
  removeSoftSkill,
  id: softSkillId,
  ...restProps
}: Props) {
  return (
    <Badge className="text-sm" {...restProps}>
      <span className="mr-1">{softSkill}</span>
      <Button
        variant="ghost"
        className="p-1 rounded-full w-min h-min"
        onClick={() => removeSoftSkill(softSkillId)}
      >
        <X size={14} strokeWidth={3} />
      </Button>
    </Badge>
  );
}
