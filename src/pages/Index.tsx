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
      year: "2024",
    },
    {
      id: 2,
      title: "Brand Identity",
      description: "Crafting unique and memorable brand identities that stand out",
      url: "https://example.com/project2",
      year: "2023",
    },
    {
      id: 3,
      title: "Web Applications",
      description: "Building robust and scalable web applications for modern businesses",
      url: "https://example.com/project3",
      year: "2023",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <span className="text-lg font-light tracking-wide">studio</span>
          <Button variant="ghost" className="text-sm font-light tracking-wide">Contact</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-48 pb-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-[clamp(2rem,5vw,3rem)] font-light leading-tight tracking-tight text-neutral-900 mb-8">
              A creative studio focused on crafting meaningful digital experiences through thoughtful design and development.
            </h1>
            <p className="text-base text-neutral-600 font-light tracking-wide">
              Based in the digital realm, delivering worldwide
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-px"
          >
            {projects.map((project) => (
              <motion.a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group border-t last:border-b border-neutral-200"
                whileHover={{ backgroundColor: "#f8f8f8" }}
                transition={{ duration: 0.2 }}
              >
                <div className="py-8 flex items-center justify-between">
                  <div className="space-y-2">
                    <h3 className="text-lg font-light tracking-wide">{project.title}</h3>
                    <p className="text-sm text-neutral-500 font-light tracking-wide">{project.description}</p>
                  </div>
                  <div className="flex items-center gap-8">
                    <span className="text-sm text-neutral-400 font-light">{project.year}</span>
                    <ArrowUpRight className="w-5 h-5 text-neutral-400 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-2xl font-light tracking-wide">Our Approach</h2>
            <p className="text-base text-neutral-600 font-light leading-relaxed tracking-wide">
              We believe in the power of minimalism and purposeful design. Every project is an opportunity to create something meaningful that resonates with its audience while maintaining simplicity and elegance.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <span className="text-sm font-light tracking-wide text-neutral-500">© 2024 Studio. All rights reserved.</span>
            <div className="flex gap-8">
              <a href="#" className="text-sm font-light tracking-wide text-neutral-500 hover:text-neutral-900 transition-colors">Instagram</a>
              <a href="#" className="text-sm font-light tracking-wide text-neutral-500 hover:text-neutral-900 transition-colors">Twitter</a>
              <a href="#" className="text-sm font-light tracking-wide text-neutral-500 hover:text-neutral-900 transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;