import loginIllustration from "../../assets/login-illustration.jpg";

export default function AuthIlustration() {
  return (
    <div
      className="p-6 flex-1 hidden md:block bg-cover bg-[center_bottom_30%] bg-no-repeat"
      style={{ backgroundImage: `url(${loginIllustration})` }}
    ></div>
  );
}
