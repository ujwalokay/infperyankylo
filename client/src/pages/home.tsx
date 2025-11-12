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
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
import { 
  SiInstagram, 
  SiX, 
  SiFacebook, 
  SiWhatsapp, 
  SiDiscord, 
  SiYoutube 
} from "react-icons/si";

import dashboardImage from "@assets/Screenshot (212)_1761392948864.png";
import airavotoLogo from "@assets/20251023_202645_1762943113599.png";
import mobileComplete from "@assets/2e4c0ed9-073f-4840-be1d-b03693272a58_1761396779110.png";

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
        description: "We'll contact you soon about Airavoto Gaming.",
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
                src={airavotoLogo} 
                alt="Airavoto Gaming Logo" 
                className="w-10 h-10 md:w-12 md:h-12 protected-image"
                onContextMenu={(e) => e.preventDefault()}
                draggable={false}
              />
              <span className="text-lg md:text-2xl font-bold text-foreground hidden sm:inline">Airavoto Gaming</span>
              <span className="text-lg font-bold text-foreground sm:hidden">Airavoto</span>
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
                      window.open('https://wa.me/918657955764', '_blank');
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

                  <Button
                    onClick={() => {
                      window.open('https://instagram.com/airavotogaming', '_blank');
                      setContactDialogOpen(false);
                    }}
                    className="w-full justify-start gap-3 h-auto py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 text-white"
                    data-testid="button-instagram"
                  >
                    <SiInstagram className="w-5 h-5" />
                    <div className="text-left">
                      <div className="font-semibold">Chat on Instagram</div>
                      <div className="text-sm text-purple-100">Message us directly</div>
                    </div>
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        {/* Modern Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-background to-teal-500/5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-8"
            >
              {/* Made in India Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/10 to-green-500/10 border border-orange-500/20 backdrop-blur-sm"
                data-testid="badge-made-in-india"
              >
                <span className="text-xl">🇮🇳</span>
                <span className="text-sm font-semibold bg-gradient-to-r from-orange-500 to-green-600 bg-clip-text text-transparent">
                  Proudly Made in India
                </span>
              </motion.div>

              {/* Heading */}
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight" 
                data-testid="text-hero-heading"
              >
                Simplify, Manage, and{" "}
                <span className="bg-gradient-to-r from-violet-500 to-teal-500 bg-clip-text text-transparent">
                  Grow Your Gaming Center
                </span>
              </h1>

              {/* Description */}
              <p 
                className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl" 
                data-testid="text-hero-description"
              >
                Real-time session management, streamlined booking, food inventory, and complete financial management — all in one powerful platform.
              </p>

              {/* Key Features List */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-violet-500" />
                  <span>Session Tracking</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-violet-500" />
                  <span>Smart Booking</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-violet-500" />
                  <span>F&B Management</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-violet-500" />
                  <span>Financial Reports</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="rounded-full px-8 py-6 text-base bg-gradient-to-r from-violet-600 to-teal-600 hover:from-violet-700 hover:to-teal-700 shadow-lg shadow-violet-500/25"
                  data-testid="button-explore-features"
                  onClick={() => setLocation("/features")}
                >
                  Explore Our Features
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="rounded-full px-8 py-6 text-base border-2"
                  data-testid="button-contact-sales"
                  onClick={() => setContactDialogOpen(true)}
                >
                  Contact Sales
                </Button>
              </div>
            </motion.div>

            {/* Right Multi-Device Mockup */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative" 
              data-testid="image-hero-mockup"
            >
              {/* Animated Gradient Background */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 via-purple-500/20 to-teal-500/20 blur-3xl opacity-60 animate-gradient-shift" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-violet-600/10 via-fuchsia-500/10 to-teal-600/10 blur-2xl animate-gradient-pulse" />
              </div>
              
              {/* Multi-Device Container */}
              <div className="relative space-y-6 md:space-y-8">
                {/* Top Row: Monitor + Laptop */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
                  {/* Desktop Monitor */}
                  <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="w-full sm:w-64 md:w-80 animate-float"
                    data-testid="mockup-monitor"
                  >
                    {/* Monitor Stand */}
                    <div className="relative">
                      {/* Monitor Screen */}
                      <div className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 rounded-lg overflow-hidden border-[4px] border-gray-900 shadow-2xl">
                        {/* Top Bezel with Camera */}
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-700 rounded-full z-10 shadow-inner"></div>
                        
                        {/* Screen */}
                        <div className="aspect-[16/9] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                          <img 
                            src={dashboardImage} 
                            alt="Monitor Display - Airavoto Gaming POS"
                            className="w-full h-full object-cover object-left-top protected-image"
                            onContextMenu={(e) => e.preventDefault()}
                            draggable={false}
                          />
                        </div>
                      </div>
                      
                      {/* Monitor Stand Base */}
                      <div className="flex flex-col items-center">
                        {/* Neck */}
                        <div className="w-4 h-8 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-sm shadow-lg"></div>
                        {/* Base */}
                        <div className="w-32 h-3 bg-gradient-to-b from-gray-800 to-gray-900 rounded-full shadow-xl"></div>
                      </div>
                    </div>
                  </motion.div>

                  {/* MacBook Laptop */}
                  <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="w-full sm:w-72 md:w-96 animate-float-delayed"
                    data-testid="mockup-laptop"
                  >
                    {/* Laptop Screen */}
                    <div className="relative bg-gradient-to-b from-gray-900 to-gray-800 rounded-t-xl md:rounded-t-2xl overflow-hidden border-[3px] border-gray-900 shadow-2xl">
                      {/* Top Bezel with Camera */}
                      <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gray-700 rounded-full z-10 shadow-inner"></div>
                      
                      {/* Screen */}
                      <div className="aspect-[16/10] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden border-2 border-gray-800">
                        <img 
                          src={dashboardImage} 
                          alt="Laptop Display - Airavoto Gaming Dashboard"
                          className="w-full h-full object-cover object-left-top protected-image"
                          onContextMenu={(e) => e.preventDefault()}
                          draggable={false}
                        />
                      </div>
                    </div>
                    
                    {/* Laptop Base/Keyboard */}
                    <div className="relative">
                      {/* Hinge */}
                      <div className="h-1 bg-gradient-to-b from-gray-900 to-gray-800"></div>
                      
                      {/* Keyboard Base */}
                      <div className="bg-gradient-to-b from-gray-300 to-gray-400 rounded-b-xl md:rounded-b-2xl px-3 md:px-6 py-2 md:py-3 shadow-xl">
                        {/* Keyboard - Hidden on small screens */}
                        <div className="mb-1.5 md:mb-2 hidden sm:block">
                          <div className="grid grid-cols-12 md:grid-cols-14 gap-[2px] mb-[2px]">
                            {[...Array(36)].map((_, i) => (
                              <div key={i} className="h-2 md:h-3 bg-gradient-to-b from-gray-100 to-gray-200 rounded-sm shadow-sm"></div>
                            ))}
                          </div>
                          <div className="grid grid-cols-12 md:grid-cols-14 gap-[2px] mb-[2px]">
                            {[...Array(36)].map((_, i) => (
                              <div key={i + 36} className="h-2 md:h-3 bg-gradient-to-b from-gray-100 to-gray-200 rounded-sm shadow-sm"></div>
                            ))}
                          </div>
                          {/* Spacebar row */}
                          <div className="flex gap-[2px]">
                            <div className="h-2 md:h-3 flex-1 bg-gradient-to-b from-gray-100 to-gray-200 rounded-sm shadow-sm"></div>
                            <div className="h-2 md:h-3 flex-[3] bg-gradient-to-b from-gray-100 to-gray-200 rounded-sm shadow-sm"></div>
                            <div className="h-2 md:h-3 flex-1 bg-gradient-to-b from-gray-100 to-gray-200 rounded-sm shadow-sm"></div>
                          </div>
                        </div>
                        
                        {/* Trackpad */}
                        <div className="mx-auto w-20 md:w-32 h-10 md:h-16 bg-gradient-to-b from-gray-200 to-gray-300 rounded-lg border border-gray-400 shadow-inner"></div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Bottom Row: Tablet + Phone */}
                <div className="flex items-end justify-center gap-4 md:gap-8">
                  {/* iPad Tablet */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="w-40 sm:w-48 md:w-64 animate-float"
                    data-testid="mockup-tablet"
                  >
                    <div className="relative bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl md:rounded-3xl overflow-hidden border-[5px] md:border-[7px] border-gray-900 shadow-2xl">
                      {/* Camera */}
                      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-700 rounded-full z-10 shadow-inner"></div>
                      
                      {/* Screen */}
                      <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                        <img 
                          src={dashboardImage} 
                          alt="Tablet Display"
                          className="w-full h-full object-cover object-left-top protected-image"
                          onContextMenu={(e) => e.preventDefault()}
                          draggable={false}
                        />
                      </div>
                      
                      {/* Home button indicator */}
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-8 md:w-12 h-1 md:h-1.5 bg-gray-700 rounded-full shadow-inner"></div>
                    </div>
                  </motion.div>

                  {/* iPhone Mobile */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="w-44 sm:w-48 md:w-56 lg:w-64 animate-float-delayed"
                    data-testid="mockup-phone"
                  >
                    <img 
                      src={mobileComplete} 
                      alt="Mobile Display - Airavoto Gaming"
                      className="w-full h-auto drop-shadow-2xl protected-image"
                      onContextMenu={(e) => e.preventDefault()}
                      draggable={false}
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 md:py-32 relative bg-gradient-to-b from-background to-muted/20" id="features">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Everything You Need to <span className="bg-gradient-to-r from-violet-500 to-teal-500 bg-clip-text text-transparent">Succeed</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed specifically for gaming centers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Session Management */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative p-8 rounded-2xl bg-card border border-border/50 hover:border-violet-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/10"
              data-testid="card-feature-sessions"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500/10 to-violet-600/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MonitorPlay className="w-7 h-7 text-violet-500" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3">Real-time Session Management</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Track gaming sessions across PC, consoles, VR, and simulators with live countdown timers, automatic status updates, and flexible pause/resume functionality.
              </p>
            </motion.div>

            {/* Booking Management */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative p-8 rounded-2xl bg-card border border-border/50 hover:border-teal-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10"
              data-testid="card-feature-booking"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500/10 to-teal-600/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CalendarCheck className="w-7 h-7 text-teal-500" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3">Streamlined Booking Management</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Handle walk-in and advance bookings with intelligent conflict detection and instant seat allocation. Process bulk bookings for events and parties seamlessly.
              </p>
            </motion.div>

            {/* Inventory Control */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative p-8 rounded-2xl bg-card border border-border/50 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10"
              data-testid="card-feature-inventory"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500/10 to-orange-600/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShoppingCart className="w-7 h-7 text-orange-500" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3">Food & Inventory Solutions</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Manage food and beverage sales seamlessly with dynamic pricing, real-time order tracking, and comprehensive inventory control with revenue analytics.
              </p>
            </motion.div>

            {/* Financial Management */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group relative p-8 rounded-2xl bg-card border border-border/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              data-testid="card-feature-financial"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-600/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-7 h-7 text-blue-500" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3">Comprehensive Financial Management</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Gain clear insights with detailed expense tracking, category-wise reporting, and flexible export capabilities. Make data-driven decisions with monthly summaries.
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
              Why Choose Airavoto Gaming?
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
                        Airavoto Gaming
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
                <span className="px-6 py-2 rounded-full bg-gradient-to-r from-chart-1 to-chart-2 text-sm font-bold text-white shadow-lg whitespace-nowrap">
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
              See Airavoto Gaming in Action
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Watch this quick tutorial to learn how to set up and use Airavoto Gaming for your gaming center
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
                title="Airavoto Gaming Tutorial"
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

      {/* FAQ Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background"></div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Got questions? We've got answers
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4" data-testid="accordion-faq">
              <AccordionItem value="item-1" className="border border-border/50 rounded-xl px-6 bg-card/50 backdrop-blur">
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline" data-testid="faq-trigger-1">
                  What is Airavoto Gaming and how does it help my gaming center?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed" data-testid="faq-content-1">
                  Airavoto Gaming is a comprehensive Point of Sale (POS) system designed specifically for gaming centers. It helps you manage real-time gaming sessions across PC, console, VR, and simulators, handle bookings, track food & beverage sales, manage inventory, and generate detailed financial reports—all from one powerful platform. It simplifies operations and helps you grow your business efficiently.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-border/50 rounded-xl px-6 bg-card/50 backdrop-blur">
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline" data-testid="faq-trigger-2">
                  How does the session management system work?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed" data-testid="faq-content-2">
                  Our session management system tracks gaming sessions in real-time with live countdown timers. You can easily start, pause, resume, or end sessions across multiple gaming stations. The system automatically updates session status, calculates charges based on time played, and sends notifications when sessions are about to end. Everything is visible from a single dashboard for easy monitoring.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-border/50 rounded-xl px-6 bg-card/50 backdrop-blur">
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline" data-testid="faq-trigger-3">
                  Can I manage bookings and walk-ins at the same time?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed" data-testid="faq-content-3">
                  Yes! Airavoto Gaming supports both advance bookings and walk-in customers seamlessly. The system has intelligent conflict detection to prevent double bookings, instant seat allocation, and can handle bulk bookings for events or parties. You'll have full visibility of your schedule and can manage both types of customers efficiently.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-border/50 rounded-xl px-6 bg-card/50 backdrop-blur">
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline" data-testid="faq-trigger-4">
                  Is the system suitable for small gaming centers?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed" data-testid="faq-content-4">
                  Absolutely! Airavoto Gaming is designed to scale with your business. Whether you're running a small gaming cafe with 5 stations or a large gaming arena with 50+ stations, our system adapts to your needs. We offer flexible pricing plans that work for businesses of all sizes, and you only pay for the features you need.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border border-border/50 rounded-xl px-6 bg-card/50 backdrop-blur">
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline" data-testid="faq-trigger-5">
                  How do I get support if I face any issues?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed" data-testid="faq-content-5">
                  We provide comprehensive support through multiple channels. You can reach us via WhatsApp at +91 8657955764 for instant help, email us at airavotogaming@gmail.com, or use our contact form. We also offer detailed documentation, video tutorials, and our support team is available to assist you with any questions or technical issues you may encounter.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border border-border/50 rounded-xl px-6 bg-card/50 backdrop-blur">
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline" data-testid="faq-trigger-6">
                  Can I try the system before committing to a purchase?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed" data-testid="faq-content-6">
                  Yes! We offer a demo of the system so you can explore all the features and see how Airavoto Gaming works for your gaming center. Contact us through the "Contact Us" button or reach out via WhatsApp, and we'll be happy to schedule a personalized demo and answer all your questions about pricing and implementation.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground mb-6">
              Still have questions? We're here to help!
            </p>
            <Button 
              size="lg" 
              className="rounded-full px-8"
              onClick={() => setContactDialogOpen(true)}
              data-testid="button-faq-contact"
            >
              Contact Us
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
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
                  src={airavotoLogo} 
                  alt="Airavoto Gaming Logo" 
                  className="w-12 h-12 protected-image"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable={false}
                />
                <span className="text-xl font-bold">Airavoto Gaming</span>
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
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li><a href="tel:+918657955764" className="hover:text-foreground transition-colors">+91 8657955764</a></li>
                <li><a href="mailto:airavotogaming@gmail.com" className="hover:text-foreground transition-colors">airavotogaming@gmail.com</a></li>
              </ul>
              <div className="mt-6">
                <h4 className="font-bold mb-4">Follow Us</h4>
                <div className="flex flex-wrap gap-3">
                  <a 
                    href="https://instagram.com/airvotogaming" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-muted/50 hover:bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-all hover-elevate"
                    data-testid="link-instagram"
                    aria-label="Instagram"
                  >
                    <SiInstagram className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://x.com/airvotogaming" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-muted/50 hover:bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-all hover-elevate"
                    data-testid="link-x"
                    aria-label="X (Twitter)"
                  >
                    <SiX className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://facebook.com/airvotogaming" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-muted/50 hover:bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-all hover-elevate"
                    data-testid="link-facebook"
                    aria-label="Facebook"
                  >
                    <SiFacebook className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://wa.me/918657955764" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-muted/50 hover:bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-all hover-elevate"
                    data-testid="link-whatsapp"
                    aria-label="WhatsApp"
                  >
                    <SiWhatsapp className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://discord.gg/airvotogaming" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-muted/50 hover:bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-all hover-elevate"
                    data-testid="link-discord"
                    aria-label="Discord"
                  >
                    <SiDiscord className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://youtube.com/@airvotogaming" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-muted/50 hover:bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-all hover-elevate"
                    data-testid="link-youtube"
                    aria-label="YouTube"
                  >
                    <SiYoutube className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              Powered by Airavoto Gaming
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-foreground transition-colors" data-testid="link-privacy">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-foreground transition-colors" data-testid="link-terms">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
