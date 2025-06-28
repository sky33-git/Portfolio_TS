"use client"

import React from 'react';
import { Star, Users, TrendingUp, Award, Shield, Code2 } from "lucide-react";

export default function Projects() {

  const handleClick = () => {
    window.open(`https://library-management-phi-gray.vercel.app/`, '_blank');
  }

  return (
    <section id="projects" className="py-16 bg-black">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-gray-100 mb-4">
            My Featured Projects
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-200 leading-relaxed">
            Innovative solutions spanning <span className="font-semibold text-blue-600">Frontend development</span>, <span className="font-semibold text-purple-600">infrastructure monitoring</span> and <span className="font-semibold text-green-600">system optimization</span>.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {Data.map((project, index) => {
            const StatusIcon = getStatusIcon(project.status);
            return (
              <div key={index} className="group relative overflow-hidden rounded-lg border bg-black text-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">

                <div className="relative h-48 bg-gradient-to-br from-purple-100 to-blue-100 flex items-end justify-start p-4">
                  <div className="absolute top-4 left-4">
                    <div className={`${getStatusColor(project.status)} px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-sm`}>
                      <StatusIcon className="h-4 w-4" />
                      {project.status}
                    </div>
                  </div>

                  <div className="absolute top-4 right-4">
                    <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
                      {project.category}
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex justify-between items-center text-sm text-white/80">
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

                        {project.title === "Library Management Sytem" && (
                          <button
                            id="redirectButton"
                            className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
                            onClick={handleClick}
                          >
                            Check Production!
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-base">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 space-y-4 pt-0">
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
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const Data = [
  {
    title: "Library Management Sytem",
    description: "An application to automate and streamline the management of books, users and transactions in a library, aimed at improving overall library operations",
    technologies: ["HTML", "JavaScript", "React.js", "Node.js", "Express.js", "MongoDB Atlas", "Redux Toolkit", "Tailwind CSS"],
    githubUrl: "https://github.com/sky33-git/Library_Management",
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
    case "Featured": return "bg-yellow-500 text-yellow-900";
    case "UI Develop": return "bg-green-500 text-green-900";
    case "Open Source": return "bg-blue-500 text-blue-900";
    default: return "bg-gray-200 text-gray-800";
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case "Featured": return Award;
    case "UI Develop": return Shield;
    case "Open Source": return Code2;
    default: return Star;
  }
};