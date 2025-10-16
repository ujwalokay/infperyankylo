import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft,
  MonitorPlay,
  Clock,
  History,
  FileText,
  BarChart3,
  Utensils,
  Wallet,
  Settings,
  FileBarChart,
  FileCheck,
  CalendarCheck,
  Users,
  DollarSign
} from "lucide-react";

import seatManagementImage from "@assets/Screenshot (135)_1760629404121.png";

export default function Features() {
  const [, setLocation] = useLocation();
  
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const features = [
    {
      id: 1,
      icon: MonitorPlay,
      title: "Dashboard",
      description: "Get a complete overview of your gaming center operations at a glance. Real-time statistics, active sessions, revenue tracking, and quick access to all critical functions in one unified dashboard.",
      image: seatManagementImage,
      color: "from-chart-1 to-chart-2"
    },
    {
      id: 2,
      icon: CalendarCheck,
      title: "Seat Management",
      description: "Monitor and manage all gaming seats with real-time status updates. Track walk-in lists, upcoming bookings, and happy hours. Search by seat, customer name, or phone number for instant access to booking information.",
      image: seatManagementImage,
      color: "from-chart-2 to-chart-3"
    },
    {
      id: 3,
      icon: Clock,
      title: "Timeline",
      description: "Visualize your entire day's schedule with an intuitive timeline view. See all bookings, sessions, and events chronologically to manage your gaming center's flow efficiently.",
      image: seatManagementImage,
      color: "from-chart-3 to-chart-4"
    },
    {
      id: 4,
      icon: History,
      title: "History",
      description: "Access complete historical records of all bookings, sessions, and transactions. Filter by date, customer, or seat to analyze past activities and generate insights for better business decisions.",
      image: seatManagementImage,
      color: "from-chart-4 to-chart-1"
    },
    {
      id: 5,
      icon: FileText,
      title: "Activity Logs",
      description: "Track every action and change in your system with detailed activity logs. Monitor user actions, system events, and maintain complete audit trails for security and compliance.",
      image: seatManagementImage,
      color: "from-chart-1 to-chart-3"
    },
    {
      id: 6,
      icon: BarChart3,
      title: "Analytics",
      description: "Gain deep insights into your business performance with comprehensive analytics. Track revenue trends, peak hours, customer behavior, and device utilization with interactive charts and reports.",
      image: seatManagementImage,
      color: "from-chart-2 to-chart-4"
    },
    {
      id: 7,
      icon: Utensils,
      title: "Food & Beverage",
      description: "Manage your food and beverage operations seamlessly. Process orders, track inventory, set dynamic pricing, and integrate F&B sales with gaming sessions for complete revenue tracking.",
      image: seatManagementImage,
      color: "from-chart-3 to-chart-1"
    },
    {
      id: 8,
      icon: Wallet,
      title: "Expenses",
      description: "Keep track of all your business expenses with category-wise organization. Record operational costs, vendor payments, and maintenance expenses to understand your profitability clearly.",
      image: seatManagementImage,
      color: "from-chart-4 to-chart-2"
    },
    {
      id: 9,
      icon: Settings,
      title: "Settings",
      description: "Customize your gaming center's configuration to match your business needs. Manage devices, pricing plans, happy hours, user roles, and system preferences all in one place.",
      image: seatManagementImage,
      color: "from-chart-1 to-chart-4"
    },
    {
      id: 10,
      icon: FileBarChart,
      title: "Reports",
      description: "Generate detailed reports on revenue, expenses, device utilization, and customer analytics. Export data in multiple formats for accounting, tax filing, and business planning.",
      image: seatManagementImage,
      color: "from-chart-2 to-chart-1"
    },
    {
      id: 11,
      icon: Users,
      title: "Customer Management",
      description: "Build and maintain comprehensive customer profiles. Track visit history, preferences, and spending patterns to create personalized experiences and loyalty programs.",
      image: seatManagementImage,
      color: "from-chart-3 to-chart-2"
    },
    {
      id: 12,
      icon: DollarSign,
      title: "Payment Processing",
      description: "Handle multiple payment methods seamlessly. Support cash, cards, UPI, and digital wallets with automatic invoice generation and payment tracking for complete financial transparency.",
      image: seatManagementImage,
      color: "from-chart-4 to-chart-3"
    }
  ];

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
            <Link href="/" className="flex items-center gap-3" data-testid="link-home">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-chart-1 to-chart-2 flex items-center justify-center">
                <MonitorPlay className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-foreground">Ankylo Gaming POS</span>
            </Link>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full px-8" 
              data-testid="button-back-home"
              onClick={() => setLocation("/")}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-lines">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight" 
              data-testid="text-features-heading"
            >
              Complete Gaming Center Management Suite
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed" 
              data-testid="text-features-description"
            >
              Everything you need to run a successful gaming center — from real-time session tracking to comprehensive financial analytics.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid gap-16 lg:gap-20">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className={`grid md:grid-cols-2 gap-8 lg:gap-12 items-center ${isEven ? '' : 'md:grid-flow-dense'}`}
                  data-testid={`card-feature-${feature.id}`}
                >
                  <div className={`space-y-6 ${isEven ? '' : 'md:col-start-2'}`}>
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} bg-opacity-10 flex items-center justify-center`}>
                      <Icon className="w-8 h-8 text-chart-1" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold">{feature.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  <div className={`rounded-2xl overflow-hidden border border-border/50 shadow-xl ${isEven ? '' : 'md:col-start-1 md:row-start-1'}`}>
                    <img 
                      src={feature.image} 
                      alt={`${feature.title} Interface`}
                      className="w-full h-auto"
                      data-testid={`image-feature-${feature.id}`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-chart-1/10 to-chart-2/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Gaming Center?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Start your 14-day free trial and experience the power of Ankylo Gaming POS
            </p>
            <Button 
              size="lg" 
              className="rounded-full px-10 py-6 text-lg bg-gradient-to-r from-chart-1 to-chart-2 hover:opacity-90"
              data-testid="button-get-started-cta"
              onClick={() => setLocation("/")}
            >
              Get Started Now
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-chart-1 to-chart-2 flex items-center justify-center">
                <MonitorPlay className="w-5 h-5 text-white" />
              </div>
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
