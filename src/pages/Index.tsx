import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Index = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-premium-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-20 md:pt-40 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="inline-block px-4 py-1 mb-6 text-sm font-medium bg-premium-200 text-premium-700 rounded-full">
            Welcome to the future
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-premium-900 mb-6 tracking-tight">
            Design that inspires.
            <br />
            Technology that delivers.
          </h1>
          <p className="text-lg md:text-xl text-premium-600 mb-8 leading-relaxed">
            Experience the perfect blend of form and function, crafted with precision and care for those who appreciate the finest details.
          </p>
          <button className="px-8 py-4 bg-premium-900 text-white rounded-lg hover:bg-premium-800 transition-colors duration-200 shadow-lg">
            Get Started
          </button>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Thoughtful Design",
              description: "Every pixel crafted with purpose and intention.",
            },
            {
              title: "Premium Quality",
              description: "Uncompromising attention to detail in every aspect.",
            },
            {
              title: "Future Ready",
              description: "Built for tomorrow's challenges and opportunities.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="reveal opacity-0 p-8 rounded-2xl bg-white shadow-[0_0_50px_rgba(0,0,0,0.03)] hover:shadow-[0_0_50px_rgba(0,0,0,0.06)] transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-premium-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-premium-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="reveal opacity-0 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-premium-900 mb-6">
            Ready to experience excellence?
          </h2>
          <p className="text-lg text-premium-600 mb-8">
            Join us in creating something extraordinary. Your journey towards exceptional design starts here.
          </p>
          <button className="px-8 py-4 bg-premium-900 text-white rounded-lg hover:bg-premium-800 transition-colors duration-200 shadow-lg">
            Start Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Index;