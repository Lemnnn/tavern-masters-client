import { useGetAuthenticatedUser } from "../../context/authenticated-context";

export default function Home() {
  const { username, email } = useGetAuthenticatedUser();

  return (
    <div>
      <p>{username}</p>
      <p>{email}</p>
    </div>
  );
}
