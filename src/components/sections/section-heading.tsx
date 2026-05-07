import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, align = "center", className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      <Badge>{eyebrow}</Badge>
      <h2 className="mt-4 text-3xl font-bold tracking-normal text-foreground sm:text-4xl lg:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-muted-foreground sm:text-lg">{description}</p>
    </div>
  );
}
