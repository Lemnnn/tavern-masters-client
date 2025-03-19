import { Eye, Mail, User } from "lucide-react";
import AuthInput from "../shared/auth-input";
import { useState } from "react";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  console.log(email, password);

  return (
    <form className="space-y-6">
      <AuthInput
        label="Username"
        type="text"
        value={username}
        icon={<User />}
        onChange={(e) => setUsername(e.target.value)}
      />

      <AuthInput
        label="Email"
        type="email"
        value={email}
        icon={<Mail />}
        onChange={(e) => setEmail(e.target.value)}
      />

      <AuthInput
        label="Password"
        type={showPassword ? "text" : "password"}
        value={password}
        icon={<Eye />}
        onChange={(e) => setPassword(e.target.value)}
        onClick={(e) => {
          e.preventDefault();
          setShowPassword(!showPassword);
        }}
      />

      <button
        type="submit"
        className="w-full py-3 px-4 bg-white hover:bg-gray-200 text-black font-medium rounded-lg transition duration-200"
      >
        Sign Up
      </button>
    </form>
  );
}
