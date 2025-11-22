import { motion } from "framer-motion";
import { ArrowRight, Target, Users, Award, TrendingUp, Heart, Shield, Zap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLocation } from "wouter";
import { useEffect } from "react";

export default function About() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    document.title = "About Us - Airavoto Gaming | Leading Gaming Center Management Solutions";
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-chart-1/10 via-chart-2/10 to-background"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              About <span className="bg-gradient-to-r from-chart-1 to-chart-2 bg-clip-text text-transparent">Airavoto Gaming</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Empowering gaming centers across India with innovative technology and comprehensive management solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-chart-1 to-chart-2 flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold">Our Mission</h2>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To revolutionize the gaming center industry by providing cutting-edge, all-in-one management solutions that simplify operations, enhance customer experiences, and drive business growth for gaming entrepreneurs across India.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-chart-2 to-chart-1 flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold">Our Vision</h2>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To become India's most trusted gaming center management platform, enabling thousands of gaming businesses to thrive through innovative technology, exceptional support, and continuous innovation in the gaming entertainment sector.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-muted/20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-chart-1 to-chart-2 mx-auto mb-8"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              Airavoto Gaming was born from a simple observation: gaming centers across India were struggling with outdated management systems, fragmented tools, and inefficient operations that held them back from reaching their full potential.
            </p>
            <p>
              Our founders, passionate gamers and technology enthusiasts themselves, recognized the need for a comprehensive, modern solution tailored specifically for the Indian gaming center market. They set out to create a platform that would not only solve operational challenges but also empower gaming entrepreneurs to focus on what they do best—creating amazing gaming experiences for their customers.
            </p>
            <p>
              Today, Airavoto Gaming stands as a testament to that vision. We've built a powerful, all-in-one platform that manages everything from real-time session tracking and smart booking systems to inventory control and financial oversight. Our solution is proudly Made in India, designed with deep understanding of the local market, and continuously evolved based on feedback from gaming center owners across the country.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at Airavoto Gaming
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: "Innovation",
                description: "Continuously pushing boundaries to deliver cutting-edge solutions that keep you ahead of the curve"
              },
              {
                icon: Users,
                title: "Customer First",
                description: "Your success is our success. We're committed to providing exceptional support and solutions"
              },
              {
                icon: Shield,
                title: "Reliability",
                description: "Building robust, secure systems you can depend on for your daily operations"
              },
              {
                icon: Heart,
                title: "Passion",
                description: "We love gaming and technology, and it shows in everything we create"
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover-elevate">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-chart-1/20 to-chart-2/20 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-chart-1" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Airavoto Gaming?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're more than just a software provider—we're your partner in success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Made in India, For India",
                description: "Built with deep understanding of the Indian gaming market, local needs, and business practices"
              },
              {
                icon: Award,
                title: "Comprehensive Solution",
                description: "Everything you need in one platform—no need for multiple tools or systems"
              },
              {
                icon: Users,
                title: "Dedicated Support",
                description: "Our team is always ready to help you succeed with responsive, knowledgeable support"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-chart-1 to-chart-2 flex items-center justify-center mb-4">
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Ready to Transform Your <span className="bg-gradient-to-r from-chart-1 to-chart-2 bg-clip-text text-transparent">Gaming Center</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Join the growing community of gaming centers that trust Airavoto Gaming to power their success
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="rounded-full px-8"
                onClick={() => setLocation("/")}
                data-testid="button-get-started"
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="rounded-full px-8"
                onClick={() => window.open('https://demotestposairavoto.onrender.com/', '_blank')}
                data-testid="button-view-demo"
              >
                View Live Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
