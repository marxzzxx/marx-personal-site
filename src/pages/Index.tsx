import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Youtube, Twitter, Instagram, Mail, ArrowUpRight, Infinity } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";

const Index = () => {
  const { theme } = useTheme();

  const links = [
    {
      id: 1,
      title: "E-mail list",
      description: "Receive emails with valuable knowledge templates and more",
      icon: <Mail className="w-8 h-8" />,
      action: "Sign up",
      url: "#",
    },
    {
      id: 2,
      title: "Digital Experience",
      description: "Tap into the future of digital experiences",
      icon: <ArrowUpRight className="w-8 h-8" />,
      action: "Learn more",
      url: "#",
    },
    {
      id: 3,
      title: "My Projects",
      description: "Access all my latest projects and case studies",
      icon: <Infinity className="w-8 h-8" />,
      action: "Learn more",
      url: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <span className="text-lg font-light tracking-wide">studio</span>
          <ModeToggle />
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-3xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <img 
              src={theme === 'dark' ? '/lovable-uploads/31574149-1e00-4568-933a-bb1d14979087.png' : '/lovable-uploads/03a418b9-3acc-42af-91f2-7b4e757aa9ac.png'} 
              alt="Logo" 
              className="w-12 h-12 mx-auto mb-8 transition-all duration-300"
            />
            <h1 className="text-4xl md:text-5xl font-light leading-tight tracking-tight mb-12">
              I build cool companies,
              <br />
              with cool people.
            </h1>

            {/* Social Links */}
            <div className="flex justify-center gap-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          {/* Links Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {links.map((link) => (
              <motion.a
                key={link.id}
                href={link.url}
                className="block group"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="text-primary">{link.icon}</div>
                      <div>
                        <h3 className="text-lg font-medium mb-1">{link.title}</h3>
                        <p className="text-sm text-muted-foreground">{link.description}</p>
                      </div>
                    </div>
                    <Button variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      {link.action}
                    </Button>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
        <p>© 2024 Studio. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;