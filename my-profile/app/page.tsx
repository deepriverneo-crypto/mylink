import { ProfileCard } from "@/components/ProfileCard";
import { LinkItem } from "@/components/LinkItem";
import { SocialIcons } from "@/components/SocialIcons";
import { profileData, externalLinks, socialLinks } from "./data";

export default function Home() {
  return (
    <main className="flex-1 w-full max-w-2xl mx-auto px-5 py-24 flex flex-col items-center min-h-screen">
      <div className="w-full max-w-md">
        <ProfileCard 
          name={profileData.name} 
          title={profileData.title} 
          avatarUrl={profileData.avatarUrl} 
        />
        
        <div className="mt-10 flex flex-col gap-1 w-full">
          {externalLinks.map((link, index) => (
            <LinkItem 
              key={link.title}
              title={link.title}
              url={link.url}
              description={link.description}
              delay={index * 100 + 100}
            />
          ))}
        </div>

        <SocialIcons links={socialLinks} />
      </div>
    </main>
  );
}
