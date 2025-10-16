import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { 
  Mail, 
  Sparkles, 
  Lock, 
  Layers, 
  Zap, 
  Shield, 
  ArrowRight,
  MonitorPlay,
  CalendarCheck,
  ShoppingCart,
  DollarSign,
  Clock,
  Database,
  BarChart3,
  Users,
  FileText,
  TrendingUp,
  CheckCircle2
} from "lucide-react";
import { SiReact, SiTypescript, SiPostgresql, SiTailwindcss } from "react-icons/si";

import browserTabsImage from "@assets/generated_images/Browser_interface_with_sidebar_tabs_328237be.png";
import customizationImage from "@assets/generated_images/Browser_customization_interface_51f99058.png";
import splitViewImage from "@assets/generated_images/Browser_split-view_feature_e0da2002.png";
import privacyImage from "@assets/generated_images/Privacy_features_dashboard_b751eb67.png";

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

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-chart-1 to-chart-2 flex items-center justify-center">
                <MonitorPlay className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">Ankylo Gaming POS</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="link-features">
                Features
              </a>
              <a href="#tech" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="link-tech">
                Technology
              </a>
              <a href="#benefits" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="link-benefits">
                Benefits
              </a>
            </div>

            <Button size="sm" data-testid="button-get-started">
              Get Demo
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-chart-1 via-chart-2 to-chart-3 opacity-100">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
        </div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-chart-1 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-chart-2 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8" data-testid="text-announcement">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Complete Gaming Center Management System</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6" data-testid="text-hero-heading">
            <span className="bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
              Ankylo Gaming POS
            </span>
            <br />
            <span className="bg-gradient-to-r from-chart-1 via-chart-2 to-chart-4 bg-clip-text text-transparent">
              Streamline Your Gaming
            </span>
            <br />
            <span className="bg-gradient-to-r from-chart-1 via-chart-2 to-chart-4 bg-clip-text text-transparent">
              Center Operations
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12" data-testid="text-hero-description">
            A powerful, all-in-one platform designed to streamline every aspect of your gaming center's operations. 
            From real-time session tracking to comprehensive financial oversight.
          </p>

          {/* Email Signup Form */}
          <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto mb-16">
            <div className="flex gap-3" data-testid="form-email-signup">
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="Enter your email for demo..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-12 h-12 bg-card/50 backdrop-blur-sm border-border/50 focus:border-primary rounded-full"
                  data-testid="input-email"
                  disabled={signupMutation.isPending}
                />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                className="rounded-full px-8"
                disabled={signupMutation.isPending}
                data-testid="button-submit-email"
              >
                {signupMutation.isPending ? "Requesting..." : "Request Demo"}
              </Button>
            </div>
          </form>

          {/* Hero Image */}
          <div className="relative mx-auto max-w-5xl" data-testid="image-hero-screenshot">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 transform hover:scale-[1.02] transition-transform duration-500">
              <img 
                src={browserTabsImage} 
                alt="Ankylo Gaming POS Dashboard"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-20 md:py-32 relative" id="features">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-highlights-heading">
              Built for Modern Gaming Centers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to maximize efficiency and profitability in one powerful platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group p-6 rounded-2xl bg-card border border-card-border hover-elevate active-elevate-2 transition-all" data-testid="card-highlight-frontend">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-chart-1 to-chart-2 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Modern Frontend</h3>
              <p className="text-sm text-muted-foreground">
                Fast, intuitive experience with React + TypeScript
              </p>
            </div>

            <div className="group p-6 rounded-2xl bg-card border border-card-border hover-elevate active-elevate-2 transition-all" data-testid="card-highlight-sync">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-chart-2 to-chart-3 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Live Data Sync</h3>
              <p className="text-sm text-muted-foreground">
                Always-current information across all operations
              </p>
            </div>

            <div className="group p-6 rounded-2xl bg-card border border-card-border hover-elevate active-elevate-2 transition-all" data-testid="card-highlight-tracking">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-chart-3 to-chart-4 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Precise Session Tracking</h3>
              <p className="text-sm text-muted-foreground">
                Accurate countdowns and billing with robust timers
              </p>
            </div>

            <div className="group p-6 rounded-2xl bg-card border border-card-border hover-elevate active-elevate-2 transition-all" data-testid="card-highlight-security">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-chart-4 to-chart-1 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Robust Security</h3>
              <p className="text-sm text-muted-foreground">
                Role-based access control protects critical data
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Operational Features */}
      <section className="py-20 md:py-32 relative bg-card/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-features-heading">
              Core Operational Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Essential tools designed to optimize daily gaming center operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Session Management */}
            <div className="group p-8 rounded-2xl bg-card border border-card-border hover-elevate active-elevate-2 transition-all" data-testid="card-feature-sessions">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-chart-1 to-chart-2 flex items-center justify-center mb-6">
                <MonitorPlay className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Real-time Session Management</h3>
              <p className="text-muted-foreground mb-6">
                Effortlessly track gaming sessions across PC, consoles, VR, and simulators. Includes countdown timers, 
                automatic status updates, and flexible pause/resume functionality.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Live session tracking & status updates</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Visual & audio countdown timers</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Multi-device support (PC, PS5, VR, simulators)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Flexible pause and resume options</span>
                </li>
              </ul>
            </div>

            {/* Booking Management */}
            <div className="group p-8 rounded-2xl bg-card border border-card-border hover-elevate active-elevate-2 transition-all" data-testid="card-feature-booking">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-chart-2 to-chart-3 flex items-center justify-center mb-6">
                <CalendarCheck className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Streamlined Booking Management</h3>
              <p className="text-muted-foreground mb-6">
                Handle walk-in and advance bookings with intelligent conflict detection and instant seat allocation, 
                ensuring smooth customer flow and efficient resource utilization.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Quick walk-in processing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Advance reservation system</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Automated conflict prevention</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Bulk operations for events/parties</span>
                </li>
              </ul>
            </div>

            {/* Food & Inventory */}
            <div className="group p-8 rounded-2xl bg-card border border-card-border hover-elevate active-elevate-2 transition-all" data-testid="card-feature-inventory">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-chart-3 to-chart-4 flex items-center justify-center mb-6">
                <ShoppingCart className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Integrated Food & Inventory</h3>
              <p className="text-muted-foreground mb-6">
                Manage food and beverage sales seamlessly with dynamic pricing, real-time order tracking, 
                and comprehensive inventory control.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Comprehensive item catalog</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Direct order integration with bookings</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Real-time quantity tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Revenue analytics for F&B</span>
                </li>
              </ul>
            </div>

            {/* Financial Management */}
            <div className="group p-8 rounded-2xl bg-card border border-card-border hover-elevate active-elevate-2 transition-all" data-testid="card-feature-financial">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-chart-4 to-chart-1 flex items-center justify-center mb-6">
                <DollarSign className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Comprehensive Financial Management</h3>
              <p className="text-muted-foreground mb-6">
                Gain clear insights into your center's finances with detailed expense tracking, category-wise reporting, 
                and flexible export capabilities for informed decision-making.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Detailed expense categorization</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">CSV/PDF export for easy accounting</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Monthly & quarterly financial summaries</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Integrated revenue tracking</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 md:py-32 relative overflow-hidden" id="tech">
        <div className="absolute inset-0 bg-gradient-to-br from-chart-1/5 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-tech-heading">
              Built with Cutting-Edge Technology
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Leveraging a modern, robust tech stack ensures reliability, performance, and scalability
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Frontend Stack */}
            <div className="p-8 rounded-2xl bg-card border border-card-border" data-testid="card-frontend-stack">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-chart-1 to-chart-2 flex items-center justify-center">
                  <SiReact className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold">Frontend Stack</h3>
              </div>
              <p className="text-muted-foreground mb-6">Intuitive User Experience</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">React 18+ with TypeScript for type-safe, maintainable code</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Vite for lightning-fast development and builds</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">TanStack React Query for efficient data fetching</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Radix UI & shadcn/ui components for polished interface</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Tailwind CSS with dark mode support</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">React Hook Form + Zod for robust form validation</span>
                </li>
              </ul>
            </div>

            {/* Backend Stack */}
            <div className="p-8 rounded-2xl bg-card border border-card-border" data-testid="card-backend-stack">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-chart-3 to-chart-4 flex items-center justify-center">
                  <Database className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold">Backend Stack</h3>
              </div>
              <p className="text-muted-foreground mb-6">Powering Performance & Security</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Express.js with TypeScript for scalable API</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">PostgreSQL via Neon for reliable data storage</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Drizzle ORM for type-safe database interactions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Bcrypt for secure password hashing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">RESTful API design for seamless integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Express-session for secure authentication</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Database Schema */}
          <div className="mt-12 p-8 rounded-2xl bg-card border border-card-border" data-testid="card-database-schema">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-chart-2 to-chart-3 flex items-center justify-center">
                <Database className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold">Comprehensive Database Schema</h3>
            </div>
            <p className="text-muted-foreground mb-8">
              16-table schema meticulously covers all aspects of gaming center operations
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Bookings",
                "Users", 
                "Pricing Configs",
                "Expenses",
                "Loyalty Members",
                "Loyalty Events",
                "Loyalty Config",
                "Game Updates",
                "Center Info",
                "Gallery Images",
                "Facilities",
                "Games",
                "Booking History",
                "Device Configs",
                "Food Items",
                "Activity Logs"
              ].map((table) => (
                <div key={table} className="flex items-center gap-2 p-3 rounded-lg bg-background/50">
                  <Database className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">{table}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-32 relative" id="benefits">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-benefits-heading">
              Why Choose Ankylo Gaming POS?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transform your gaming center into a highly efficient and profitable operation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-card border border-card-border hover-elevate active-elevate-2 transition-all" data-testid="card-benefit-operations">
              <Layers className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Streamlined Operations</h3>
              <p className="text-sm text-muted-foreground">
                Centralized management for all activities, reducing manual effort
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-card-border hover-elevate active-elevate-2 transition-all" data-testid="card-benefit-monitoring">
              <BarChart3 className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Real-time Monitoring</h3>
              <p className="text-sm text-muted-foreground">
                Live tracking of sessions and availability for optimal resource use
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-card-border hover-elevate active-elevate-2 transition-all" data-testid="card-benefit-financial">
              <DollarSign className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Financial Control</h3>
              <p className="text-sm text-muted-foreground">
                Comprehensive tracking of expenses and revenue for better budgeting
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-card-border hover-elevate active-elevate-2 transition-all" data-testid="card-benefit-satisfaction">
              <Users className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Enhanced Customer Satisfaction</h3>
              <p className="text-sm text-muted-foreground">
                Automated customer service and public status boards improve experience
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-card-border hover-elevate active-elevate-2 transition-all" data-testid="card-benefit-decisions">
              <FileText className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Data-Driven Decisions</h3>
              <p className="text-sm text-muted-foreground">
                Actionable analytics and reporting for strategic insights
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-card-border hover-elevate active-elevate-2 transition-all" data-testid="card-benefit-scalability">
              <TrendingUp className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Future-Proof Scalability</h3>
              <p className="text-sm text-muted-foreground">
                Flexible device and pricing configurations adapt to your growth
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-card-border hover-elevate active-elevate-2 transition-all" data-testid="card-benefit-security">
              <Lock className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Enterprise Security</h3>
              <p className="text-sm text-muted-foreground">
                Robust role-based access and restrictions protect your business
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-card-border hover-elevate active-elevate-2 transition-all" data-testid="card-benefit-reliability">
              <SiTypescript className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Type Safety & Reliability</h3>
              <p className="text-sm text-muted-foreground">
                Full-stack TypeScript ensures dependable, error-free operations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-chart-1 via-chart-2 to-chart-3 opacity-100">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/50"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl md:text-6xl font-bold mb-6" data-testid="text-cta-heading">
            <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Ready to Transform Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Gaming Center?
            </span>
          </h2>

          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Ankylo Gaming POS is the complete solution built for modern gaming centers, combining 
            cutting-edge technology with unparalleled functionality.
          </p>

          {/* Tech Icons */}
          <div className="flex items-center justify-center gap-8 mb-12">
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 rounded-xl bg-card border border-card-border flex items-center justify-center">
                <SiReact className="w-8 h-8 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">React + TypeScript</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 rounded-xl bg-card border border-card-border flex items-center justify-center">
                <SiPostgresql className="w-8 h-8 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">PostgreSQL</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 rounded-xl bg-card border border-card-border flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Real-time Updates</span>
            </div>
          </div>

          <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto">
            <div className="flex gap-3" data-testid="form-email-signup-footer">
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="Enter your email for demo..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-12 h-12 bg-card/50 backdrop-blur-sm border-border/50 focus:border-primary rounded-full"
                  data-testid="input-email-footer"
                  disabled={signupMutation.isPending}
                />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                className="rounded-full px-8"
                disabled={signupMutation.isPending}
                data-testid="button-submit-email-footer"
              >
                {signupMutation.isPending ? "Requesting..." : "Get Started"}
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Product</h4>
              <ul className="space-y-3">
                <li><a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-features">Features</a></li>
                <li><a href="#tech" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-tech">Technology</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-pricing">Pricing</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-demo">Request Demo</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-about">About Us</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-contact">Contact</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-careers">Careers</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-partners">Partners</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">Resources</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-docs">Documentation</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-guides">Guides</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-support">Support</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-api">API Reference</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-privacy">Privacy Policy</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-terms">Terms of Service</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-security">Security</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-compliance">Compliance</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-chart-1 to-chart-2 flex items-center justify-center">
                <MonitorPlay className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-sm text-muted-foreground">© 2024 Ankylo Gaming POS. All rights reserved.</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <SiReact className="w-5 h-5" />
              <span>+</span>
              <SiTypescript className="w-5 h-5" />
              <span>+</span>
              <SiPostgresql className="w-5 h-5" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
