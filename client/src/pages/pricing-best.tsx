import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  ArrowLeft,
  CheckCircle2,
  Server,
  Database,
  Shield,
  Tag,
  ArrowRight,
  XCircle
} from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FileText, MessageCircle } from "lucide-react";

import ankyloLogo from "@assets/WhatsApp_Image_2025-10-10_at_18.36.58_1fb5438e-removebg-preview_1760631104312.png";

export default function PricingBest() {
  const [, setLocation] = useLocation();
  const [contactDialogOpen, setContactDialogOpen] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const costs = [
    {
      icon: Server,
      title: "Server Infrastructure",
      description: "Cloud servers for reliable access",
      originalCost: 300,
      color: "from-chart-1 to-chart-2"
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Secure database with backups",
      originalCost: 250,
      color: "from-chart-2 to-chart-3"
    },
    {
      icon: Shield,
      title: "Security & SSL",
      description: "Basic security with SSL certificates",
      originalCost: 200,
      color: "from-chart-3 to-chart-4"
    }
  ];

  const originalTotal = costs.reduce((sum, cost) => sum + cost.originalCost, 0);
  const discountPercent = 7;
  const discountAmount = originalTotal - 699;
  const finalPrice = 699;

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <motion.nav 
        initial="initial"
        animate="animate"
        variants={fadeInUp}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/95 border-b border-border/40"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-2 md:gap-3" data-testid="link-home">
              <img 
                src={ankyloLogo} 
                alt="Ankylo Logo" 
                className="w-10 h-10 md:w-12 md:h-12 protected-image"
                onContextMenu={(e) => e.preventDefault()}
                draggable={false}
              />
              <span className="text-lg md:text-2xl font-bold text-foreground hidden sm:inline">Ankylo Gaming POS</span>
              <span className="text-lg font-bold text-foreground sm:hidden">Ankylo</span>
            </Link>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full px-4 md:px-8" 
              data-testid="button-back-home"
              onClick={() => setLocation("/")}
            >
              <ArrowLeft className="w-4 h-4 md:mr-2" />
              <span className="hidden md:inline">Back to Home</span>
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-lines">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-chart-1/20 to-chart-2/20 border border-chart-1/30 mb-6"
            >
              <Tag className="w-4 h-4 text-chart-1" />
              <span className="text-sm font-semibold">Best Plan - Perfect for Single Category Cafes</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight" 
              data-testid="text-pricing-heading"
            >
              Best Plan - Detailed Pricing
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed" 
              data-testid="text-pricing-description"
            >
              Complete transparency on what you're getting with your subscription
            </motion.p>
          </div>
        </div>
      </section>

      {/* Cost Breakdown */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What's Included in Best Plan
            </h2>
            <p className="text-lg text-muted-foreground">
              Here's the complete breakdown of monthly costs
            </p>
          </motion.div>

          <div className="space-y-6 mb-12">
            {costs.map((cost, index) => {
              const Icon = cost.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  data-testid={`card-cost-${index}`}
                >
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cost.color} bg-opacity-10 flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{cost.title}</h3>
                        <p className="text-muted-foreground">{cost.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold">₹{cost.originalCost}</div>
                        <div className="text-sm text-muted-foreground">/month</div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Pricing Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 bg-gradient-to-br from-chart-1/5 to-chart-2/5 border-2 border-chart-1/20">
              <div className="space-y-4">
                <div className="flex justify-between items-center text-lg">
                  <span className="text-muted-foreground">Original Total</span>
                  <span className="font-semibold">₹{originalTotal}/month</span>
                </div>

                <div className="flex justify-between items-center text-lg">
                  <div className="flex items-center gap-2">
                    <Tag className="w-5 h-5 text-chart-1" />
                    <span className="text-chart-1 font-semibold">Launch Discount ({discountPercent}%)</span>
                  </div>
                  <span className="text-chart-1 font-semibold">-₹{discountAmount}</span>
                </div>

                <div className="border-t border-border/50 pt-4 mt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold">Your Monthly Price</span>
                    <div className="text-right">
                      <div className="text-4xl font-bold text-chart-1">₹{finalPrice}</div>
                      <div className="text-sm text-muted-foreground line-through">₹{originalTotal}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Features Included */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What You Get with Best Plan
            </h2>
            <p className="text-muted-foreground">Perfect for cafes with a single gaming category</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { text: "Single category access (Choose PS5, PC, or VR)", included: true },
              { text: "Session & booking management", included: true },
              { text: "Basic analytics & reports", included: true },
              { text: "Food & beverage management", included: true },
              { text: "Customer management", included: true },
              { text: "Expense tracking", included: true },
              { text: "Email support", included: true },
              { text: "Automated billing", included: true },
              { text: "Data export & backups", included: true },
              { text: "Live availability webpage", included: false },
              { text: "AI Maintenance & Predictions", included: false },
              { text: "Complete inventory management", included: false },
              { text: "All categories (PS5, PC, VR, Xbox)", included: false },
              { text: "Priority 24/7 support", included: false }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex items-start gap-3"
                data-testid={`feature-${index}`}
              >
                {feature.included ? (
                  <CheckCircle2 className="w-6 h-6 text-chart-1 mt-0.5 flex-shrink-0" />
                ) : (
                  <XCircle className="w-6 h-6 text-muted-foreground/50 mt-0.5 flex-shrink-0" />
                )}
                <span className={`text-lg ${!feature.included ? 'text-muted-foreground line-through' : ''}`}>
                  {feature.text}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="p-6 bg-gradient-to-r from-chart-1/10 to-chart-2/10 border-chart-1/30">
              <p className="text-lg font-semibold mb-4">
                💡 Want all features and all categories? 
              </p>
              <p className="text-muted-foreground mb-6">
                Upgrade to Pro Plan for just ₹200 more and get everything!
              </p>
              <Button 
                onClick={() => setLocation("/pricing-pro")}
                className="bg-gradient-to-r from-chart-1 to-chart-2 hover:opacity-90"
                data-testid="button-upgrade-pro"
              >
                View Pro Plan
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-chart-1/10 to-chart-2/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Contact us today to activate your Best Plan
            </p>

            <Dialog open={contactDialogOpen} onOpenChange={setContactDialogOpen}>
              <DialogTrigger asChild>
                <Button 
                  size="lg" 
                  className="rounded-full px-12 py-7 text-xl bg-gradient-to-r from-chart-1 to-chart-2 hover:opacity-90"
                  data-testid="button-activate-plan"
                >
                  Activate Best Plan
                  <ArrowRight className="w-5 h-5 ml-2" />
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

            <p className="text-sm text-muted-foreground mt-6">
              No credit card required • 14-day free trial included
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img 
                src={ankyloLogo} 
                alt="Ankylo Logo" 
                className="w-10 h-10 protected-image"
                onContextMenu={(e) => e.preventDefault()}
                draggable={false}
              />
              <span className="text-lg font-bold">Ankylo Gaming POS</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 Ankylo Gaming POS. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
