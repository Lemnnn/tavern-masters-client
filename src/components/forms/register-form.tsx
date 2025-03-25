import { Eye, Loader2, Mail, User } from "lucide-react";
import AuthInput from "../shared/auth-input";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, TRegister } from "../../schemas/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useRegisterUser } from "../../api/queries/auth";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<TRegister>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const { mutateAsync: registerUser, isPending, error } = useRegisterUser();

  const navigate = useNavigate();

  async function onSubmit(values: TRegister) {
    try {
      const success = await registerUser(values);

      if (success) {
        form.reset();
        form.clearErrors();

        navigate("/notes");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
      {error && (
        <div className="bg-red-500 text-white p-3 rounded-lg text-center">
          {error.message}
        </div>
      )}

      <AuthInput
        label="Username"
        type="text"
        register={form.register}
        name="username"
        icon={<User />}
      />

      <AuthInput
        label="Email"
        type="email"
        register={form.register}
        name="email"
        icon={<Mail />}
      />

      <AuthInput
        label="Password"
        type={showPassword ? "text" : "password"}
        register={form.register}
        icon={<Eye />}
        name="password"
        onClick={(e) => {
          e.preventDefault();
          setShowPassword(!showPassword);
        }}
      />

      <button
        type="submit"
        disabled={isPending}
        className="w-full py-3 px-4 flex justify-center bg-white hover:bg-gray-200 text-black font-medium rounded-lg transition duration-200"
      >
        {isPending ? (
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
        ) : (
          "Sign Up"
        )}
      </button>
    </form>
  );
}
