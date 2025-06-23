// import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/utils/Card";
import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export function Contact() {
  return (
    <section id="contact" className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
          Get In Touch
        </h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground text-lg">
          Looking for new opportunities and collaborations. Let&apos;s connect!
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid gap-6 sm:gap-8 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>
              Feel free to reach out through any of these channels
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MailIcon className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Email</p>
                  <a
                    href="mailto:yashbhangale9@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    sunilsks2017@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <PhoneIcon className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Phone</p>
                  <a
                    href="tel:+918807563513"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 8807563513
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MapPinIcon className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">Bengaluru- KA, India</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Let&apos;s Work Together</CardTitle>
            <CardDescription>
              Interested in collaborating or got a project in your mind?
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <p className="text-muted-foreground">
              I&npos;m seeking challenging full-stack development roles leveraging
              my experience in building dynamic web applications.
              My projects demonstrate expertise in React, Redux, Tailwind CSS for engaging UIs and Node.js/Express.js with MongoDB for scalable backends.
              Im proficient in REST APIs, data management and user-centric design.
              I am eager to contribute to innovative teams and solve complex problems with code.
            </p>

            <div className="space-y-4">
              <button className="border-2 h-10 bg-white w-full text-black" >
                <a href="mailto:sunilsks2017@gmail.com"
                className="flex justify-center items-center hover:text-gray-600"
                >
                  <MailIcon className="mr-2 h-auto w-auto" />
                  Send me an email
                </a>
              </button>

              <div className="flex flex-wrap gap-2 justify-center">
                <button className="mx-3">
                  <a href="https://github.com/sky33-git" target="_blank" rel="noopener noreferrer"
                    className="border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50"
                  >
                    <GitHubLogoIcon className="h-6 w-6" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </button>

                <button
                className="mx-3"
                >
                  <a
                    className="border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50"
                    href="https://linkedin.com/in/sunil-s-7b5377242" target="_blank" rel="noopener noreferrer">
                    <LinkedInLogoIcon className="h-6 w-6" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </button>

                <button
                className="mx-3"
                >
                  <a
                    className="border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50"
                    href="tel:+918807563513">
                    <PhoneIcon className="h-6 w-6" />
                    <span className="sr-only">Phone</span>
                  </a>
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="text-center mt-12 pt-8 border-t">
        <p className="text-muted-foreground">
          © 2025 Sunil, Built with Next.js.
        </p>
      </div>
    </section>
  );
} 