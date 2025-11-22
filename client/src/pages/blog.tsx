import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollToTop } from "@/components/scroll-to-top";
import { useEffect } from "react";
import { Schema, organizationSchema, generateBreadcrumbSchema } from "@/components/seo/Schema";
import { ArrowLeft, Calendar, Clock, Tag, ArrowRight } from "lucide-react";
import airavotoLogo from "@assets/20251023_202645_1762943113599.png";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  publishDate: string;
  author: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "10 Essential Features Every Gaming Center Needs in 2025",
    slug: "essential-features-gaming-center-2025",
    excerpt: "Discover the must-have features that will set your gaming center apart from the competition and keep customers coming back.",
    content: "As the gaming industry continues to evolve, gaming centers must adapt to meet the changing demands of gamers. From real-time session management to smart booking systems, we explore the top 10 features that every modern gaming center needs to succeed in 2025.",
    category: "Gaming Industry",
    readTime: "5 min",
    publishDate: "January 15, 2025",
    author: "Airavoto Team"
  },
  {
    id: "2",
    title: "How to Maximize Revenue with Happy Hours Management",
    slug: "maximize-revenue-happy-hours",
    excerpt: "Learn proven strategies to boost your gaming center revenue during off-peak hours with smart happy hour pricing.",
    content: "Happy hours aren't just for bars! Gaming centers can significantly increase revenue by implementing strategic happy hour pricing. We share data-driven insights on the best times to offer discounts, how much to discount, and how to promote your happy hours effectively.",
    category: "Business Tips",
    readTime: "7 min",
    publishDate: "January 12, 2025",
    author: "Airavoto Team"
  },
  {
    id: "3",
    title: "The Complete Guide to Starting a Gaming Center in India",
    slug: "complete-guide-starting-gaming-center-india",
    excerpt: "Everything you need to know about launching a successful gaming center in India, from location selection to equipment choices.",
    content: "Starting a gaming center in India is an exciting venture. This comprehensive guide covers everything from choosing the right location, selecting gaming equipment, pricing strategies, marketing tactics, and managing operations efficiently with modern POS systems.",
    category: "Startup Guide",
    readTime: "12 min",
    publishDate: "January 8, 2025",
    author: "Airavoto Team"
  },
  {
    id: "4",
    title: "Why Real-Time Session Management Matters for Gaming Centers",
    slug: "real-time-session-management-importance",
    excerpt: "Understand how real-time session tracking can transform your gaming center operations and improve customer satisfaction.",
    content: "Real-time session management is the backbone of modern gaming center operations. It allows you to track which stations are occupied, monitor session duration, prevent overbooking, and provide accurate billing automatically. Learn why this feature is non-negotiable for serious gaming center owners.",
    category: "Technology",
    readTime: "6 min",
    publishDate: "January 5, 2025",
    author: "Airavoto Team"
  },
  {
    id: "5",
    title: "Managing Food & Beverage Sales: Best Practices for Gaming Centers",
    slug: "managing-food-beverage-gaming-centers",
    excerpt: "Optimize your F&B operations to create an additional revenue stream and enhance the gaming experience.",
    content: "Food and beverage sales can contribute 20-30% of a gaming center's revenue when managed properly. Learn how to streamline your F&B operations, manage inventory efficiently, integrate with your gaming POS system, and create an experience that keeps gamers fueled and happy.",
    category: "Business Tips",
    readTime: "8 min",
    publishDate: "January 1, 2025",
    author: "Airavoto Team"
  },
  {
    id: "6",
    title: "The Future of Gaming Centers: Trends to Watch in 2025",
    slug: "future-gaming-centers-2025-trends",
    excerpt: "Stay ahead of the curve with insights into emerging trends shaping the gaming center industry.",
    content: "The gaming industry is evolving rapidly. VR gaming is becoming more accessible, esports tournaments are growing in popularity, and customers expect seamless experiences. Explore the key trends that will define gaming centers in 2025 and beyond, including cloud gaming integration, AI-powered maintenance, and advanced analytics.",
    category: "Gaming Industry",
    readTime: "10 min",
    publishDate: "December 28, 2024",
    author: "Airavoto Team"
  }
];

export default function Blog() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    document.title = "Blog - Airavoto Gaming | Gaming Center Management Insights";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Read expert insights on gaming center management, industry trends, business tips, and technology guides. Learn how to grow your gaming business with Airavoto Gaming.');
    }
  }, []);

  const breadcrumbData = [
    { name: "Home", url: "https://airavotogaming.com/" },
    { name: "Blog", url: "https://airavotogaming.com/blog" }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const categories = Array.from(new Set(blogPosts.map(post => post.category)));

  return (
    <div className="min-h-screen">
      <Schema schema={[
        organizationSchema,
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
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-chart-1/10 via-chart-2/10 to-background"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Gaming Center <span className="text-transparent bg-clip-text bg-gradient-to-r from-chart-1 to-chart-2">Insights & Tips</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Expert advice, industry trends, and practical guides to help you build and grow a successful gaming center business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full flex flex-col hover-elevate">
                <CardHeader className="gap-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge variant="secondary" data-testid={`badge-category-${post.id}`}>
                      <Tag className="w-3 h-3 mr-1" />
                      {post.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold leading-tight" data-testid={`title-post-${post.id}`}>
                    {post.title}
                  </h2>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col gap-4">
                  <p className="text-muted-foreground flex-1" data-testid={`excerpt-post-${post.id}`}>
                    {post.excerpt}
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{post.publishDate}</span>
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      data-testid={`button-read-${post.id}`}
                      onClick={() => setLocation(`/blog/${post.slug}`)}
                    >
                      Read Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-chart-1/20 to-chart-2/20"></div>
            <CardContent className="relative z-10 p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Gaming Center?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join hundreds of gaming centers already using Airavoto Gaming POS to streamline operations and boost revenue.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button 
                  size="lg" 
                  className="rounded-full px-8"
                  data-testid="button-try-demo"
                  onClick={() => window.open("https://demotestposairavoto.onrender.com/", "_blank")}
                >
                  Try Live Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="rounded-full px-8"
                  data-testid="button-contact"
                  onClick={() => setLocation("/")}
                >
                  Contact Us
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <ScrollToTop />
    </div>
  );
}
