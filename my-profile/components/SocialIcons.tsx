interface SocialIconsProps {
  links: Array<{ name: string; url: string }>;
}

export function SocialIcons({ links }: SocialIconsProps) {
  const getIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "github":
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.12-.34 6.4-1.51 6.4-6.98 0-1.55-.56-2.9-1.5-3.9.15-.38.65-1.84-.15-3.84 0 0-1.2-.38-3.9 1.45a13.4 13.4 0 0 0-7 0c-2.7-1.83-3.9-1.45-3.9-1.45-.8 2-.3 3.46-.15 3.84-.94 1-1.5 2.35-1.5 3.9 0 5.46 3.28 6.64 6.4 6.98-.36.31-.69.85-.81 1.64-.73.33-2.58.89-3.72-1.06 0 0-.67-1.22-1.95-1.31 0 0-1.24-.02-.09.77.08.05.51.27.91 1 0 0 .73 2.19 3.02 2.33M9 22v-4" />
          </svg>
        );
      case "twitter":
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
          </svg>
        );
      case "instagram":
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex gap-5 items-center justify-center mt-12 opacity-0 animate-zoom-in [animation-delay:500ms]">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3.5 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white hover:scale-110 hover:-translate-y-2 transition-all duration-300 shadow-xl hover:shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] hover:border-white/30"
          title={link.name}
        >
          {getIcon(link.name)}
        </a>
      ))}
    </div>
  );
}
