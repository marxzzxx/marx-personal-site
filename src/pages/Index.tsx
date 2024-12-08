import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const Index = () => {
  const projects = [
    {
      id: 1,
      title: "Digital Experience",
      description: "Creating seamless digital experiences through innovative design and development",
      url: "https://example.com/project1",
    },
    {
      id: 2,
      title: "Brand Identity",
      description: "Crafting unique and memorable brand identities that stand out",
      url: "https://example.com/project2",
    },
    {
      id: 3,
      title: "Web Applications",
      description: "Building robust and scalable web applications for modern businesses",
      url: "https://example.com/project3",
    },
    {
      id: 4,
      title: "Interactive Design",
      description: "Designing engaging interactive experiences that captivate users",
      url: "https://example.com/project4",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <span className="text-xl font-medium">blank.</span>
          <Button variant="ghost">Contact</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-[clamp(2.5rem,8vw,4.5rem)] font-light leading-tight tracking-tight text-neutral-900 mb-8">
              We create digital experiences that matter
            </h1>
            <p className="text-lg text-neutral-600 max-w-xl">
              A creative studio focused on design, development, and digital innovation. We transform ideas into exceptional digital experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {projects.map((project) => (
              <motion.a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
                whileHover={{ scale: 0.995 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white border rounded-lg overflow-hidden flex flex-col md:flex-row">
                  <div className="w-full md:w-1/2 aspect-[4/3] bg-neutral-100 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm text-neutral-400">Project Image</span>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-light mb-4">{project.title}</h3>
                      <p className="text-neutral-600">{project.description}</p>
                    </div>
                    <div className="mt-6 flex items-center text-sm text-neutral-900 font-medium">
                      View Project
                      <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-light mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Design",
                  description: "Creating meaningful and intuitive user experiences",
                },
                {
                  title: "Development",
                  description: "Building robust and scalable digital solutions",
                },
                {
                  title: "Strategy",
                  description: "Crafting digital strategies that drive growth",
                },
              ].map((service, index) => (
                <div key={index} className="space-y-4">
                  <h3 className="text-xl font-medium">{service.title}</h3>
                  <p className="text-neutral-600">{service.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <span className="text-xl font-medium">blank.</span>
            <div className="flex gap-8 text-sm text-neutral-600">
              <a href="#" className="hover:text-neutral-900 transition-colors">Instagram</a>
              <a href="#" className="hover:text-neutral-900 transition-colors">Twitter</a>
              <a href="#" className="hover:text-neutral-900 transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;