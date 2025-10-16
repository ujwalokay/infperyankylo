import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { motion } from "framer-motion";
import { 
  Mail, 
  ArrowRight,
  MonitorPlay,
  CalendarCheck,
  ShoppingCart,
  DollarSign,
  Clock,
  Database,
  BarChart3,
  CheckCircle2,
  Shield,
  Zap,
  TrendingUp,
  Users
} from "lucide-react";

import browserTabsImage from "@assets/generated_images/Browser_interface_with_sidebar_tabs_328237be.png";

export default function Home() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const signupMutation = useMutation({
    mutationFn: async (email: string) => {
      return await apiRequest("POST", "/api/email-signup", { email });
    },
    onSuccess: () => {
      toast({
        title: "Thank you for your interest!",
        description: "We'll contact you soon about Ankylo Gaming POS.",
      });
      setEmail("");
    },
    onError: (error: any) => {
      const errorMessage = error.message || "Failed to sign up. Please try again.";
      toast({
        title: "Signup failed",
        description: errorMessage,
        variant: "destructive",
      });
    },
  });

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    signupMutation.mutate(email);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const fadeInDown = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <motion.nav 
        initial="initial"
        animate="animate"
        variants={fadeInDown}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/95 border-b border-border/40"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-chart-1 to-chart-2 flex items-center justify-center">
                <MonitorPlay className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-foreground">Ankylo Gaming POS</span>
            </div>
            
            <Button size="lg" className="rounded-full px-8" data-testid="button-contact">
              Contact Us
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 bg-lines">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight" 
              data-testid="text-hero-heading"
            >
              Simplify, Manage, and Grow Your Gaming Center with Ankylo
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed" 
              data-testid="text-hero-description"
            >
              Ankylo Gaming POS is a complete management system that helps gaming centers streamline operations, track sessions, and boost revenue with smart digital solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button 
                size="lg" 
                className="rounded-full px-10 py-6 text-lg bg-gradient-to-r from-chart-1 to-chart-2 hover:opacity-90"
                data-testid="button-explore-features"
              >
                Explore Our Features
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 mx-auto max-w-6xl" 
            data-testid="image-hero-screenshot"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border/50">
              <img 
                src={browserTabsImage} 
                alt="Ankylo Gaming POS Dashboard"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 md:py-32 relative bg-lines" id="features">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              We Build Digital Solutions That Drive Growth
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 lg:gap-20">
            {/* Session Management */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
              data-testid="card-feature-sessions"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-chart-1/10 to-chart-2/10 flex items-center justify-center">
                <MonitorPlay className="w-8 h-8 text-chart-1" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">Real-time Session Management</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Track gaming sessions across PC, consoles, VR, and simulators with live countdown timers, automatic status updates, and flexible pause/resume functionality. Monitor all activities in real-time with visual and audio alerts.
              </p>
              <div className="rounded-2xl overflow-hidden border border-border/50">
                <img 
                  src={browserTabsImage} 
                  alt="Session Management Dashboard"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            {/* Booking Management */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
              data-testid="card-feature-booking"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-chart-2/10 to-chart-3/10 flex items-center justify-center">
                <CalendarCheck className="w-8 h-8 text-chart-2" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">Streamlined Booking Management</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Handle walk-in and advance bookings with intelligent conflict detection and instant seat allocation. Process bulk bookings for events and parties, ensuring smooth customer flow and efficient resource utilization.
              </p>
              <div className="rounded-2xl overflow-hidden border border-border/50">
                <img 
                  src={browserTabsImage} 
                  alt="Booking Management System"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            {/* Inventory Control */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
              data-testid="card-feature-inventory"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-chart-3/10 to-chart-4/10 flex items-center justify-center">
                <ShoppingCart className="w-8 h-8 text-chart-3" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">Food & Inventory Solutions</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Manage food and beverage sales seamlessly with dynamic pricing, real-time order tracking, and comprehensive inventory control. Integrate orders directly with bookings and track revenue analytics for F&B operations.
              </p>
              <div className="rounded-2xl overflow-hidden border border-border/50">
                <img 
                  src={browserTabsImage} 
                  alt="Inventory Control Dashboard"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            {/* Financial Management */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
              data-testid="card-feature-financial"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-chart-4/10 to-chart-1/10 flex items-center justify-center">
                <DollarSign className="w-8 h-8 text-chart-4" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">Comprehensive Financial Management</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Gain clear insights into your center's finances with detailed expense tracking, category-wise reporting, and flexible export capabilities. Track revenue, manage expenses, and make data-driven decisions with monthly and quarterly summaries.
              </p>
              <div className="rounded-2xl overflow-hidden border border-border/50">
                <img 
                  src={browserTabsImage} 
                  alt="Financial Management Dashboard"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-20"
          >
            <Button 
              size="lg" 
              className="rounded-full px-10 py-6 text-lg bg-gradient-to-r from-chart-1 to-chart-2 hover:opacity-90"
              data-testid="button-explore-all-features"
            >
              Explore All Features
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Comprehensive Gaming Center Management
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              All the tools you need to run a successful gaming center — smart, simple, and powerful.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
              data-testid="card-benefit-tracking"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-chart-1/10 to-chart-2/10 flex items-center justify-center">
                <Clock className="w-7 h-7 text-chart-1" />
              </div>
              <h3 className="text-xl font-bold">Precise Session Tracking</h3>
              <p className="text-muted-foreground leading-relaxed">
                Accurate countdown timers with visual and audio alerts ensure billing accuracy and customer satisfaction.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
              data-testid="card-benefit-analytics"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-chart-2/10 to-chart-3/10 flex items-center justify-center">
                <BarChart3 className="w-7 h-7 text-chart-2" />
              </div>
              <h3 className="text-xl font-bold">Smart Financial Insights</h3>
              <p className="text-muted-foreground leading-relaxed">
                Get real-time analytics on revenue, expenses, and profitability to make informed business decisions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
              data-testid="card-benefit-automation"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-chart-3/10 to-chart-4/10 flex items-center justify-center">
                <Zap className="w-7 h-7 text-chart-3" />
              </div>
              <h3 className="text-xl font-bold">Automated Operations</h3>
              <p className="text-muted-foreground leading-relaxed">
                Streamline workflows with automated billing, inventory updates, and session management.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
              data-testid="card-benefit-security"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-chart-4/10 to-chart-1/10 flex items-center justify-center">
                <Shield className="w-7 h-7 text-chart-4" />
              </div>
              <h3 className="text-xl font-bold">Robust Security</h3>
              <p className="text-muted-foreground leading-relaxed">
                Role-based access control and secure data management protect your critical business information.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
              data-testid="card-benefit-multi-device"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-chart-1/10 to-chart-3/10 flex items-center justify-center">
                <Database className="w-7 h-7 text-chart-1" />
              </div>
              <h3 className="text-xl font-bold">Multi-Device Support</h3>
              <p className="text-muted-foreground leading-relaxed">
                Manage PC, PlayStation, Xbox, VR systems, and simulators all from one unified dashboard.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-4"
              data-testid="card-benefit-customer"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-chart-2/10 to-chart-4/10 flex items-center justify-center">
                <Users className="w-7 h-7 text-chart-2" />
              </div>
              <h3 className="text-xl font-bold">Customer Management</h3>
              <p className="text-muted-foreground leading-relaxed">
                Build customer profiles, track visit history, and create loyalty programs to boost retention.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 md:py-40 bg-lines">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              Ready to Transform Your Gaming Center?
            </h2>
            <Button 
              size="lg" 
              className="rounded-full px-12 py-7 text-xl bg-gradient-to-r from-chart-1 to-chart-2 hover:opacity-90"
              data-testid="button-check-plans"
            >
              Check Our Plans
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-muted/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-chart-1 to-chart-2 flex items-center justify-center">
                  <MonitorPlay className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">Ankylo</span>
              </div>
              <p className="text-muted-foreground">
                From idea to launch — we build your gaming center's digital presence.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Features</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Session Management</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Booking System</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Inventory Control</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Financial Reports</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Links</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Career</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">+123 456 789</a></li>
                <li><a href="mailto:support@ankylo.com" className="hover:text-foreground transition-colors">support@ankylo.com</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              Powered by Ankylo Gaming POS
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
