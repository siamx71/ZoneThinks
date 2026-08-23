import React, { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = "ZoneThinks IT | World-Class Web Development & Digital Engineering Agency",
  description = "We engineer high-speed, conversion-driven web applications, scalable digital architectures, and bespoke digital experiences that accelerate business growth.",
  keywords = "web development agency, React Next.js agency, enterprise frontend, SaaS engineering, custom web design",
  ogImage = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
  canonicalUrl = "https://zonethinks.it/"
}) => {
  useEffect(() => {
    document.title = title.includes("ZoneThinks IT") ? title : `${title} | ZoneThinks IT`;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', description);
    }

    const ogImg = document.querySelector('meta[property="og:image"]');
    if (ogImg) {
      ogImg.setAttribute('content', ogImage);
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', canonicalUrl);
    }
  }, [title, description, keywords, ogImage, canonicalUrl]);

  return null;
};
