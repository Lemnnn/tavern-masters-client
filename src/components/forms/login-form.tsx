import { Eye, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import AuthInput from "../shared/auth-input";
import { useState } from "react";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(email, password);

  return (
    <form className="space-y-6">
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

      <div className="space-y-2">
        <div className="flex justify-end">
          <Link
            to="/forgot-password"
            className="text-gray-400 hover:text-white text-sm font-medium"
          >
            Forgot Password?
          </Link>
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-3 px-4 bg-white hover:bg-gray-200 text-black font-medium rounded-lg transition duration-200"
      >
        Log In
      </button>
    </form>
  );
}
