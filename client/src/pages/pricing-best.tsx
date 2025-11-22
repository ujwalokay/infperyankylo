import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollToTop } from "@/components/scroll-to-top";
import { useEffect, useState } from "react";
import { Schema, productSchema, generateBreadcrumbSchema } from "@/components/seo/Schema";
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FileText, MessageCircle } from "lucide-react";
import { SiInstagram } from "react-icons/si";

import airavotoLogo from "@assets/20251023_202645_1762943113599.png";

export default function PricingBest() {
  const [, setLocation] = useLocation();
  const [contactDialogOpen, setContactDialogOpen] = useState(false);

  useEffect(() => {
    document.title = "Pricing - Airavoto Gaming | Affordable Gaming Center Management";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Get Airavoto Gaming POS at an affordable price. All-in-one gaming center management with transparent pricing. Contact us for a customized quote for your gaming business.');
    }
  }, []);

  const breadcrumbData = [
    { name: "Home", url: "https://airavotogaming.com/" },
    { name: "Pricing", url: "https://airavotogaming.com/pricing-best" }
  ];

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
      originalCost: 1500,
      color: "from-chart-1 to-chart-2"
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Secure database with backups",
      originalCost: 1200,
      color: "from-chart-2 to-chart-3"
    },
    {
      icon: Shield,
      title: "Security & SSL",
      description: "Basic security with SSL certificates",
      originalCost: 1000,
      color: "from-chart-3 to-chart-4"
    }
  ];

  const originalTotal = costs.reduce((sum, cost) => sum + cost.originalCost, 0);
  const finalPrice = 2499;
  const discountAmount = originalTotal - finalPrice;
  const discountPercent = Math.round((discountAmount / originalTotal) * 100);
  
  const formatPrice = (price: number) => price.toLocaleString('en-IN');

  return (
    <div className="min-h-screen">
      <Schema schema={[
        productSchema,
        generateBreadcrumbSchema(breadcrumbData)
      ]} />
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
                src={airavotoLogo} 
                alt="Airavoto Gaming Logo" 
                className="w-10 h-10 md:w-12 md:h-12 protected-image"
                onContextMenu={(e) => e.preventDefault()}
                draggable={false}
              />
              <span className="text-lg md:text-2xl font-bold text-foreground hidden sm:inline">Airavoto Gaming</span>
              <span className="text-lg font-bold text-foreground sm:hidden">Airavoto</span>
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
              <span className="text-sm font-semibold">MOST POPULAR - Perfect for Single Cafe</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight" 
              data-testid="text-pricing-heading"
            >
              Pro Plan - Detailed Pricing
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
              What You Get with Pro Plan (₹2,499)
            </h2>
            <p className="text-muted-foreground">Perfect for single cafe operations</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { text: "All categories: PS5, PC, VR, Xbox & more", included: true },
              { text: "Session & booking management", included: true },
              { text: "Basic analytics & reports", included: true },
              { text: "Food & beverage management", included: true },
              { text: "Customer management", included: true },
              { text: "Basic inventory tracking", included: true },
              { text: "Expense tracking", included: true },
              { text: "Google login support", included: true },
              { text: "Automated billing", included: true },
              { text: "Data export", included: true },
              { text: "Timeline view & scheduling", included: true },
              { text: "Real-time session tracking", included: true }
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
                💡 Need multi-cafe management? 
              </p>
              <p className="text-muted-foreground mb-6">
                Upgrade to Professional Plan for ₹3,999/month and get admin panel dashboard for all your cafes!
              </p>
              <Button 
                onClick={() => setLocation("/pricing-pro")}
                className="bg-gradient-to-r from-chart-1 to-chart-2 hover:opacity-90"
                data-testid="button-upgrade-professional"
              >
                View Professional Plan
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
              Contact us today to get started with the Pro Plan
            </p>

            <Dialog open={contactDialogOpen} onOpenChange={setContactDialogOpen}>
              <DialogTrigger asChild>
                <Button 
                  size="lg" 
                  className="rounded-full px-12 py-7 text-xl bg-gradient-to-r from-chart-1 to-chart-2 hover:opacity-90"
                  data-testid="button-get-started"
                >
                  Get Started
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
                      window.open('https://forms.gle/QiFf57g7bdU1UTX19', '_blank');
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
                      window.open('https://www.instagram.com/airavotogaming?igsh=MTEwOGx5emN5cXhldg==', '_blank');
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

            <p className="text-sm text-muted-foreground mt-6">
              No credit card required • 7-day free trial included
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
                src={airavotoLogo} 
                alt="Airavoto Gaming Logo" 
                className="w-10 h-10 protected-image"
                onContextMenu={(e) => e.preventDefault()}
                draggable={false}
              />
              <span className="text-lg font-bold">Airavoto Gaming</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 Airavoto Gaming. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  );
}
