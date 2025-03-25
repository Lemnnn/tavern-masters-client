export default function CreateComp() {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-4xl font-bold pb-5">Create comp</h1>
        <p>Create and share your comp with other players!</p>
      </div>
      <div className="w-full flex flex-col pt-20">
        <div className="w-full bg-black/60">
          <p className="px-5 py-2">Core cards</p>
        </div>
        <div className="w-full min-h-[250px] bg-black/40"></div>
      </div>
    </div>
  );
}
