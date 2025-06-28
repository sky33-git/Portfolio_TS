import React from 'react';
import { Star, Users, TrendingUp, Award, Shield, Code2 } from "lucide-react";

const Card = ({ children, className }) => (
  <div className={`border rounded-lg bg-white ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children, className }) => (
  <div className={`p-4 ${className}`}>
    {children}
  </div>
);

const CardTitle = ({ children, className }) => (
  <h3 className={`text-xl font-semibold ${className}`}>
    {children}
  </h3>
);

const CardDescription = ({ children, className }) => (
  <p className={`text-sm text-gray-600 ${className}`}>
    {children}
  </p>
);

const CardContent = ({ children, className }) => (
  <div className={`p-4 ${className}`}>
    {children}
  </div>
);
// --- End Placeholder Card Components ---


const projects = [
  {
    title: "Library Management Sytem",
    description: "An application to automate and streamline the management of books, users and transactions in a library, aimed at improving overall library operations",
    technologies: ["HTML", "CSS", "JavaScript", "React.js", "JSON Server"],
    liveUrl: "https://library-management-phi-gray.vercel.app/",
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
    technologies: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js", "MongoDB Atlas", "Redux Toolkit", "Tailwind CSS"],
    liveUrl: "https://example.com/infra-monitor-live", // Added liveUrl for this project
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

// Helper function to get status color (using standard Tailwind colors)
const getStatusColor = (status) => {
  switch (status) {
    case "Featured": return "bg-yellow-500 text-yellow-900";
    case "UI Develop": return "bg-green-500 text-green-900";
    case "Open Source": return "bg-blue-500 text-blue-900";
    default: return "bg-gray-200 text-gray-800";
  }
};

// Helper function to get status icon
const getStatusIcon = (status) => {
  switch (status) {
    case "Featured": return Award;
    case "UI Develop": return Shield;
    case "Open Source": return Code2;
    default: return Star;
  }
};

export default function App() { // Changed to default export App for direct preview
  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
            My Featured Projects
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600 leading-relaxed">
            Innovative solutions spanning <span className="font-semibold text-blue-600">Frontend development</span>, <span className="font-semibold text-purple-600">infrastructure monitoring</span> and <span className="font-semibold text-green-600">system optimization</span>.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => {
            const StatusIcon = getStatusIcon(project.status);
            return (
              <Card key={index} className="group relative overflow-hidden border-0 bg-gradient-to-br from-card to-card/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">

                <div className="relative h-48 bg-gradient-to-br from-purple-100 to-blue-100 flex items-end justify-start p-4">
                  {/* Live Link Button - Moved to absolute positioning at bottom-right */}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-4 right-4 text-white text-sm font-semibold bg-blue-700/80 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-blue-800/90 transition-colors duration-300 flex items-center gap-2 shadow-md"
                    >
                      Live Project <span className="text-lg leading-none">→</span>
                    </a>
                  )}

                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <div className={`${getStatusColor(project.status)} px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-sm`}>
                      <StatusIcon className="h-4 w-4" />
                      {project.status}
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
                      {project.category}
                    </div>
                  </div>

                  {/* Stats at bottom (now bottom-left, as live link is bottom-right) */}
                  <div className="absolute bottom-4 left-4"> {/* Removed right-4 from here */}
                    <div className="flex justify-between items-center text-sm text-gray-700">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-600" />
                          <span>{project.stats.stars}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4 text-blue-600" />
                          <span>{project.stats.users}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <TrendingUp className="h-4 w-4 text-green-600" />
                          <span>{project.stats.growth}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <CardHeader className="p-6 space-y-4">
                  <div className="space-y-2">
                    <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-700 leading-relaxed text-base">
                      {project.description}
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="p-6 space-y-4 pt-0">
                  {/* Key Achievements */}
                  {project.achievements && project.achievements.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-800 flex items-center gap-2">
                        <Award className="h-5 w-5 text-purple-600" />
                        Key Achievements:
                      </h4>
                      <ul className="list-none space-y-1 pl-0">
                        {project.achievements.slice(0, 2).map((achievement, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mt-1.5 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies */}
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-800">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                            {tech.trim()}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
