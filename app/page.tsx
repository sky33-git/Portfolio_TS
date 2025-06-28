import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import  Projects  from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";
import { AnchorHandler } from "@/components/AnchorHandler";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Sunil S",
    "jobTitle": "Frontend Developer",
    "description": "Software Engineer specializing in frontend development and even in backend development and scalable applications",
    "url": "https://github.com/sky33-git",
    "sameAs": [
      "https://github.com/sky33-git",
      "https://linkedin.com/in/sunil-s-7b5377242",
      "https://twitter.com/skyforever48"
    ],
    "knowsAbout": [
      "Next.js",
      "React.js",
      "Node.js",
      "TypeScript",
      "JavaScript",
      "AWS",
      "Backend Development",
      "Full Stack Web Development"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "BSc - Computer Science"
    },
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Frontend Developer - Freelance",
      "occupationLocation": {
        "@type": "Place",
        "name": "Bengaluru/KA"
      },
      "skills": "Backend Development, UI Development, Full-Stack Development"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <AnchorHandler />

      <main>
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  )
}