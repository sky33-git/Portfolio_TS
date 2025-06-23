import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/utils/Card";

const certifications = [
  { name: "MERN Full Stack Developer", description: "", issuer: "JSPIDERS- Hebbal,KA" },
  { name: "Looker Bi", description: "Data manipulations, Data management", issuer: "IZT Technology" },
  { name: "Power Bi", description: "Dashboards, SQL", issuer: "IZT Technology" },
  { name: "SQL", description: "QUICK ONE MONTH PROGRAM", issuer: "College Internship" }
]

export function Experience() {
  return (
    <section id="experience" className="container mx-auto px-4 py-16">
    
      <div className="max-w-5xl mx-auto mt-16">
        <Card className="bg-gradient-to-r from-primary/5 via-purple-500/5 to-primary/5 border-0">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Certifications & Learning</CardTitle>
            <CardDescription>
              Continuous learning and professional development in cloud technologies
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="text-center p-4 hover:shadow-md transition-shadow">
                  <div className="space-y-2">
                    <div className="text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground">
                      {cert.name}
                    </div>
                    <p className="text-sm font-medium">{cert.description}</p>
                    <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                  </div>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

    </section>
  )
} 