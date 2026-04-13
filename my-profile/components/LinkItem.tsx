

interface LinkItemProps {
  title: string;
  url: string;
  description?: string;
  delay?: number;
}

export function LinkItem({ title, url, description, delay = 0 }: LinkItemProps) {
  return (
    <a
      href={url}
      className="glass-panel group relative flex items-center justify-between p-5 mb-4 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:border-purple-500/50 hover:shadow-[0_10px_40px_-10px_rgba(168,85,247,0.4)] block cursor-pointer opacity-0 animate-fade-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10 flex-1">
        <h2 className="text-[1.1rem] font-bold text-slate-100 group-hover:text-white transition-colors tracking-wide">{title}</h2>
        {description && <p className="text-sm font-medium text-slate-400 mt-1.5">{description}</p>}
      </div>
      <div className="relative z-10 ml-4 p-2 rounded-full bg-white/5 text-slate-400 group-hover:bg-purple-500/20 group-hover:text-purple-300 transform transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="7" y1="17" x2="17" y2="7" />
          <polyline points="7 7 17 7 17 17" />
        </svg>
      </div>
    </a>
  );
}
