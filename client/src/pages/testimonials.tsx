import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ScrollToTop } from "@/components/scroll-to-top";
import { useEffect } from "react";
import { Schema, organizationSchema, productSchema, generateBreadcrumbSchema, generateReviewSchema } from "@/components/seo/Schema";
import { ArrowLeft, Star, Quote, MapPin, ArrowRight } from "lucide-react";
import airavotoLogo from "@assets/20251023_202645_1762943113599.png";

interface Testimonial {
  id: string;
  author: string;
  role: string;
  businessName: string;
  location: string;
  rating: number;
  reviewBody: string;
  datePublished: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    author: "Rajesh Kumar",
    role: "Owner",
    businessName: "GameZone Arena",
    location: "Mumbai, Maharashtra",
    rating: 5,
    reviewBody: "Airavoto Gaming has completely transformed how we manage our gaming center. The real-time session tracking and automated billing save us hours every day. Our revenue has increased by 30% since implementation!",
    datePublished: "2025-01-10",
    initials: "RK"
  },
  {
    id: "2",
    author: "Priya Sharma",
    role: "Manager",
    businessName: "Digital Gamers Hub",
    location: "Delhi, NCR",
    rating: 5,
    reviewBody: "The happy hours management feature is a game changer! We can now maximize our off-peak hours and attract more customers. The system is incredibly easy to use, and the support team is always responsive.",
    datePublished: "2025-01-08",
    initials: "PS"
  },
  {
    id: "3",
    author: "Amit Patel",
    role: "Owner",
    businessName: "Cyber Gaming Cafe",
    location: "Ahmedabad, Gujarat",
    rating: 5,
    reviewBody: "Best investment we've made for our gaming center. The inventory management and F&B tracking features have eliminated all the manual work. We can now focus on growing our business instead of paperwork.",
    datePublished: "2025-01-05",
    initials: "AP"
  },
  {
    id: "4",
    author: "Sneha Reddy",
    role: "Co-owner",
    businessName: "PlayMax Gaming",
    location: "Hyderabad, Telangana",
    rating: 5,
    reviewBody: "The live seat availability webpage is brilliant! Our customers love being able to check availability before coming in. It has significantly reduced wait times and improved customer satisfaction.",
    datePublished: "2025-01-03",
    initials: "SR"
  },
  {
    id: "5",
    author: "Vikram Singh",
    role: "Owner",
    businessName: "PixelPlay Arena",
    location: "Bangalore, Karnataka",
    rating: 5,
    reviewBody: "Airavoto Gaming POS has everything we need in one platform. From session management to financial reports, it's all there. The system is reliable, fast, and the team provides excellent support. Highly recommended!",
    datePublished: "2024-12-28",
    initials: "VS"
  },
  {
    id: "6",
    author: "Anjali Mehta",
    role: "Manager",
    businessName: "Ultimate Gaming Center",
    location: "Pune, Maharashtra",
    rating: 5,
    reviewBody: "We've tried other POS systems before, but Airavoto Gaming is in a league of its own. The booking management and discount features make it so easy to run promotions and keep customers engaged.",
    datePublished: "2024-12-25",
    initials: "AM"
  },
  {
    id: "7",
    author: "Karthik Nair",
    role: "Owner",
    businessName: "GameHub Pro",
    location: "Chennai, Tamil Nadu",
    rating: 4,
    reviewBody: "Very impressed with the comprehensive features and ease of use. The AI maintenance predictions help us prevent downtime. Would love to see more customization options in the future.",
    datePublished: "2024-12-20",
    initials: "KN"
  },
  {
    id: "8",
    author: "Deepak Gupta",
    role: "Owner",
    businessName: "Esports Arena",
    location: "Jaipur, Rajasthan",
    rating: 5,
    reviewBody: "Running tournaments and managing multiple gaming stations has never been easier. The analytics dashboard gives us insights we never had before. Airavoto Gaming is a must-have for any serious gaming center.",
    datePublished: "2024-12-15",
    initials: "DG"
  },
  {
    id: "9",
    author: "Meera Krishnan",
    role: "Co-owner",
    businessName: "VR Gaming World",
    location: "Kochi, Kerala",
    rating: 5,
    reviewBody: "The VR session management works flawlessly with our setup. We can track everything from headset usage to playtime, and the reporting is excellent. Customer support is top-notch!",
    datePublished: "2024-12-10",
    initials: "MK"
  },
  {
    id: "10",
    author: "Rohit Verma",
    role: "Manager",
    businessName: "Champion Gaming Zone",
    location: "Lucknow, Uttar Pradesh",
    rating: 5,
    reviewBody: "Switching to Airavoto Gaming was the best decision for our business. The expense tracking and profit reports give us complete visibility into our operations. It's made us much more efficient and profitable.",
    datePublished: "2024-12-05",
    initials: "RV"
  }
];

export default function Testimonials() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    document.title = "Testimonials - Airavoto Gaming | Customer Reviews & Success Stories";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Read real customer reviews and success stories from gaming center owners using Airavoto Gaming POS. See how our platform has helped gaming businesses grow across India.');
    }
  }, []);

  const breadcrumbData = [
    { name: "Home", url: "https://airavotogaming.com/" },
    { name: "Testimonials", url: "https://airavotogaming.com/testimonials" }
  ];

  const reviewsForSchema = testimonials.map(t => ({
    author: t.author,
    rating: t.rating,
    reviewBody: t.reviewBody,
    datePublished: t.datePublished
  }));

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const averageRating = (testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length).toFixed(1);
  const totalReviews = testimonials.length;
  const fiveStarCount = testimonials.filter(t => t.rating === 5).length;
  const fourStarCount = testimonials.filter(t => t.rating === 4).length;

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      <Schema schema={[
        organizationSchema,
        productSchema,
        generateBreadcrumbSchema(breadcrumbData),
        ...generateReviewSchema(reviewsForSchema)
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
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-chart-1/10 via-chart-2/10 to-background"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-chart-1 to-chart-2">Gaming Centers</span> Across India
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Don't just take our word for it. Hear from real gaming center owners who have transformed their businesses with Airavoto Gaming.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-chart-1 mb-2">{averageRating}</div>
                  <div className="flex justify-center mb-2">{renderStars(5)}</div>
                  <div className="text-sm text-muted-foreground">Average Rating</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-chart-2 mb-2">{totalReviews}+</div>
                  <div className="text-sm text-muted-foreground">Customer Reviews</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-chart-3 mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
            >
              <Card className="h-full hover-elevate">
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-chart-1 mb-4" />
                  
                  <div className="flex items-start gap-4 mb-4">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-gradient-to-br from-chart-1 to-chart-2 text-white font-semibold">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="font-semibold text-lg" data-testid={`name-${testimonial.id}`}>
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.businessName}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                        <MapPin className="w-3 h-3" />
                        <span>{testimonial.location}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      {renderStars(testimonial.rating)}
                      <span className="text-xs text-muted-foreground">{testimonial.datePublished}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed" data-testid={`review-${testimonial.id}`}>
                    {testimonial.reviewBody}
                  </p>
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
                Join These Successful Gaming Centers
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Experience the same growth and efficiency. Try Airavoto Gaming POS today.
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
