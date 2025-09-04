"use client";

import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Mail, Code, FileText } from "lucide-react";

export function Hero() {

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/50" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-muted/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-muted/30 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 py-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">

          <div className="space-y-4">
            <div className="mx-auto w-58 px-4 py-2 text-foreground flex justify-center items-center border rounded-2xl [a&]:hover:bg-accent [a&]:hover:text-accent-foreground">
              <Code className="w-4 h-4 mr-2" />
              Software Developer
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                Hey, I&apos;m{" "}
                <span className="relative">
                  <span className="bg-gradient-to-r from-primary via-blue-700 to-primary bg-clip-text text-transparent">
                    &nbsp;Sunil &nbsp;&nbsp;&nbsp;
                  </span>
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-blue-600/20 blur-xl -z-10" />
                </span>
              </h1>

              <div className="max-w-3xl mx-auto">
                <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed">
                  I build robust applications and scalable systems{" "}
                  <span className="text-primary font-semibold">with a passion for</span>{" "}
                  <span className="text-blue-200 font-semibold">frontend and backend development</span> and{" "}
                  <span className="text-blue-200 font-semibold">performance optimization.</span>
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-card border rounded-lg overflow-hidden shadow-lg">
              <div className="bg-muted/50 px-4 py-2 border-b flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-red-400/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                    <div className="w-3 h-3 rounded-full bg-green-400/60" />
                  </div>
                  <span className="text-sm text-muted-foreground font-mono ml-2">developer.js</span>
                </div>
                <div className="text-xs flex border-transparent items-center font-mono ml-2 bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-2" />
                  Looking for opportunities
                </div>
              </div>

              <div className="p-6 font-mono text-sm text-left space-y-3">
                <div className="flex">
                  <span className="text-muted-foreground mr-4 w-6">1</span>
                  <span className="text-blue-500">const</span>
                  <span className="text-white ml-2">frontendDeveloper</span>
                  <span className="text-muted-foreground ml-2">=</span>
                  <span className="text-yellow-500 ml-2">{"{"}</span>
                </div>

                <div className="flex">
                  <span className="text-muted-foreground mr-4 w-6">2</span>
                  <span className="ml-4 text-green-400">name</span>
                  <span className="text-muted-foreground">:</span>
                  <span className="text-orange-400 ml-2">&apos;Sunil S&apos;</span>
                  <span className="text-muted-foreground">,</span>
                </div>

                <div className="flex">
                  <span className="text-muted-foreground mr-4 w-6">3</span>
                  <span className="ml-4 text-green-400">role</span>
                  <span className="text-muted-foreground">:</span>
                  <span className="text-orange-400 ml-2">&apos;Software Developer (Frontend &amp; MERN fullStack)&apos;</span>
                  <span className="text-muted-foreground">,</span>
                </div>

                <div className="flex">
                  <span className="text-muted-foreground mr-4 w-6">4</span>
                  <span className="ml-4 text-green-400">skills</span>
                  <span className="text-muted-foreground">:</span>
                  <span className="text-yellow-500 ml-2">[
                    &apos;Next.js&apos;,
                    &apos;React&apos;,
                    &apos;Node.js&apos;,
                    &apos;Express.js&apos;,
                    &apos;TypeScript&apos;,
                    &apos;JavaScript&apos;,
                    &apos;MongoDB&apos;,
                    &apos;SQL&apos;,
                    &apos;AWS&apos;,
                    &apos;Git&apos;,
                    &apos;CI/CD&apos;,
                    &apos;HTML&apos;,
                    &apos;CSS&apos;,
                    &apos;TailwindCSS&apos;
                    ]
                    <span className="text-muted-foreground text-white">,</span>
                  </span>

                </div>

                <div className="flex">
                  <span className="text-muted-foreground mr-4 w-6">5</span>
                  <span className="ml-4 text-green-400">technicalHighlights</span>
                  <span className="text-muted-foreground">:</span>
                  <span className="text-gray-500 ml-2">&apos;Built 7+ responsive web applications which are role based UI components, component-driven architecture and best web performance practices&apos;
                    <span className="text-muted-foreground text-white">,</span>
                  </span>
                </div>

                <div className="flex">
                  <span className="text-muted-foreground mr-4 w-6">6</span>
                  <span className="ml-4 text-green-400">education</span>
                  <span className="text-muted-foreground">:</span>
                  <span className="text-orange-400 ml-2">&apos;BSc - Computer Science&apos;</span>
                  <span className="text-muted-foreground">,</span>
                </div>

                <div className="flex">
                  <span className="text-muted-foreground mr-4 w-6">7</span>
                  <span className="ml-4 text-green-400">passion</span>
                  <span className="text-muted-foreground">:</span>
                  <span className="text-orange-400 ml-2">&apos;Building reliable frontend UI, backend systems and scalable applications&apos;</span>
                </div>

                <div className="flex">
                  <span className="text-muted-foreground mr-4 w-6">8</span>
                  <span className="text-yellow-500">{"}"}</span>
                </div>

                <div className="pt-2 border-t border-border/50">
                  <div className="flex items-center">
                    <span className="text-muted-foreground mr-4 w-6">9</span>
                    <span className="text-blue-500">export default</span>
                    <span className="text-white ml-2"> developer</span>
                    <span className="bg-white/20 w-2 h-5 ml-1 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2  justify-center items-center max-w-2xl mx-auto">
            <button onClick={scrollToProjects} className="relative items-center justify-center p-0.5 mb-2 me-2 cursor-pointer overflow-hidden text-sm font-medium text-gray-900">
              <span className="relative flex items-center px-5 py-2.5 transition-all ease-in duration-75 bg-black rounded-xl text-gray-600 hover:bg-gradient-to-br from-purple-600 to-black hover:text-white">
                <Code className="w-4 h-4" /> &nbsp; 4+ Projects
              </span>
            </button>

            <button onClick={scrollToContact} className="relative items-center justify-center p-0.5 mb-2 me-2 cursor-pointer overflow-hidden text-sm font-medium text-gray-900">
              <span className="relative flex items-center px-5 py-2.5 transition-all ease-in duration-75 bg-black rounded-xl text-gray-600 hover:bg-gradient-to-br from-purple-600 to-black hover:text-white">
                <Mail className="w-4 h-4" /> &nbsp;  Let&apos;s Connect!
              </span>
            </button>

            <button onClick={scrollToContact} className="relative items-center justify-center p-0.5 mb-2 me-2 cursor-pointer overflow-hidden text-sm font-medium text-gray-900">
                <a
                className="relative flex items-center px-5 py-2.5 transition-all ease-in duration-75 bg-black rounded-xl text-gray-600 hover:bg-gradient-to-br from-purple-600 to-black hover:text-white"
                 href="https://drive.google.com/file/d/1RpvKmDOu4DUBSbJfb72PgDKtncdt96m3/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-4 w-4" />
                  My Resume
                </a>
            </button>

          </div>

          <div className="flex gap-4 justify-center">
            <button className=" h-10 rounded-md has-[>svg]:px-4 hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 hover:bg-primary/10 transition-colors">
              <a href="https://github.com/sky33-git" target="_blank" rel="noopener noreferrer">
                <GitHubLogoIcon className="h-8 w-8" />
                <span className="sr-only">GitHub</span>
              </a>
            </button>
            
            <button className="hover:bg-primary/10 transition-colors">
              <a href="https://linkedin.com/in/sunil-s-7b5377242" target="_blank" rel="noopener noreferrer">
                <LinkedInLogoIcon className="h-8 w-8" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </button>
            <button className="hover:bg-primary/10 transition-colors">
              <a href="mailto:sunilsks2017@gmail.com">
                <Mail className="h-8 w-8" />
                <span className="sr-only">Email</span>
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 
