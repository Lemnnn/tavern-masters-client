import { useGetMyComps } from "@/api/queries/comps";
import { Link } from "react-router-dom";

export default function MyComps() {
  const { data, isLoading, error } = useGetMyComps();

  if (isLoading) return <div>Loading your comps...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const comps = data?.comps ?? [];

  if (comps.length === 0) {
    return <div>No comps found.</div>;
  }

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">My Comps</h1>
      <div className="space-y-6">
        {comps.map((comp) => (
          <Link to={`/comps/${comp.id}`} key={comp.id} className="p-4">
            <div key={comp.id} className="p-4 rounded-lg bg-black/60">
              <h2 className="text-lg font-semibold mb-2">{comp.name}</h2>
              <p className="text-sm text-gray-500 mb-4">
                Created at: {new Date(comp.created_at).toLocaleString()}
              </p>
              <div className="flex gap-4">
                {comp.coreCards?.map((url: string, idx: number) => (
                  <img
                    src={url}
                    alt={`${comp.name} card ${idx + 1}`}
                    className="w-35 h-auto"
                  />
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
