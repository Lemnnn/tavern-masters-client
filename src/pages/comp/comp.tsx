import { useParams } from "react-router-dom";
import { useGetCompById } from "@/api/queries/comps";

export default function Comp() {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, error } = useGetCompById(id!);

  console.log("comp data", data);

  if (isLoading) return <div>Loading comp...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const comp = data?.comp;

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">{comp.name}</h1>
      <p className="text-gray-500">
        Created at: {new Date(comp.created_at).toLocaleString()}
      </p>

      {[
        { label: "Core Cards", cards: comp.coreCards },
        { label: "Spell Cards", cards: comp.spellCards },
        { label: "Addon Cards", cards: comp.addonCards },
        { label: "Hero Cards", cards: comp.heroCards },
      ].map(({ label, cards }) =>
        cards?.length > 0 ? (
          <div key={label}>
            <h2 className="text-lg font-semibold mb-2">{label}</h2>
            <div className="flex flex-wrap gap-4">
              {cards.map((url: string, idx: number) => (
                <img
                  key={idx}
                  src={url}
                  alt={`${label} ${idx + 1}`}
                  className="w-32 h-auto rounded-lg shadow-md"
                />
              ))}
            </div>
          </div>
        ) : null
      )}
    </div>
  );
}
