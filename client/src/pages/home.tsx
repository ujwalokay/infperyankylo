import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Mail, Sparkles, Lock, Layers, Zap, Shield, ArrowRight } from "lucide-react";
import { SiX, SiGithub, SiDiscord } from "react-icons/si";

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
        title: "You're on the list!",
        description: "We'll let you know when Arc is ready for you.",
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
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">Arc</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="link-features">
                Features
              </a>
              <a href="#privacy" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="link-privacy">
                Privacy
              </a>
              <a href="#download" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="link-download">
                Download
              </a>
            </div>

            <Button size="sm" data-testid="button-get-started">
              Get Started
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
            <span className="text-sm font-medium text-foreground">Meet Arc, from the makers of Arc Browser</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
              Arc is the Chrome
            </span>
            <br />
            <span className="bg-gradient-to-r from-chart-1 via-chart-2 to-chart-4 bg-clip-text text-transparent">
              replacement I've been
            </span>
            <br />
            <span className="bg-gradient-to-r from-chart-1 via-chart-2 to-chart-4 bg-clip-text text-transparent">
              waiting for
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12" data-testid="text-hero-description">
            A browser that doesn't just meet your needs — it anticipates them.
            Experience the web like never before with spaces, customization, and privacy built in.
          </p>

          {/* Email Signup Form */}
          <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto mb-16">
            <div className="flex gap-3" data-testid="form-email-signup">
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="Enter your email..."
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
                {signupMutation.isPending ? "Joining..." : "Get Early Access"}
              </Button>
            </div>
          </form>

          {/* Hero Image */}
          <div className="relative mx-auto max-w-5xl" data-testid="image-hero-screenshot">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 transform hover:scale-[1.02] transition-transform duration-500">
              <img 
                src={browserTabsImage} 
                alt="Arc Browser Interface"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 md:py-32 relative" id="features">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-features-heading">
              A browser that doesn't just meet
              <br />
              your needs — it anticipates them
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every feature is designed to help you browse smarter, faster, and with more privacy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl bg-card border border-card-border hover-elevate active-elevate-2 transition-all" data-testid="card-feature-spaces">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-chart-1 to-chart-2 flex items-center justify-center mb-6">
                <Layers className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Spaces for different sides of you</h3>
              <p className="text-muted-foreground">
                Organize your tabs into Spaces — work, personal, hobbies. Switch contexts instantly without losing your flow.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-card border border-card-border hover-elevate active-elevate-2 transition-all" data-testid="card-feature-customization">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-chart-2 to-chart-4 flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Your perfect setup</h3>
              <p className="text-muted-foreground">
                Customize every pixel to match your style. From themes to layouts, make Arc truly yours.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-card border border-card-border hover-elevate active-elevate-2 transition-all" data-testid="card-feature-privacy">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-chart-3 to-chart-1 flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">The comfort of privacy</h3>
              <p className="text-muted-foreground">
                Browse without being watched. Built-in tracking protection and privacy controls keep your data yours.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-card border border-card-border hover-elevate active-elevate-2 transition-all" data-testid="card-feature-performance">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-chart-4 to-chart-3 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Lightning fast</h3>
              <p className="text-muted-foreground">
                Built on modern web technologies for speed that feels instant. Every click, every page, blazing fast.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-card border border-card-border hover-elevate active-elevate-2 transition-all" data-testid="card-feature-split">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-chart-1 to-chart-4 flex items-center justify-center mb-6">
                <Layers className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Split View</h3>
              <p className="text-muted-foreground">
                Work with two sites side-by-side without the hassle. Perfect for research, comparison, and productivity.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-card border border-card-border hover-elevate active-elevate-2 transition-all" data-testid="card-feature-design">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-chart-2 to-chart-3 flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Thoughtfully designed</h3>
              <p className="text-muted-foreground">
                Every detail crafted with care. A browser that's as beautiful as it is powerful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Section 1 - Browsing */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-chart-1/5 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Layers className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Tab Management</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-showcase-tabs-heading">
                Space for the different
                <br />
                sides of you
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8">
                Organize your life into Spaces. Keep work tabs separate from personal browsing.
                Switch contexts without losing your place. Your browser should adapt to you, not the other way around.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Automatic organization</h4>
                    <p className="text-sm text-muted-foreground">Tabs automatically organize themselves based on your activity</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Infinite customization</h4>
                    <p className="text-sm text-muted-foreground">Color-code your spaces and make them uniquely yours</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Quick switching</h4>
                    <p className="text-sm text-muted-foreground">Jump between spaces with a single keyboard shortcut</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="order-1 lg:order-2" data-testid="image-showcase-tabs">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 transform hover:scale-[1.02] transition-transform duration-500">
                <img 
                  src={browserTabsImage} 
                  alt="Arc Browser Tab Management"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Section 2 - Customization */}
      <section className="py-20 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-testid="image-showcase-customization">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 transform hover:scale-[1.02] transition-transform duration-500">
                <img 
                  src={customizationImage} 
                  alt="Arc Browser Customization"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Personalization</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-showcase-customization-heading">
                Your perfect setup
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8">
                Make Arc truly yours with endless customization options. Choose your color scheme,
                arrange your sidebar, and create a browsing experience that feels like home.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-chart-1 to-chart-2 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Themes & Colors</h4>
                    <p className="text-sm text-muted-foreground">Choose from beautiful presets or create your own custom theme</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-chart-2 to-chart-4 flex items-center justify-center flex-shrink-0">
                    <Layers className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Flexible Layouts</h4>
                    <p className="text-sm text-muted-foreground">Arrange your interface exactly how you want it</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Section 3 - Split View */}
      <section className="py-20 md:py-32 relative overflow-hidden" id="privacy">
        <div className="absolute inset-0 bg-gradient-to-bl from-chart-2/5 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Productivity</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-showcase-splitview-heading">
                Work smarter with
                <br />
                Split View
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8">
                View two websites side-by-side without the window management hassle.
                Perfect for research, writing, coding, or just keeping an eye on multiple things at once.
              </p>
            </div>

            <div className="order-1 lg:order-2" data-testid="image-showcase-splitview">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 transform hover:scale-[1.02] transition-transform duration-500">
                <img 
                  src={splitViewImage} 
                  alt="Arc Browser Split View"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Section 4 - Privacy */}
      <section className="py-20 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-testid="image-showcase-privacy">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 transform hover:scale-[1.02] transition-transform duration-500">
                <img 
                  src={privacyImage} 
                  alt="Arc Browser Privacy Features"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Security</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-showcase-privacy-heading">
                The comfort of privacy
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8">
                Browse without being watched. Arc blocks trackers by default and gives you
                complete control over your data. Your browsing history is yours alone.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-card border border-card-border">
                  <Lock className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-semibold mb-1">Ad Blocking</h4>
                  <p className="text-sm text-muted-foreground">Built-in protection</p>
                </div>
                <div className="p-4 rounded-xl bg-card border border-card-border">
                  <Shield className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-semibold mb-1">Tracker Protection</h4>
                  <p className="text-sm text-muted-foreground">Stop being followed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 relative overflow-hidden" id="download">
        <div className="absolute inset-0 bg-gradient-to-br from-chart-1 via-chart-2 to-chart-3 opacity-100">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/50"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Enter your new home
            </span>
            <br />
            <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              on the Internet
            </span>
          </h2>

          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join thousands of people who've already made the switch to a better browsing experience.
          </p>

          <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto">
            <div className="flex gap-3" data-testid="form-email-signup-footer">
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="Enter your email..."
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
                {signupMutation.isPending ? "Joining..." : "Get Arc"}
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
                <li><a href="#download" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-download">Download</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-releases">Releases</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-roadmap">Roadmap</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-about">About</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-blog">Blog</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-careers">Careers</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-press">Press</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">Resources</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-support">Support</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-docs">Documentation</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-community">Community</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-contact">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-privacy">Privacy</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-terms">Terms</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-security">Security</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-licenses">Licenses</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-chart-1 to-chart-2 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-sm text-muted-foreground">© 2024 Arc Browser. All rights reserved.</span>
            </div>

            <div className="flex items-center gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-twitter" aria-label="X (Twitter)">
                <SiX className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-github" aria-label="GitHub">
                <SiGithub className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-discord" aria-label="Discord">
                <SiDiscord className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
