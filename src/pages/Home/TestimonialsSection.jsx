import { Box, Container, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import TestimonialVideoCard from "./TestimonialVideoCard";

const testimonials = [
  {
    id: 1,
    name: "Mrunal Kullkarni",
    quote: "The care I received was exceptional. My chronic back pain has significantly improved after treatment.",
    youtubeId: "LZHbA26Ah9o"
  },
  {
    id: 2,
    name: "Sanket Kadam",
    quote: "Professional staff and excellent treatment. My digestive issues are finally resolved.",
    youtubeId: "LZHbA26Ah9o"
  },
  {
    id: 3,
    name: "Rohini Deshpande",
    quote: "Life-changing experience! The holistic approach helped me recover faster than expected.",
    youtubeId: "LZHbA26Ah9o"
  },
  {
    id: 4,
    name: "Rajesh Kumar",
    quote: "Excellent consultation and follow-up care. Highly recommended for anyone seeking quality treatment.",
    youtubeId: "LZHbA26Ah9o"
  },
  {
    id: 5,
    name: "Priya Sharma",
    quote: "The personalized attention and care made all the difference in my recovery journey.",
    youtubeId: "LZHbA26Ah9o"
  },
  {
    id: 6,
    name: "Amit Patel",
    quote: "Outstanding service! From diagnosis to treatment, everything was handled professionally.",
    youtubeId: "LZHbA26Ah9o"
  }
];

export default function TestimonialsSection() {
  const scrollContainerRef = useRef(null);
  const scrollIntervalRef = useRef(null);
  const isScrollingRef = useRef(true);
  const [isAutoPlaying] = useState(true);

  // Duplicate testimonials for seamless scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (!isScrollingRef.current) return;

      const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
      const currentScroll = scrollContainer.scrollLeft;

      if (currentScroll >= maxScroll - 1) {
        scrollContainer.scrollTo({ left: 0, behavior: "auto" });
      } else {
        scrollContainer.scrollBy({ left: 0.5, behavior: "auto" });
      }
    };

    if (isAutoPlaying) {
      scrollIntervalRef.current = setInterval(scroll, 30);
    }

    const handleMouseEnter = () => {
      isScrollingRef.current = false;
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
    };

    const handleMouseLeave = () => {
      isScrollingRef.current = true;
      if (isAutoPlaying) {
        scrollIntervalRef.current = setInterval(scroll, 30);
      }
    };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isAutoPlaying]);

  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 6, sm: 8, md: 10 },
        backgroundColor: "#f8f9fa",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ textAlign: "center", mb: { xs: 6, sm: 7, md: 8 } }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 600,
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem", lg: "3.5rem" },
              color: "#1a1a1a",
              mb: 2,
            }}
          >
            Patient Video Testimonials
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
              color: "#666",
              maxWidth: "700px",
              mx: "auto",
              mb: 4,
            }}
          >
            Hear directly from our patients about their healing journey and exceptional care experience.
          </Typography>
        </Box>

        <Box
          ref={scrollContainerRef}
          sx={{
            display: "flex",
            gap: { xs: 4, sm: 6, md: 8, lg: 10 },
            overflowX: "auto",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
            py: 3,
            px: 2,
          }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <Box key={`${testimonial.id}-${index}`} sx={{ flexShrink: 0 }}>
              <TestimonialVideoCard
                name={testimonial.name}
                quote={testimonial.quote}
                youtubeId={testimonial.youtubeId}
              />
            </Box>
          ))}
        </Box>

        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            mt: 4,
            color: "#888",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          ← Drag to scroll • Click on any card to watch full testimonial →
        </Typography>
      </Container>
    </Box>
  );
}