
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/utils/Card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/utils/Tabs";

const skillCategories = {
  frontend: [
    "Next.js", "React.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", ",GSAP", "Responsive Design", "Web3 APIs", "Smart Contracts"
  ],
  backend: [
    "Node.js", "Express.js", "PowerShell", "Bash", "REST APIs", "Microservices", "System Architecture"
  ],
  databases: [
    "MongoDB", "SQL", "Database Design", "Data Modeling",
    "Query Optimization", "Backup Strategies", "Performance Tuning"
  ],
  cloud: [
    "AWS", "Cloud Architecture", "Auto Scaling", "Load Balancing", "Monitoring"
  ],
  tools: [
    "Git/Github", "Postman", "JIRA", "CRM Tools", "Figma"
  ]
};

export function Skills() {
  return (
    <section id="skills" className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <div className="mx-auto w-45 opacity-30 px-4 py-2 my-4 text-foreground flex justify-center items-center border rounded-2xl [a&]:hover:bg-accent [a&]:hover:text-accent-foreground">
          Technical Expertise
        </div>

        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
          Skills & Technologies
        </h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground text-lg">
          Comprehensive expertise in Frontend and Backend technologies with modern development practices
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <Tabs defaultValue="frontend" className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 h-auto">
            <TabsTrigger value="frontend" className="cursor-pointer text-xs sm:text-sm">Frontend</TabsTrigger>
            <TabsTrigger value="backend" className="cursor-pointer text-xs sm:text-sm">Backend</TabsTrigger>
            <TabsTrigger value="databases" className="cursor-pointer text-xs sm:text-sm">Databases</TabsTrigger>
            <TabsTrigger value="tools" className="cursor-pointer text-xs sm:text-sm">Tools</TabsTrigger>
          </TabsList>

          <TabsContent value="frontend">
            <Card>
              <CardHeader>
                <CardTitle>Frontend Development</CardTitle>
                <CardDescription>
                  Modern web technologies for building responsive and interactive user interfaces
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillCategories.frontend.map((skill) => (
                    <div key={skill} className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300">
                      {skill}
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold mb-2">Notable Implementations:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Library Management System</li>
                    <li>• Swiggy clone - MERN Project</li>
                    <li>• NFT marketplace optimization - 70% reduction in redundant API calls(Freelance)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="backend">
            <Card>
              <CardHeader>
                <CardTitle>Backend Development</CardTitle>
                <CardDescription>
                  Server-side programming, scripting and system administration expertise
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillCategories.backend.map((skill) => (
                    <div key={skill} className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300">
                      {skill}
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold mb-2">Key Projects:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• My backend expertise includes building scalable applications with Node.js and Express.js, alongside proficiency in PowerShell and Bash for scripting and automation. I design and implement robust REST APIs and Microservices, applying strong principles of System Architecture to build efficient and interconnected solutions</li>
                    <li>• API performance optimization - Reduced response time from 3s to 350ms</li>
                    <li>• Smart contract optimization - 20% reduction in gas fees</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="databases">
            <Card>
              <CardHeader>
                <CardTitle>Database Technologies</CardTitle>
                <CardDescription>
                  Relational and NoSQL databases with focus on performance and scalability
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillCategories.databases.map((skill) => (
                    <div key={skill} className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300">
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tools">
            <Card>
              <CardHeader>
                <CardTitle>Development Tools & Platforms</CardTitle>
                <CardDescription>
                  Essential tools and platforms that enhance development workflow and productivity
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillCategories.tools.map((skill) => (
                    <div key={skill} className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300">
                      {skill}
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold mb-2">Platform Deployments:</h4>
                  <p className="text-sm text-muted-foreground">
                    My technical toolkit includes Git/GitHub for robust version control, Postman for API development and testing, and JIRA for agile project management. I also leverage CRM tools for customer insights and Figma for UI/UX design and prototyping, ensuring comprehensive project execution.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

        </Tabs>

        <Card className="mt-8 bg-gradient-to-r from-primary/5 via-purple-500/5 to-primary/5 border-0">
          <CardContent className="p-6">
            <div className="text-center space-y-4">
              <h3 className="text-xl font-bold">Professional Summary</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div className="space-y-2">
                  <h4 className="font-semibold">Focus Areas</h4>
                  <p className="text-muted-foreground">Frontend Development, MERN Full Stack, Backend Development</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Experience</h4>
                  <p className="text-muted-foreground">Multiple project deployments</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Certifications</h4>
                  <p className="text-muted-foreground">MERN Full Stack Developer & LOOKER/POWER BI</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
} 