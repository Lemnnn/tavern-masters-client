import { Eye, Loader2, Mail } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import AuthInput from "../shared/auth-input";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, TLogin } from "../../schemas/auth";
import { useLoginUser } from "../../api/queries/auth";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<TLogin>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutateAsync: loginUser, isPending, error } = useLoginUser();

  const navigate = useNavigate();

  async function onSubmit(values: TLogin) {
    try {
      await loginUser(values);

      form.reset();
      form.clearErrors();

      navigate("/home");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
      {error && (
        <div className=" text-red-600 text-center">{error.message}</div>
      )}

      <AuthInput
        label="Email"
        type="email"
        icon={<Mail />}
        register={form.register}
        name="email"
        error={form.formState.errors.email?.message}
      />

      <AuthInput
        label="Password"
        type={showPassword ? "text" : "password"}
        icon={<Eye />}
        register={form.register}
        name="password"
        error={form.formState.errors.password?.message}
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
        disabled={isPending}
        className="w-full py-3 px-4 flex justify-center bg-white hover:bg-gray-200 text-black font-medium rounded-lg transition duration-200"
      >
        {isPending ? (
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
        ) : (
          "Log In"
        )}
      </button>
    </form>
  );
}
