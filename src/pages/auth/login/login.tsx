import { Link } from "react-router-dom";
import LoginForm from "../../../components/forms/login-form";
import OauthButtons from "../../../components/shared/oauth-buttons";
import AuthDivider from "../../../components/shared/auth-divider";
import AuthIlustration from "../../../components/shared/auth-illustration";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-zinc-800 flex items-center justify-center p-4">
      <div className="bg-zinc-900 rounded-3xl shadow-lg w-full max-w-5xl overflow-hidden flex flex-col md:flex-row">
        <AuthIlustration />

        <div className="p-8 md:p-12 flex-1 bg-zinc-900">
          <div className="mt-4 max-w-md mx-auto">
            <h1 className="text-3xl font-bold text-white mb-8">
              Welcome Back!
            </h1>

            <LoginForm />

            <AuthDivider />

            <OauthButtons />

            <div className="mt-8 text-center">
              <p className="text-gray-400">
                Don't have an account?
                <Link
                  to="/signup"
                  className="text-white hover:text-gray-300 ml-1 font-medium"
                >
                  Sign Up!
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
