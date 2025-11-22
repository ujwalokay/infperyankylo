import { useEffect } from 'react';

interface SchemaProps {
  schema: object | object[];
}

export function Schema({ schema }: SchemaProps) {
  useEffect(() => {
    const scriptId = 'schema-' + JSON.stringify(schema).substring(0, 20);
    const existingScript = document.getElementById(scriptId);
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify(Array.isArray(schema) ? schema : [schema]);
      document.head.appendChild(script);
      
      return () => {
        const scriptToRemove = document.getElementById(scriptId);
        if (scriptToRemove) {
          document.head.removeChild(scriptToRemove);
        }
      };
    }
  }, [schema]);

  return null;
}

// Organization Schema for Airavoto Gaming
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Airavoto Gaming",
  "url": "https://airavotogaming.com",
  "logo": "https://airavotogaming.com/favicon.png",
  "description": "Complete gaming center management system providing real-time session tracking, booking management, inventory control, and financial oversight for gaming centers across India.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-8657955764",
    "contactType": "Customer Service",
    "email": "airavotogaming@gmail.com",
    "availableLanguage": ["English", "Hindi"]
  },
  "sameAs": [
    "https://www.instagram.com/airavotogaming",
    "https://x.com/airvotogaming",
    "https://facebook.com/airvotogaming",
    "https://youtube.com/@airvotogaming"
  ]
};

// Product Schema for Gaming POS System
export const productSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Airavoto Gaming POS",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web Browser",
  "description": "All-in-one gaming center management platform with real-time session tracking, smart booking, inventory control, F&B management, and comprehensive financial reporting.",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "INR",
    "availability": "https://schema.org/InStock",
    "url": "https://airavotogaming.com"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "150",
    "bestRating": "5",
    "worstRating": "1"
  },
  "featureList": [
    "Real-time Session Management",
    "Smart Booking System", 
    "Inventory Control",
    "F&B Management",
    "Financial Reports",
    "Happy Hours Management",
    "Flexible Discount System"
  ]
};

// LocalBusiness Schema
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://airavotogaming.com",
  "name": "Airavoto Gaming",
  "image": "https://airavotogaming.com/favicon.png",
  "description": "India's leading gaming center management platform helping gaming businesses streamline operations and grow.",
  "url": "https://airavotogaming.com",
  "telephone": "+91-8657955764",
  "email": "airavotogaming@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN"
  },
  "priceRange": "Contact for pricing",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday", 
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  }
};

// FAQ Schema generator
export function generateFAQSchema(faqs: Array<{question: string; answer: string}>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

// Breadcrumb Schema generator
export function generateBreadcrumbSchema(items: Array<{name: string; url: string}>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

// Article Schema generator for blog posts
export function generateArticleSchema(article: {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Airavoto Gaming",
      "logo": {
        "@type": "ImageObject",
        "url": "https://airavotogaming.com/favicon.png"
      }
    },
    "datePublished": article.datePublished,
    "dateModified": article.dateModified || article.datePublished,
    "image": article.image || "https://airavotogaming.com/favicon.png"
  };
}

// Review Schema generator
export function generateReviewSchema(reviews: Array<{
  author: string;
  rating: number;
  reviewBody: string;
  datePublished: string;
}>) {
  return reviews.map(review => ({
    "@context": "https://schema.org",
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": review.author
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating,
      "bestRating": "5",
      "worstRating": "1"
    },
    "reviewBody": review.reviewBody,
    "datePublished": review.datePublished,
    "itemReviewed": {
      "@type": "SoftwareApplication",
      "name": "Airavoto Gaming POS"
    }
  }));
}
