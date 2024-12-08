import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Index = () => {
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

      {/* Projects Grid */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="group relative aspect-[4/3] bg-neutral-100 overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm text-neutral-400">Project {item}</span>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
              </div>
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