import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/utils/Card";
import { Star, Users, TrendingUp, Award, Shield, Code2 } from "lucide-react";

const projects = [
  {
    title: "Library Management Sytem",
    description: "An application to automate and streamline the management of books, users and transactions in a library, aimed at improving overall library operations",
    technologies: [" HTML", "CSS", "JavaScript", "React.js", "JSON Server"],
    githubUrl: "https://github.com/sky33-git" | "https://library-management-phi-gray.vercel.app/",
    status: "Featured",
    stats: { stars: "Effeciency", users: "Time cutting", growth: "Production" },
    category: "Tool",
    achievements: [
      "Developed an application that automated library management for books, users, and transactions, significantly streamlining operations.",
      "Engineered robust state management with React Hooks and implemented seamless navigation, delivering a dynamic user experience.",
      "Managed full CRUD operations for books and users by integrating with a JSON Server API to handle backend data.",
      "Incorporated advanced filtering, sorting, and conditional rendering to enhance usability and tailor the interface based on user roles and data."
    ]
  },

  {
    title: "Infrastructure Monitoring & Vulnerability Scanning Suite",
    description: "Developed a full-featured Swiggy clone, enabling users to browse restaurants, view menus, place orders, and track deliveries.",
    technologies: ["HTML", "CSS", "JavaScript", " React.js", "Node.js", "Express.js", "MongoDB Atlas", "Redux Toolkit",
      "Tailwind CSS"],
    status: "UI Develop",
    stats: { stars: "30+ Rules", users: "Live API's", growth: "99% UI Match" },
    category: "Responsive design",
    achievements: [
      "Built a responsive, dynamic frontend using React, managing complex global state like cart and user authentication with Redux Toolkit.",
      "Engineered a robust Node.js/Express.js backend integrated with MongoDB Atlas, facilitating comprehensive CRUD operations via REST APIs.",
      "Integrated live APIs for real-time data, ensuring efficient asynchronous operations, robust error handling, and thorough API testing with Postman."
    ]
  },
  {
    title: "All Bout Gamerz - ABZ Esports",
    description: "Developed a dynamic Gamers Website featuring dedicated sections for tournaments, scrims, a homepage, and a reward redeem system.",
    technologies: ["HTML", "CSS", "JAVASCRIPT", "JSON Server", "AI"],
    status: "Open Source",
    stats: { stars: "User-Friendly", users: "AI", growth: "Community" },
    category: "System Tool",
    achievements: [
      "Successfully built an interactive Tournament System for event viewing and participation tracking, alongside a Scrims Section for competitive match organization.",
      "Designed a responsive homepage with engaging content and focused on seamless UI/UX for smooth navigation and enhanced user engagement.",
      "Utilized JSON Server to simulate a backend with a fake REST API, enabling rapid prototyping and testing of CRUD operations for game data."
    ]
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Featured": return "bg-gradient-to-r from-yellow-500 to-orange-500";
    case "Production": return "bg-gradient-to-r from-green-500 to-emerald-500";
    case "Sold": return "bg-gradient-to-r from-purple-500 to-pink-500";
    case "Open Source": return "bg-gradient-to-r from-blue-500 to-cyan-500";
    default: return "bg-gradient-to-r from-primary to-purple-600";
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case "Featured": return Award;
    case "Production": return Shield;
    case "Sold": return TrendingUp;
    case "Open Source": return Code2;
    default: return Star;
  }
};

export function Projects() {
  return (
    <section id="projects" className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent" />

      <div className="container relative mx-auto px-4">
        <div className="text-center mb-8">
          <div className="text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground mb-4 px-3 py-1">
            My Work
          </div>
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="mx-auto max-w-[800px] text-xl text-muted-foreground leading-relaxed">
            Innovative solutions spanning{" "}
            <span className="text-primary font-semibold">Frontend development</span>,{" "}
            <span className="text-purple-600 font-semibold">infrastructure monitoring</span> and{" "}
            <span className="text-primary font-semibold">system optimization</span>
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => {
            const StatusIcon = getStatusIcon(project.status);
            return (
              <Card key={index} className="group relative overflow-hidden border-0 bg-gradient-to-br from-card to-card/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">


                <div className="relative h-48 bg-gradient-to-br from-primary/10 via-purple-500/10 to-primary/10 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className={`${getStatusColor(project.status)} text-white border-0 shadow-lg flex items-center gap-1`}>
                      <StatusIcon className="h-3 w-3" />
                      {project.status}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-background/80 backdrop-blur-sm border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90">
                      {project.category}
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex justify-between items-center text-sm text-white/80">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4" />
                          <span>{project.stats.stars}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>{project.stats.users}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <TrendingUp className="h-4 w-4" />
                          <span>{project.stats.growth}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <CardHeader className="space-y-4">
                  <div className="space-y-2">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <h4 className="font-semibold text-sm flex items-center gap-2">
                      <Award className="h-4 w-4 text-primary" />
                      Key Achievements:
                    </h4>
                    <ul className="space-y-1">
                      {project.achievements.slice(0, 2).map((achievement, idx) => (
                        <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                          <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-1">
                    <h4 className="font-semibold text-sm">Technologies:</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <div key={tech} className="border-white bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90 text-xs px-2 py-1 hover:bg-primary/10 transition-colors">
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
} 
