import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { 
  Mail, 
  ArrowRight,
  MonitorPlay,
  CalendarCheck,
  ShoppingCart,
  Clock,
  Database,
  BarChart3,
  CheckCircle2,
  Shield,
  Zap,
  TrendingUp,
  Users,
  FileText,
  MessageCircle,
  PlayCircle,
  XCircle
} from "lucide-react";

import heroMockupImage from "@assets/Gemini_Generated_Image_vj8lztvj8lztvj8l-removebg-preview (1)_1761391160296.png";
import ankyloLogo from "@assets/WhatsApp_Image_2025-10-10_at_18.36.58_1fb5438e-removebg-preview_1760631104312.png";

export default function Home() {
  const [email, setEmail] = useState("");
  const [contactDialogOpen, setContactDialogOpen] = useState(false);
  const { toast } = useToast();
  const [, setLocation] = useLocation();

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
            <div className="flex items-center gap-2 md:gap-3">
              <img 
                src={ankyloLogo} 
                alt="Ankylo Logo" 
                className="w-10 h-10 md:w-12 md:h-12"
              />
              <span className="text-lg md:text-2xl font-bold text-foreground hidden sm:inline">Ankylo Gaming POS</span>
              <span className="text-lg font-bold text-foreground sm:hidden">Ankylo</span>
            </div>
            
            <Dialog open={contactDialogOpen} onOpenChange={setContactDialogOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="rounded-full px-4 md:px-8" data-testid="button-contact">
                  <span className="hidden sm:inline">Contact Us</span>
                  <span className="sm:hidden">Contact</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Contact Us</DialogTitle>
                  <DialogDescription>
                    Choose your preferred way to get in touch with us
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <Button
                    onClick={() => {
                      window.open('https://forms.gle/your-google-form-id', '_blank');
                      setContactDialogOpen(false);
                    }}
                    className="w-full justify-start gap-3 h-auto py-4"
                    variant="outline"
                    data-testid="button-google-form"
                  >
                    <FileText className="w-5 h-5" />
                    <div className="text-left">
                      <div className="font-semibold">Fill Google Form</div>
                      <div className="text-sm text-muted-foreground">Share your requirements with us</div>
                    </div>
                  </Button>
                  
                  <Button
                    onClick={() => {
                      window.open('https://wa.me/your-number', '_blank');
                      setContactDialogOpen(false);
                    }}
                    className="w-full justify-start gap-3 h-auto py-4 bg-green-600 hover:bg-green-700 text-white"
                    data-testid="button-whatsapp"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <div className="text-left">
                      <div className="font-semibold">Chat on WhatsApp</div>
                      <div className="text-sm text-green-100">Get instant support</div>
                    </div>
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 bg-lines">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/10 to-green-500/10 border border-orange-500/20"
              data-testid="badge-made-in-india"
            >
              <span className="text-2xl">🇮🇳</span>
              <span className="text-sm md:text-base font-semibold bg-gradient-to-r from-orange-500 to-green-600 bg-clip-text text-transparent">
                Proudly Made in India
              </span>
            </motion.div>
            
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
              Real-time session management, streamlined booking management, food inventory solutions, and complete financial management — all in one powerful platform.
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
                onClick={() => setLocation("/features")}
              >
                Explore Our Features
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </div>

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
                <TrendingUp className="w-8 h-8 text-chart-4" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">Comprehensive Financial Management</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Gain clear insights into your center's finances with detailed expense tracking, category-wise reporting, and flexible export capabilities. Track revenue, manage expenses, and make data-driven decisions with monthly and quarterly summaries.
              </p>
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
              onClick={() => setLocation("/features")}
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

      {/* Comparison Section */}
      <section className="py-24 md:py-32 bg-lines">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Why Choose Ankylo Gaming POS?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how we compare to other gaming center management solutions
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-6xl mx-auto"
          >
            <div className="rounded-3xl border border-border/50 bg-card/50 backdrop-blur overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full" data-testid="table-comparison">
                  <thead>
                    <tr className="border-b border-border/50">
                      <th className="text-left p-6 font-bold text-lg md:text-xl">Feature</th>
                      <th className="text-center p-6 font-bold text-lg md:text-xl bg-gradient-to-br from-chart-1/10 to-chart-2/10">
                        Ankylo Gaming POS
                      </th>
                      <th className="text-center p-6 font-bold text-lg md:text-xl">Pancafe Pro</th>
                      <th className="text-center p-6 font-bold text-lg md:text-xl">Excel Sheet</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/50" data-testid="row-comparison-realtime">
                      <td className="p-6 font-medium">Real-time Session Tracking</td>
                      <td className="p-6 text-center bg-gradient-to-br from-chart-1/5 to-chart-2/5">
                        <CheckCircle2 className="w-6 h-6 text-chart-1 mx-auto" />
                      </td>
                      <td className="p-6 text-center">
                        <CheckCircle2 className="w-6 h-6 text-muted-foreground mx-auto" />
                      </td>
                      <td className="p-6 text-center">
                        <span className="text-2xl text-muted-foreground">✗</span>
                      </td>
                    </tr>

                    <tr className="border-b border-border/50" data-testid="row-comparison-automation">
                      <td className="p-6 font-medium">Automated Billing & Invoicing</td>
                      <td className="p-6 text-center bg-gradient-to-br from-chart-1/5 to-chart-2/5">
                        <CheckCircle2 className="w-6 h-6 text-chart-1 mx-auto" />
                      </td>
                      <td className="p-6 text-center">
                        <CheckCircle2 className="w-6 h-6 text-muted-foreground mx-auto" />
                      </td>
                      <td className="p-6 text-center">
                        <span className="text-2xl text-muted-foreground">✗</span>
                      </td>
                    </tr>

                    <tr className="border-b border-border/50" data-testid="row-comparison-inventory">
                      <td className="p-6 font-medium">Food & Beverage Management</td>
                      <td className="p-6 text-center bg-gradient-to-br from-chart-1/5 to-chart-2/5">
                        <CheckCircle2 className="w-6 h-6 text-chart-1 mx-auto" />
                      </td>
                      <td className="p-6 text-center">
                        <span className="text-2xl text-muted-foreground">✗</span>
                      </td>
                      <td className="p-6 text-center">
                        <span className="text-muted-foreground text-sm">Manual Only</span>
                      </td>
                    </tr>

                    <tr className="border-b border-border/50" data-testid="row-comparison-analytics">
                      <td className="p-6 font-medium">Advanced Analytics & Reports</td>
                      <td className="p-6 text-center bg-gradient-to-br from-chart-1/5 to-chart-2/5">
                        <CheckCircle2 className="w-6 h-6 text-chart-1 mx-auto" />
                      </td>
                      <td className="p-6 text-center">
                        <span className="text-muted-foreground text-sm">Basic</span>
                      </td>
                      <td className="p-6 text-center">
                        <span className="text-muted-foreground text-sm">Manual Calculations</span>
                      </td>
                    </tr>

                    <tr className="border-b border-border/50" data-testid="row-comparison-booking">
                      <td className="p-6 font-medium">Advanced Booking System</td>
                      <td className="p-6 text-center bg-gradient-to-br from-chart-1/5 to-chart-2/5">
                        <CheckCircle2 className="w-6 h-6 text-chart-1 mx-auto" />
                      </td>
                      <td className="p-6 text-center">
                        <span className="text-muted-foreground text-sm">Basic</span>
                      </td>
                      <td className="p-6 text-center">
                        <span className="text-2xl text-muted-foreground">✗</span>
                      </td>
                    </tr>

                    <tr className="border-b border-border/50" data-testid="row-comparison-multidevice">
                      <td className="p-6 font-medium">Multi-Device Support (PC, PS5, Xbox, VR)</td>
                      <td className="p-6 text-center bg-gradient-to-br from-chart-1/5 to-chart-2/5">
                        <CheckCircle2 className="w-6 h-6 text-chart-1 mx-auto" />
                      </td>
                      <td className="p-6 text-center">
                        <CheckCircle2 className="w-6 h-6 text-muted-foreground mx-auto" />
                      </td>
                      <td className="p-6 text-center">
                        <span className="text-muted-foreground text-sm">Manual Only</span>
                      </td>
                    </tr>

                    <tr className="border-b border-border/50" data-testid="row-comparison-customer">
                      <td className="p-6 font-medium">Customer Management & Loyalty</td>
                      <td className="p-6 text-center bg-gradient-to-br from-chart-1/5 to-chart-2/5">
                        <CheckCircle2 className="w-6 h-6 text-chart-1 mx-auto" />
                      </td>
                      <td className="p-6 text-center">
                        <span className="text-muted-foreground text-sm">Limited</span>
                      </td>
                      <td className="p-6 text-center">
                        <span className="text-2xl text-muted-foreground">✗</span>
                      </td>
                    </tr>

                    <tr className="border-b border-border/50" data-testid="row-comparison-expense">
                      <td className="p-6 font-medium">Expense Tracking</td>
                      <td className="p-6 text-center bg-gradient-to-br from-chart-1/5 to-chart-2/5">
                        <CheckCircle2 className="w-6 h-6 text-chart-1 mx-auto" />
                      </td>
                      <td className="p-6 text-center">
                        <span className="text-2xl text-muted-foreground">✗</span>
                      </td>
                      <td className="p-6 text-center">
                        <span className="text-muted-foreground text-sm">Manual Only</span>
                      </td>
                    </tr>

                    <tr className="border-b border-border/50" data-testid="row-comparison-live">
                      <td className="p-6 font-medium">Live Availability Display</td>
                      <td className="p-6 text-center bg-gradient-to-br from-chart-1/5 to-chart-2/5">
                        <CheckCircle2 className="w-6 h-6 text-chart-1 mx-auto" />
                      </td>
                      <td className="p-6 text-center">
                        <span className="text-2xl text-muted-foreground">✗</span>
                      </td>
                      <td className="p-6 text-center">
                        <span className="text-2xl text-muted-foreground">✗</span>
                      </td>
                    </tr>

                    <tr className="border-b border-border/50" data-testid="row-comparison-alerts">
                      <td className="p-6 font-medium">Audio & Visual Alerts</td>
                      <td className="p-6 text-center bg-gradient-to-br from-chart-1/5 to-chart-2/5">
                        <CheckCircle2 className="w-6 h-6 text-chart-1 mx-auto" />
                      </td>
                      <td className="p-6 text-center">
                        <span className="text-muted-foreground text-sm">Basic</span>
                      </td>
                      <td className="p-6 text-center">
                        <span className="text-2xl text-muted-foreground">✗</span>
                      </td>
                    </tr>

                    <tr className="border-b border-border/50" data-testid="row-comparison-timeline">
                      <td className="p-6 font-medium">Timeline View & Scheduling</td>
                      <td className="p-6 text-center bg-gradient-to-br from-chart-1/5 to-chart-2/5">
                        <CheckCircle2 className="w-6 h-6 text-chart-1 mx-auto" />
                      </td>
                      <td className="p-6 text-center">
                        <span className="text-muted-foreground text-sm">Limited</span>
                      </td>
                      <td className="p-6 text-center">
                        <span className="text-2xl text-muted-foreground">✗</span>
                      </td>
                    </tr>

                    <tr className="border-b border-border/50" data-testid="row-comparison-role">
                      <td className="p-6 font-medium">Role-Based Access Control</td>
                      <td className="p-6 text-center bg-gradient-to-br from-chart-1/5 to-chart-2/5">
                        <CheckCircle2 className="w-6 h-6 text-chart-1 mx-auto" />
                      </td>
                      <td className="p-6 text-center">
                        <span className="text-muted-foreground text-sm">Limited</span>
                      </td>
                      <td className="p-6 text-center">
                        <span className="text-2xl text-muted-foreground">✗</span>
                      </td>
                    </tr>

                    <tr className="border-b border-border/50" data-testid="row-comparison-cloud">
                      <td className="p-6 font-medium">Cloud-Based & Multi-Location</td>
                      <td className="p-6 text-center bg-gradient-to-br from-chart-1/5 to-chart-2/5">
                        <CheckCircle2 className="w-6 h-6 text-chart-1 mx-auto" />
                      </td>
                      <td className="p-6 text-center">
                        <span className="text-muted-foreground text-sm">Local Only</span>
                      </td>
                      <td className="p-6 text-center">
                        <span className="text-muted-foreground text-sm">File Sharing</span>
                      </td>
                    </tr>

                    <tr data-testid="row-comparison-ease">
                      <td className="p-6 font-medium">Ease of Use</td>
                      <td className="p-6 text-center bg-gradient-to-br from-chart-1/5 to-chart-2/5">
                        <div className="flex items-center justify-center gap-1">
                          <span className="text-chart-1">★★★★★</span>
                        </div>
                      </td>
                      <td className="p-6 text-center">
                        <div className="flex items-center justify-center gap-1">
                          <span className="text-muted-foreground">★★★☆☆</span>
                        </div>
                      </td>
                      <td className="p-6 text-center">
                        <div className="flex items-center justify-center gap-1">
                          <span className="text-muted-foreground">★★☆☆☆</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-12"
            >
              <Button 
                size="lg" 
                className="rounded-full px-10 py-6 text-lg bg-gradient-to-r from-chart-1 to-chart-2 hover:opacity-90"
                data-testid="button-start-trial-comparison"
                onClick={() => setContactDialogOpen(true)}
              >
                Experience the Difference
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect plan for your gaming center
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* Free Trial Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative p-6 rounded-3xl border border-border/50 bg-card/50 backdrop-blur"
              data-testid="card-plan-trial"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Free Trial</h3>
                <p className="text-muted-foreground">Perfect to get started</p>
              </div>
              
              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold">Free</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">14 days trial period</p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-chart-1 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Full access to all features</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-chart-1 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Session & booking management</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-chart-1 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Basic support</span>
                </li>
              </ul>

              <Button 
                className="w-full rounded-full py-6 text-base" 
                variant="outline"
                data-testid="button-start-trial"
                onClick={() => setContactDialogOpen(true)}
              >
                Start Free Trial
              </Button>
            </motion.div>

            {/* Best Plan - ₹699 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative p-6 rounded-3xl border border-border/50 bg-card/50 backdrop-blur"
              data-testid="card-plan-best"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Best Plan</h3>
                <p className="text-muted-foreground">For single category cafes</p>
              </div>
              
              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold">₹699</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">Billed monthly</p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-chart-1 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Everything in Free Trial</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-chart-1 mt-0.5 flex-shrink-0" />
                  <span className="text-sm"><strong>Single category only</strong> (PS5 OR PC OR VR)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-chart-1 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Basic analytics & reports</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-chart-1 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Email support</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-muted-foreground/50 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground line-through">Live availability webpage</span>
                </li>
              </ul>

              <Button 
                className="w-full rounded-full py-6 text-base bg-gradient-to-r from-chart-1 to-chart-2 hover:opacity-90"
                data-testid="button-get-best"
                onClick={() => setLocation("/pricing-best")}
              >
                Get Started Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>

            {/* Pro Plan - ₹899 (MOST POPULAR) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative p-8 rounded-3xl border-2 border-chart-1 bg-gradient-to-br from-chart-1/20 via-chart-2/10 to-transparent backdrop-blur shadow-2xl shadow-chart-1/20 md:scale-105"
              data-testid="card-plan-pro"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="px-6 py-2 rounded-full bg-gradient-to-r from-chart-1 to-chart-2 text-sm font-bold text-white shadow-lg">
                  MOST POPULAR
                </span>
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-chart-1 to-chart-2 bg-clip-text text-transparent">Pro Plan</h3>
                <p className="text-muted-foreground font-semibold">Complete gaming center solution</p>
              </div>
              
              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold bg-gradient-to-r from-chart-1 to-chart-2 bg-clip-text text-transparent">₹899</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-sm text-chart-1 font-semibold mt-2">Best value for multi-category cafes</p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-chart-1 mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-semibold">ALL 12 Premium Features Included</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-chart-1 mt-0.5 flex-shrink-0" />
                  <span className="text-sm"><strong>All categories:</strong> PS5, PC, VR, Xbox & more</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-chart-1 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">AI Maintenance & Smart Predictions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-chart-1 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Complete Inventory Management</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-chart-1 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Advanced Analytics & Reports</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-chart-1 mt-0.5 flex-shrink-0" />
                  <span className="text-sm"><strong>Live Availability Webpage</strong> for customers</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-chart-1 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Priority 24/7 Support</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-chart-1 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Custom Branding & White Label</span>
                </li>
              </ul>

              <Button 
                className="w-full rounded-full py-6 text-lg font-bold bg-gradient-to-r from-chart-1 to-chart-2 hover:opacity-90 shadow-lg"
                data-testid="button-get-pro"
                onClick={() => setLocation("/pricing-pro")}
              >
                Get Started Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <p className="text-xs text-center text-muted-foreground mt-4">
                💎 Only ₹200 more - Get ALL features + all categories
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tutorial Section */}
      <section className="py-32 md:py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-chart-1/5 to-background"></div>
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-chart-1/10 border border-chart-1/20 mb-6">
              <PlayCircle className="w-5 h-5 text-chart-1" />
              <span className="text-sm font-semibold text-chart-1">Video Tutorial</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              See Ankylo in Action
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Watch this quick tutorial to learn how to set up and use Ankylo Gaming POS for your gaming center
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl border border-border/40 bg-gradient-to-b from-muted/50 to-background backdrop-blur"
            data-testid="container-tutorial-video"
          >
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Ankylo Gaming POS Tutorial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                data-testid="iframe-tutorial"
              ></iframe>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground mb-6">
              Need more help? Check out our documentation or contact support
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full"
                data-testid="button-view-docs"
              >
                <FileText className="w-4 h-4 mr-2" />
                View Documentation
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full"
                data-testid="button-support"
                onClick={() => setContactDialogOpen(true)}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Contact Support
              </Button>
            </div>
          </motion.div>
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
              onClick={() => setContactDialogOpen(true)}
            >
              Contact Us
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
                <img 
                  src={ankyloLogo} 
                  alt="Ankylo Logo" 
                  className="w-12 h-12"
                />
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
