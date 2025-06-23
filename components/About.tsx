import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/utils/Card";
import { Code, Lightbulb, Heart, Zap, Coffee, Award, GraduationCap, MapPin, Globe, Phone, Pen, Mail } from "lucide-react";
import Image from "next/image";

const highlights = [
  {
    icon: Code,
    title: "Frontend Developer",
    description: "Specializing in responsive UI, scalable applications, AWS, backend logics, etc.."
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Turning complex infrastructure challenges into automated/structured solutions"
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Optimizing application performance, API response times, and system reliability"
  }
];

const interests = ["Frontend 🧑‍💻", "Backend 🔧", "Cloud ☁️", "Open Source 🤖", "Team Work 🚀"]

export function About() {
  return (
    <section id="about" className="relative py-4">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-transparent" />

      <div className="container relative mx-auto px-4">
        <div className="text-center mb-12">

          <div className="mx-auto w-45 opacity-30 px-4 py-2 my-4 text-foreground flex justify-center items-center border rounded-2xl [a&]:hover:bg-accent [a&]:hover:text-accent-foreground">
            Get to know me
          </div>

          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute -inset-x-1 bg-gradient-to-r from-primary to-purple-600 rounded-full blur-sm opacity-75 animate-pulse"></div>
              <Image
                src="/profile.png"
                alt="Sunil"
                width={120}
                height={120}
                className="relative rounded-full border-4 border-background shadow-xl"
              />
            </div>
          </div>

          <p className="mx-auto max-w-[800px] text-xl text-muted-foreground leading-relaxed">
            A frontend-focused{" "}
            <span className="text-primary font-semibold">Software developer</span> with a foundation in{" "}
            <span className="text-purple-600 font-semibold">Full Stack Developmenet and AI</span>. I specialize in building reliable{" "}
            <span className="text-primary font-semibold">Web applications, APIs and responsive applications</span> that solve real-world problems.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 mb-12 sm:mb-16">
          <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-card to-card/50">
            <CardHeader className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Heart className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <CardTitle className="text-2xl my-2">My Journey</CardTitle>
                  <CardDescription className="text-base">
                    Gamer → Strategic Operations → Software Developer
                  </CardDescription>
                </div>
              </div>

            </CardHeader>

            <CardContent className="space-y-6">
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Im from Chittoor, AP currently staying in Bengaluru, KA. <br /> I completed my graduation in Bachelor&apos;s of Science in Computer science and Mathematics in 2024 at Vijayam science and arts degree college.
                  My journey started as a gamer, and started working in a gaming org, expanded into Strategic operations and matured into full-stack software
                  development — especially frontend systems and APIs. Who;s eagerly waiting for a opportunities to transform into full time developer.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Currently, I&npos;m working in Conduent Technologies, where I manage product knowledge and documentation,
                  developing detailed FAQs and essential support materials.
                  By analyzing customer interactions and collaborating directly with key clients,
                  I continually refine self-service resources and knowledge base content.
                  My work involves partnering with cross-functional teams to
                  ensure support aligns seamlessly with product evolution and user needs.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-lg flex items-center gap-2">
                  <Pen className="h-4 w-4 text-primary" />
                  Personal Info:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4 text-primary" />
                    <span>BSc - Computer Science</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <span>8807563513</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary" />
                    <span>sunilsks2017@gmail.com</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>Bengaluru, KA</span>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-card to-card/50">
            <CardHeader className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-500/10 rounded-lg">
                  <Zap className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <CardTitle className="text-2xl my-2">My Approach</CardTitle>
                  <CardDescription className="text-base">
                    Designing and developing scalable, secure applications and software systems
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">

              <div className="grid gap-4">
                {highlights.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                    <div className="flex-shrink-0 p-1">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-medium mb-1">{item.title}</h5>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 ml-8">
                <h4 className="font-semibold text-lg">What drives me:</h4>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest) => (
                    <div key={interest} className="text-sm px-3 py-1">
                      {interest}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-r from-primary/5 via-purple-500/5 to-primary/5 border-0 mb-8">
          <CardContent className="p-6 sm:p-8">
            <div className="text-center space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold">Recent Achievements</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <Zap className="h-8 w-8 text-primary mx-auto" />
                  <p className="font-semibold">Bug bash</p>
                  <p className="text-2xl font-bold text-primary">1st</p>
                  <p className="text-m text-muted-foreground">Most bugs found by an individual on our product.</p>
                </div>
                <div className="space-y-2">
                  <Code className="h-8 w-8 text-primary mx-auto" />
                  <p className="font-semibold">Certifications </p>
                  <p className="text-2xl font-bold text-primary">Best dashboard</p>
                  <p className="text-sm text-muted-foreground">LOOKER BI & POWER BI</p>
                </div>
                <div className="space-y-2">
                  <Award className="h-8 w-8 text-primary mx-auto" />
                  <p className="font-semibold">Certifications</p>
                  <p className="text-2xl font-bold text-primary">4+</p>
                  <p className="text-sm text-muted-foreground">MERN Full Stack Developer - JSPIDERS</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-primary/5 via-purple-500/5 to-primary/5 border-0">
          <CardContent className="p-6 sm:p-8">
            <div className="text-center space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold">Fun Facts About Me</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <Coffee className="h-8 w-8 text-primary mx-auto" />
                  <p className="font-semibold">Technologies</p>
                  <p className="text-2xl font-bold text-primary">15+</p>
                  <p className="text-sm text-muted-foreground">Frontend, Backend, AI integrations</p>
                </div>
                <div className="space-y-2">
                  <Code className="h-8 w-8 text-primary mx-auto" />
                  <p className="font-semibold">Favorite Game</p>
                  <p className="text-xl font-bold text-primary">BGMI / Valorant</p>
                  <p className="text-sm text-muted-foreground"></p>
                </div>
                <div className="space-y-2">
                  <Globe className="h-8 w-8 text-primary mx-auto" />
                  <p className="font-semibold">Deployment Platform</p>
                  <p className="text-xl font-bold text-primary">AWS / Vercel and Sometimes I work in Digital Ocean too</p>
                  <p className="text-sm text-muted-foreground">Cloud-native application deployment</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
} 