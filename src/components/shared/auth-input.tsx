interface AuthInputProps {
  label: string;
  type?: string;
  value?: string;
  register?: any;
  name?: string;
  icon?: React.ReactNode;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
}

export default function AuthInput({
  label,
  type,
  value,
  icon,
  register,
  name,
  onChange,
  onClick,
}: AuthInputProps) {
  return (
    <div className="space-y-2">
      <label className="block text-gray-300">{label}</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-3 flex items-center">
          <span className="text-gray-500" onClick={onClick}>
            {icon}
          </span>
        </div>
        <input
          type={type}
          value={value}
          onChange={onChange}
          {...(register && register(name))}
          className="pl-10 pr-4 py-3 w-full bg-zinc-800 border border-zinc-700 text-white rounded-lg focus:ring-2 focus:ring-white focus:border-zinc-600 outline-none"
        />
      </div>
    </div>
  );
}
