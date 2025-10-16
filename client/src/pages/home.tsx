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
  TrendingUp
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
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/50"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-chart-1 to-chart-2 flex items-center justify-center">
                <MonitorPlay className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">Ankylo</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="link-features">
                Features
              </a>
              <a href="#benefits" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="link-benefits">
                Benefits
              </a>
              <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="link-pricing">
                Pricing
              </a>
            </div>

            <Button size="sm" className="rounded-full" data-testid="button-get-started">
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background"></div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 1 }}
            className="absolute top-20 -left-40 w-96 h-96 bg-chart-1 rounded-full mix-blend-multiply filter blur-3xl"
          />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute top-40 -right-40 w-96 h-96 bg-chart-2 rounded-full mix-blend-multiply filter blur-3xl"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold tracking-tight mb-6" 
              data-testid="text-hero-heading"
            >
              <span className="block text-foreground">Manage Gaming</span>
              <span className="block bg-gradient-to-r from-chart-1 via-chart-2 to-chart-4 bg-clip-text text-transparent">
                Easily and Smartly
              </span>
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8" 
              data-testid="text-hero-description"
            >
              Ankylo helps you control operations, track sessions, and manage your gaming center with an intuitive dashboard.
            </motion.p>

            {/* Email Signup Form */}
            <motion.form 
              variants={fadeInUp}
              onSubmit={handleEmailSubmit} 
              className="max-w-md mx-auto mb-16"
            >
              <div className="flex gap-3" data-testid="form-email-signup">
                <div className="flex-1 relative">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 bg-card/50 backdrop-blur-sm border-border/50 focus:border-primary rounded-xl px-4"
                    data-testid="input-email"
                    disabled={signupMutation.isPending}
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="rounded-xl px-8 bg-gradient-to-r from-chart-1 to-chart-2 hover:opacity-90"
                  disabled={signupMutation.isPending}
                  data-testid="button-submit-email"
                >
                  {signupMutation.isPending ? "..." : "Try it Free"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.form>

            {/* Hero Image */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative mx-auto max-w-5xl" 
              data-testid="image-hero-screenshot"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50">
                <img 
                  src={browserTabsImage} 
                  alt="Ankylo Gaming POS Dashboard"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Comprehensive Overview Section */}
      <section className="py-20 md:py-32 relative" id="features">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Comprehensive Gaming Center Overview
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                View your total operations, revenue, and expenses at a glance to stay on top of your gaming center's performance.
              </p>
              
              <div className="space-y-4">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground">Real-time balance tracking</span>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground">Session analytics & insights</span>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground">Comprehensive revenue tracking</span>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground">Up to 10 financial accounts</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Stats Cards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-chart-1/20 to-chart-2/20 border border-chart-1/30 backdrop-blur-sm"
                data-testid="card-stat-active-sessions"
              >
                <div className="text-sm text-muted-foreground mb-2">Active Sessions</div>
                <div className="text-3xl font-bold text-foreground mb-1" data-testid="text-active-sessions">24</div>
                <div className="text-xs text-green-500">+12% this week</div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-chart-2/20 to-chart-3/20 border border-chart-2/30 backdrop-blur-sm"
                data-testid="card-stat-revenue"
              >
                <div className="text-sm text-muted-foreground mb-2">Monthly Revenue</div>
                <div className="text-3xl font-bold text-foreground mb-1" data-testid="text-revenue">$22,000</div>
                <div className="text-xs text-green-500">+8% last month</div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-chart-3/20 to-chart-4/20 border border-chart-3/30 backdrop-blur-sm"
                data-testid="card-stat-bookings"
              >
                <div className="text-sm text-muted-foreground mb-2">Total Bookings</div>
                <div className="text-3xl font-bold text-foreground mb-1" data-testid="text-bookings">156</div>
                <div className="text-xs text-green-500">+15% today</div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-chart-4/20 to-chart-1/20 border border-chart-4/30 backdrop-blur-sm"
                data-testid="card-stat-efficiency"
              >
                <div className="text-sm text-muted-foreground mb-2">Efficiency</div>
                <div className="text-3xl font-bold text-foreground mb-1" data-testid="text-efficiency">80%</div>
                <div className="text-xs text-green-500">Optimal</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Powerful Features Section */}
      <section className="py-20 md:py-32 relative bg-card/30" id="benefits">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Powerful Features to Elevate Your Gaming Center
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              All the tools you need to manage your operations—smart, simple, and seamless.
            </p>
          </motion.div>

          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-card border border-card-border backdrop-blur-sm" 
              data-testid="card-feature-sessions"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-chart-1 to-chart-2 flex items-center justify-center mb-4">
                <MonitorPlay className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Real-time Session Management</h3>
              <p className="text-sm text-muted-foreground">
                Track gaming sessions across all devices with live countdown timers and status updates.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-card border border-card-border backdrop-blur-sm" 
              data-testid="card-feature-booking"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-chart-2 to-chart-3 flex items-center justify-center mb-4">
                <CalendarCheck className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Streamlined Booking</h3>
              <p className="text-sm text-muted-foreground">
                Handle walk-in and advance bookings with intelligent conflict detection.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-card border border-card-border backdrop-blur-sm" 
              data-testid="card-feature-inventory"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-chart-3 to-chart-4 flex items-center justify-center mb-4">
                <ShoppingCart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Inventory Control</h3>
              <p className="text-sm text-muted-foreground">
                Manage food and beverage sales with real-time order tracking.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-card border border-card-border backdrop-blur-sm" 
              data-testid="card-feature-financial"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-chart-4 to-chart-1 flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Financial Management</h3>
              <p className="text-sm text-muted-foreground">
                Track expenses and revenue with detailed reporting and export capabilities.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Advanced Features Grid */}
      <section className="py-20 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              A Smarter Way to Manage Your Gaming Center
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built for professionals and businesses, Ankylo provides seamless, secure, and intuitive operational management.
            </p>
          </motion.div>

          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ x: 5 }}
              className="p-6 rounded-2xl bg-card border border-card-border backdrop-blur-sm flex items-start gap-4 cursor-pointer"
              data-testid="card-advanced-financial-insights"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-chart-1 to-chart-2 flex items-center justify-center flex-shrink-0">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">Smart Financial Insights</h3>
                <p className="text-sm text-muted-foreground">
                  Get real-time analytics on revenue, expenses, and profitability to make informed business decisions.
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ x: 5 }}
              className="p-6 rounded-2xl bg-card border border-card-border backdrop-blur-sm flex items-start gap-4 cursor-pointer"
              data-testid="card-advanced-session-tracking"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-chart-2 to-chart-3 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">Precise Session Tracking</h3>
              <p className="text-sm text-muted-foreground">
                  Accurate countdown timers with visual and audio alerts ensure billing accuracy and customer satisfaction.
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ x: 5 }}
              className="p-6 rounded-2xl bg-card border border-card-border backdrop-blur-sm flex items-start gap-4 cursor-pointer"
              data-testid="card-advanced-budgeting"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-chart-3 to-chart-4 flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">Automated Budgeting & Forecasting</h3>
                <p className="text-sm text-muted-foreground">
                  Predict future revenue and optimize resource allocation with AI-powered forecasting.
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ x: 5 }}
              className="p-6 rounded-2xl bg-card border border-card-border backdrop-blur-sm flex items-start gap-4 cursor-pointer"
              data-testid="card-advanced-multi-account"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-chart-4 to-chart-1 flex items-center justify-center flex-shrink-0">
                <Database className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">Multi-Account Dashboard (Coming Soon)</h3>
                <p className="text-sm text-muted-foreground">
                  Manage multiple gaming center locations from one unified dashboard.
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 md:py-32 relative" id="pricing">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Flexible Plans for Every Need
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose a plan that fits your financial goals—whether you're an individual or a business.
            </p>
          </motion.div>

          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {/* Free Plan */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="p-8 rounded-2xl bg-card border border-card-border backdrop-blur-sm"
              data-testid="card-pricing-free"
            >
              <div className="text-sm font-medium text-muted-foreground mb-2">Free Plan</div>
              <div className="text-4xl font-bold mb-1">For Individual</div>
              <div className="text-3xl font-bold mb-6">$0 <span className="text-lg text-muted-foreground font-normal">per month</span></div>
              
              <Button className="w-full mb-6 rounded-xl bg-gradient-to-r from-chart-1 to-chart-2 hover:opacity-90" data-testid="button-get-started-free">
                Get Started
              </Button>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Basic session tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Up to 5 active sessions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Standard support</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Community access</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Basic financial reports</span>
                </li>
              </ul>
            </motion.div>

            {/* Freelancer Plan */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-chart-1/10 to-chart-2/10 border-2 border-chart-1 backdrop-blur-sm relative"
              data-testid="card-pricing-freelancer"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-chart-1 to-chart-2 rounded-full text-xs font-semibold text-white">
                POPULAR
              </div>
              <div className="text-sm font-medium text-muted-foreground mb-2">Enterprise Plan</div>
              <div className="text-4xl font-bold mb-1">For Freelancers</div>
              <div className="text-3xl font-bold mb-6">$15 <span className="text-lg text-muted-foreground font-normal">per month</span></div>
              
              <Button className="w-full mb-6 rounded-xl bg-gradient-to-r from-chart-1 to-chart-2 hover:opacity-90" data-testid="button-get-started-freelancer">
                Get Started
              </Button>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Everything in free plan</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Unlimited active sessions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Advanced booking management</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Priority email support</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Detailed analytics & insights</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Inventory management</span>
                </li>
              </ul>
            </motion.div>

            {/* Business Plan */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="p-8 rounded-2xl bg-card border border-card-border backdrop-blur-sm"
              data-testid="card-pricing-business"
            >
              <div className="text-sm font-medium text-muted-foreground mb-2">Enterprise Plan</div>
              <div className="text-4xl font-bold mb-1">For Businesses</div>
              <div className="text-3xl font-bold mb-6">$35 <span className="text-lg text-muted-foreground font-normal">per month</span></div>
              
              <Button className="w-full mb-6 rounded-xl bg-gradient-to-r from-chart-1 to-chart-2 hover:opacity-90" data-testid="button-get-started-business">
                Get Started
              </Button>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Everything in freelancer plan</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Multi-location support</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Advanced financial management</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Role-based access control</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Dedicated account manager</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Custom integrations & API access</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-chart-1 to-chart-2 flex items-center justify-center">
                  <MonitorPlay className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-foreground">Ankylo</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Streamline your gaming center operations with modern management tools.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">Product</h4>
              <ul className="space-y-3">
                <li><a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#benefits" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Benefits</a></li>
                <li><a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Careers</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Security</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border/50 text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 Ankylo Gaming POS. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
