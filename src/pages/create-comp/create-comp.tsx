import CardHolder from "./components/card-holder";

export default function CreateComp() {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-4xl font-bold pb-5">Create comp</h1>
        <p>Create and share your comp with other players!</p>

        <CardHolder label="Core cards" />
      </div>
    </div>
  );
}
