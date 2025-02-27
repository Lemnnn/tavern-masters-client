import { LucideProps } from "lucide-react";

type Props = {
  metadata: {
    id: number;
    title: string;
    description: string;
    icon: React.ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
    >;
  };
};

export default function UVPCard({ metadata }: Props) {
  const { title, description, icon: CardIcon } = metadata;

  return (
    <div className="w-full h-full rounded-xl bg-secondary p-4 flex flex-col items-start gap-4">
      <div className="flex items-center gap-3">
        <CardIcon className="text-primary" />

        <span className="font-xl font-bold text-white">{title}</span>
      </div>

      <div className="text-white/70">{description}</div>
    </div>
  );
}
