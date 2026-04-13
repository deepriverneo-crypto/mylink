import Image from "next/image";

interface ProfileCardProps {
  name: string;
  title: string;
  avatarUrl: string;
}

export function ProfileCard({ name, title, avatarUrl }: ProfileCardProps) {
  return (
    <div className="flex flex-col items-center mb-8 opacity-0 animate-fade-up">
      <div className="relative w-32 h-32 mb-5 rounded-full p-[3px] bg-gradient-to-tr from-purple-500 via-indigo-500 to-blue-500 shadow-[0_0_40px_-10px_rgba(168,85,247,0.5)]">
        <div className="overflow-hidden w-full h-full rounded-full bg-slate-900 border-2 border-slate-900">
          <Image
            src={avatarUrl}
            alt={`${name}'s Avatar`}
            width={128}
            height={128}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
      </div>
      <h1 className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">{name}</h1>
      <p className="text-sm font-semibold text-indigo-300 mt-2 uppercase tracking-[0.2em]">{title}</p>
    </div>
  );
}
